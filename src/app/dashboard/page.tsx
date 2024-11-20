import type { DashboardKhwDailyProp, UserDashboardDetails } from '@/types'
import { DailyConsumeReport } from './_components/daily-consume-chart'
import { DatabaseZap, Lightbulb, Zap } from 'lucide-react'
import { cookies } from 'next/headers'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import not_found_img from '/public/iot_not_found.svg'
import Image from 'next/image'
import SetUserData from './_components/set-user-data'
import { redirect } from 'next/navigation'

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
  const data: UserDashboardDetails = await req.json()

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

  // formatar
  // const a: DashboardKhwDailyProp[] = data.list.map(item => ({
  //   time: item.dt_medicao,
  //   kWh: item.consumo,
  // }))

  let formattedData = ''
  try {
    const [day, month, year] = data.data.split('/')
    formattedData = `${year}-${month}-${Number(day) + 1}`
  } catch (error) {
    redirect('/dashboard')
  }

  const today = new Date(formattedData)

  const dayOfWeek = today.toLocaleDateString('pt-BR', { weekday: 'long' })
  const dayOfMonth = today.getDate()
  const yearFormatted = today.getFullYear()
  let formattedDate = `${dayOfWeek}, ${dayOfMonth}, ${yearFormatted}`
  formattedDate = formattedDate.replace('-feira', '')

  const kwhFare: number = 0.656

  const custoConsumoMensal = data.consumoMensal * kwhFare

  const custoConsumoMensalFormatted = custoConsumoMensal.toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
    }
  )

  return (
    <div className='flex flex-col flex-grow px-2 py-4'>
      <div className='px-6'>
        <h1 className='font-bold text-xl sm:text-2xl'>Olá {data.nome}</h1>
        <span className='text-muted-foreground'>{formattedDate}</span>
      </div>
      {!data.existeDispositivo ? (
        <div className='mx-auto pt-28 flex flex-col items-center space-y-2 max-w-96'>
          <Image
            className='w-9/12 h-auto'
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
              <Link href='/dashboard/devices/connect'>
                Conectar dispositivo
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col flex-grow xl:flex-row xl:px-6 xl:gap-4'>
          <div className='min-w-80 px-6 xl:px-0'>
            <div className='flex flex-col gap-4 py-4'>
              <div className='flex flex-col sm:flex-row xl:flex-col w-full gap-4'>
                {/* ITEM 1 */}
                <div className='w-full sm:w-1/2 xl:w-full bg-white p-4 rounded-lg shadow-md space-y-2'>
                  <div className='flex space-x-1 items-center'>
                    <Lightbulb />
                    <p className='text-muted-foreground'>
                      Energia total consumida (mensal)
                    </p>
                  </div>
                  <p className='text-lg'>
                    {data.consumoMensal}
                    <span className='text-sm text-muted-foreground'>Kw/h</span>
                  </p>
                </div>
                {/* ITEM 2 */}
                <div className='w-full sm:w-1/2 xl:w-full bg-white p-4 rounded-lg shadow-md space-y-2'>
                  <div className='flex space-x-1 items-center'>
                    <Zap />
                    <p className='text-muted-foreground'>
                      Média de consumo (diária)
                    </p>
                  </div>
                  <p className='text-lg'>
                    {data.mediaDiaria}
                    <span className='text-sm text-muted-foreground'>Kw/h</span>
                  </p>
                </div>
              </div>
              {/* ITEM 3 */}
              <div className='bg-white p-4 rounded-lg shadow-md flex flex-col space-y-2'>
                <div className='flex space-x-1 items-center'>
                  <DatabaseZap />
                  <p className='text-muted-foreground'>
                    Preço Previsto (mensal)
                  </p>
                </div>
                <p className='text-lg'>{custoConsumoMensalFormatted}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col rounded-xl shadow-lg p-2 py-4 overflow-hidden sm:flex-grow'>
            <div className='px-8'>
              <h2 className='text-muted-foreground'>
                Relatório de Consumo Diário
              </h2>
              <h2 className='text-foreground text-xl'>
                {data.consumoDiario}
                <span className='text-muted-foreground text-sm'>Kw/h</span>
              </h2>
            </div>
            <DailyConsumeReport data={kwhDaily} />
          </div>
        </div>
      )}
    </div>
  )
}
