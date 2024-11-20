'use server'

import { cookies } from 'next/headers'

export async function handleEditDevice(id: number, location: string) {
  try {
    const req = await fetch(`${process.env.BACKEND_URL}/dispositivo/${id}`, {
      method: 'PUT',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        Cookie: (await cookies()).toString(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ localizacao: location }),
    })

    if (!req.ok) {
      const errorResponse = await req.text()
      return Promise.reject(new Error(JSON.parse(errorResponse).error))
    }
  } catch (e) {
    return Promise.reject(new Error('Houve um erro ao editar o dispositivo.'))
  }
}
