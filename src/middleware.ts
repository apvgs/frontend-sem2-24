import { jwtVerify } from 'jose'
import { type NextRequest, NextResponse } from 'next/server'

async function verifyJWT(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const { payload } = await jwtVerify(token, secret)
    return payload
  } catch (error) {
    return null
  }
}

export default async function middleware(req: NextRequest) {
  const protectedRoutes = {
    dashboard: '/dashboard',
  }
  const authRoute = ['/auth']

  const path = req.nextUrl.pathname
  const isProtectedRoute = Object.values(protectedRoutes).some(route =>
    path.startsWith(route)
  )
  const isAuthRoute = authRoute.some(route => path.startsWith(route))

  if (isProtectedRoute) {
    const token = req.cookies.get('gs_access_token')?.value

    if (token) {
      const tokenData = await verifyJWT(token)
      if (tokenData) {
        return NextResponse.next()
      }
    }
    const loginUrl = new URL('/auth/login', req.nextUrl)
    return NextResponse.redirect(loginUrl)
  }

  if (isAuthRoute) {
    const token = req.cookies.get('gs_access_token')?.value

    if (token) {
      const tokenData = await verifyJWT(token)
      if (tokenData) {
        const dashboardUrl = new URL('/dashboard', req.nextUrl)
        return NextResponse.redirect(dashboardUrl)
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'],
}
