'use server'
import { connectDeviceDataInput, type ConnectDeviceData } from '@/schemas'
import { cookies } from 'next/headers'

export async function handleConnectDevice(data: ConnectDeviceData) {
  const deviceDataParse = connectDeviceDataInput.safeParse(data)

  const deviceData = deviceDataParse.success
    ? {
        codigo: deviceDataParse.data.code,
        localizacao: deviceDataParse.data.location,
      }
    : {}
  try {
    const req = await fetch(`${process.env.BACKEND_URL}/user/add_dispositivo`, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        Cookie: (await cookies()).toString(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deviceData),
    })

    if (!req.ok) {
      const errorResponse = await req.text()
      return Promise.reject(new Error(JSON.parse(errorResponse).error))
    }
  } catch (e) {
    return Promise.reject(new Error('Houve um erro ao conectar o dispositivo.'))
  }
}
