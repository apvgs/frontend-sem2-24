import { cookies } from 'next/headers'
import { DateConsumeInfo } from './_components/date-consume-info'
import type { DadosConsumo } from '@/types'
import { ChartComponent } from './_components/chart-component'

export default async function StatisticsPage() {
  const req = await fetch(`${process.env.BACKEND_URL}/consumo_diario`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      Cookie: (await cookies()).toString(),
      'Content-Type': 'application/json',
    },
  })

  const data: DadosConsumo = await req.json()

  return (
    <div className='flex flex-col lg:flex-row flex-grow px-2 py-4 gap-4'>
      <div className='w-full lg:w-1/3 rounded-xl shadow-lg p-2 py-4'>
        <DateConsumeInfo {...data} />
      </div>
      <div className='w-full lg:w-2/4 flex flex-col min-h-72 rounded-xl shadow-lg p-2 py-4 overflow-hidden sm:flex-grow gap-4'>
        <ChartComponent consumoDiario={data.consumoDiario} />
      </div>
    </div>
  )
}
