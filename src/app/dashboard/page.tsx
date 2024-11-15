import type { DashboardKhwDailyProp } from '@/types'
import { DailyConsumeReport } from './_components/daily-consume-chart'

export default function DashboardPage() {
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

  const totalSumInTheDay = kwhDaily.reduce((acc, curr) => acc + curr.kWh, 0)

  return (
    <div className='flex flex-col flex-grow px-2 py-4'>
      <div className='px-6'>
        <div>
          <h1 className='font-bold text-2xl'>Olá {name}</h1>
          <span className='text-muted-foreground'>{formattedDate}</span>
        </div>
      </div>
      <div className='flex flex-col rounded-xl shadow-lg p-2 py-4'>
        <div className='px-8'>
          <h2 className='text-muted-foreground'>Relatório de Consumo Diário</h2>
          <h2 className='text-foreground text-xl'>{totalSumInTheDay}KWH</h2>
        </div>
        <DailyConsumeReport data={kwhDaily} />
      </div>
    </div>
  )
}
