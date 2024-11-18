import type { DashboardKhwDailyProp } from '@/types'
import { DailyConsumeReport } from './_components/daily-consume-chart'
import { DatabaseZap, Lightbulb, Zap } from 'lucide-react'
import { cookies } from 'next/headers'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import not_found_img from '/public/iot_not_found.svg'
import Image from 'next/image'

export default async function DashboardPage() {
  const c = await cookies()
  const req = await fetch(`${process.env.BACKEND_URL}/user/dashboard`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      Cookie: c.toString(),
      'Content-Type': 'application/json',
    },
  })
  const data = await req.json()
  console.log(data)

  const kwhDaily: DashboardKhwDailyProp[] = [
    { time: '00h', kWh: 32 },
    { time: '01h', kWh: 30 },
    { time: '02h', kWh: 28 },
    { time: '03h', kWh: 25 },
    { time: '04h', kWh: 24 },
    { time: '05h', kWh: 23 },
    { time: '06h', kWh: 26 },
    { time: '07h', kWh: 28 },
    { time: '08h', kWh: 35 },
    { time: '09h', kWh: 37 },
    { time: '10h', kWh: 40 },
    { time: '11h', kWh: 42 },
    { time: '12h', kWh: 45 },
    { time: '13h', kWh: 43 },
    { time: '14h', kWh: 41 },
    { time: '15h', kWh: 39 },
    { time: '16h', kWh: 38 },
    { time: '17h', kWh: 40 },
    { time: '18h', kWh: 44 },
    { time: '19h', kWh: 46 },
    { time: '20h', kWh: 47 },
    { time: '21h', kWh: 45 },
    { time: '22h', kWh: 43 },
    { time: '23h', kWh: 41 },
  ]

  const name = 'Arthur'

  const today = new Date()

  const dayOfWeek = today.toLocaleDateString('pt-BR', { weekday: 'long' })
  const dayOfMonth = today.getDate()
  const year = today.getFullYear()
  let formattedDate = `${dayOfWeek}, ${dayOfMonth}, ${year}`
  formattedDate = formattedDate.replace('-feira', '')

  const kwhFare: number = 0.656

  const totalSumInTheDay = kwhDaily.reduce((acc, curr) => acc + curr.kWh, 0)

  return (
    <div className='flex flex-col flex-grow px-2 py-4'>
      <div className='px-6'>
        <h1 className='font-bold text-2xl'>Olá {name}</h1>
        <span className='text-muted-foreground'>{formattedDate}</span>
      </div>
      {!data.existeDispositivo ? (
        <div className='mx-auto pt-28 flex flex-col items-center space-y-2 max-w-96'>
          <Image
            className='w-11/12 h-auto'
            src={not_found_img}
            alt='Imagem com uma casa em um campo com um sol ao fundo'
          />
          <div className='text-center'>
            <h2 className='font-extrabold'>Nenhum dispositivo encontrado!</h2>
            <p>
              Por favor, conecte seu dispositívo no botão abaixo para monitorar
              seu gasto de energia.
            </p>
            <Button className='py-6 text-base mt-4 w-64' asChild>
              <Link href='/dashboard/connect-device'>Conectar dispositivo</Link>
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className='px-6'>
            <div className='grid grid-cols-2 gap-4 p-3'>
              <div className='col-span-1 bg-white p-4 rounded-lg shadow-md space-y-2'>
                <div>
                  <Lightbulb />
                  <p className='text-muted-foreground'>
                    Energia total consumida
                  </p>
                </div>
                <p className='text-xl'>
                  36.2
                  <span className='text-sm text-muted-foreground'>Kw/h</span>
                </p>
              </div>
              <div className='col-span-1 bg-white p-4 rounded-lg shadow-md space-y-2'>
                <div className='flex space-x-1 items-center'>
                  <Zap />
                  <p className='text-muted-foreground'>Média de consumo</p>
                </div>
                <p className='text-xl'>
                  28.4
                  <span className='text-sm text-muted-foreground'>Kw/h</span>
                </p>
              </div>
              <div className='col-span-2 bg-white p-4 rounded-lg shadow-md flex flex-col space-y-2'>
                <div className='flex space-x-1 items-center'>
                  <DatabaseZap />
                  <p className='text-muted-foreground'>Preço Previsto</p>
                </div>
                <p className='text-xl'>
                  <span className='text-sm text-muted-foreground'>R$</span>
                  250,00{' '}
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col rounded-xl shadow-lg p-2 py-4'>
            <div className='px-8'>
              <h2 className='text-muted-foreground'>
                Relatório de Consumo Diário
              </h2>
              <h2 className='text-foreground text-xl'>{totalSumInTheDay}KWH</h2>
            </div>
            <DailyConsumeReport data={kwhDaily} />
          </div>
        </>
      )}
    </div>
  )
}
