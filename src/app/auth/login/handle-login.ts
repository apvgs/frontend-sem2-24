'use server'
import { NextResponse } from 'next/server'
import { loginDataSchema, type LoginDataInput } from '@/schemas'

export async function handleLogin(formData: LoginDataInput) {
  const loginDataParse = loginDataSchema.safeParse(formData)

  const loginData = loginDataParse.success
    ? {
        email: loginDataParse.data.email,
        password: loginDataParse.data.password,
      }
    : {}

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 30000)

  try {
    const req = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
      signal: controller.signal,
    })

    if (!req.ok) {
      const errorResponse = await req.text()
      return Promise.reject(new Error(JSON.parse(errorResponse).error))
    }

    const authResponse = await req.json()
    const { token } = authResponse.data
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    const res = NextResponse.json({ success: true })
    res.cookies.set('gs_access_token', token, {
      expires,
      httpOnly: true,
      secure: true,
    })
  } catch (e) {
    return Promise.reject(new Error('Houve um erro ao entrar na sua conta.'))
  } finally {
    clearTimeout(timeoutId)
  }
}
