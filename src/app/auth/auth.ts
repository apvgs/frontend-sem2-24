'use server'
import type { jwtToken } from '@/types'
import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import {
  loginDataSchema,
  type SignUpDataInput,
  type LoginDataInput,
  signupDataSchema,
} from '@/schemas'

const key = new TextEncoder().encode(process.env.JWT_SECRET)

export async function decrypt(input: string): Promise<jwtToken> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  })

  return payload as jwtToken
}

export async function handleLogin(formData: LoginDataInput) {
  const loginDataParse = loginDataSchema.safeParse(formData)

  const loginData = loginDataParse.success
    ? {
        email: loginDataParse.data.email,
        password: loginDataParse.data.password,
      }
    : {}

  try {
    const req = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })

    if (!req.ok) {
      const errorResponse = await req.text()
      return Promise.reject(new Error(JSON.parse(errorResponse).error))
    }

    const authResponse = await req.json()
    const { token } = authResponse

    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    const c = await cookies()
    c.set('gs_access_token', token, {
      expires,
      httpOnly: true,
    })
  } catch (e) {
    return Promise.reject(new Error('Houve um erro ao entrar na sua conta.'))
  }
}

export async function handleSignUp(formData: SignUpDataInput) {
  const signupDataParse = signupDataSchema.safeParse(formData)

  const signUpData = signupDataParse.success
    ? {
        name: signupDataParse.data.name,
        cpf: signupDataParse.data.cpf,
        email: signupDataParse.data.email,
        password: signupDataParse.data.password,
      }
    : {}
  try {
    const req = await fetch(`${process.env.BACKEND_URL}/user/auth/signup`, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpData),
    })

    if (!req.ok) {
      const errorResponse = await req.text()
      return Promise.reject(new Error(JSON.parse(errorResponse).error))
    }
  } catch (e) {
    return Promise.reject(new Error('Houve um erro ao cadastrar sua conta.'))
  }
}

export async function logout() {
  const c = await cookies()
  c.set('gs_access_token', '', { expires: new Date() })
}

export async function getSession() {
  const c = await cookies()
  const session = c.get('gs_access_token')?.value
  if (!session) return null
  return await decrypt(session)
}
