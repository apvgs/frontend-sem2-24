'use server'

import { cookies } from 'next/headers'

export async function handleDeleteDevice(id: number) {
  try {
    const req = await fetch(`${process.env.BACKEND_URL}/dispositivo/${id}`, {
      method: 'DELETE',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        Cookie: (await cookies()).toString(),
      },
    })

    if (!req.ok) {
      const errorResponse = await req.text()
      return Promise.reject(new Error(JSON.parse(errorResponse).error))
    }
  } catch (e) {
    return Promise.reject(new Error('Houve um erro ao deletar o dispositivo.'))
  }
}
