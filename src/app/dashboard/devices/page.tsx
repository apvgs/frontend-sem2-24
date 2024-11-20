import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { DeviceList } from './_components/device-list'
import type { DeviceData } from '@/types'
import { cookies } from 'next/headers'

export default async function DevicesPage() {
  const req = await fetch(`${process.env.BACKEND_URL}/dispositivo`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      Cookie: (await cookies()).toString(),
      'Content-Type': 'application/json',
    },
  })

  const data: DeviceData[] = await req.json()

  return (
    <div className='flex flex-col flex-grow px-8 py-4'>
      <div className='flex justify-between flex-col sm:items-center sm:flex-row'>
        <h1 className='font-bold text-xl sm:text-2xl'>Seus Dispositivos</h1>
        <Button variant={'secondary'} asChild>
          <Link href={'/dashboard/devices/connect'}>
            Adicionar novo dispositivo
          </Link>
        </Button>
      </div>
      <DeviceList devices={data} />
    </div>
  )
}
