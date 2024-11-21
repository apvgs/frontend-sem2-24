'use server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const data = searchParams.get('data')

  if (!data) {
    return new Response(JSON.stringify({ error: 'Data não informada' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const req = await fetch(
    `${process.env.BACKEND_URL}/leitura_energia?data=${data}`,
    {
      method: 'GET',
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        Cookie: (await cookies()).toString(),
        'Content-Type': 'application/json',
      },
    }
  )

  const d = await req.json()
  return new Response(JSON.stringify(d), {
    status: req.status,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
