'use client'

import type { ConsumoDiario, DashboardKhwDailyProp } from '@/types'
import { ConsumeReportChart } from '../../_components/consume-chart'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { useState } from 'react'

type ConsumeData = {
  id: number
  dt_medicao: string
  consumo: number
  nomeDispositivo: string
}

async function fetchConsumeByData(data: string) {
  const res = await fetch(`/api/consume_by_day?data=${data}`)
  if (!res.ok) {
    throw new Error('Erro ao buscar dados')
  }
  return await res.json()
}

export function ChartComponent({
  consumoDiario,
}: { consumoDiario: ConsumoDiario[] }) {
  const [kwhData, setKwhData] = useState<DashboardKhwDailyProp[]>([])

  async function onSelectValueChange(value: string) {
    const data: ConsumeData[] = await fetchConsumeByData(value)

    const formattedData: DashboardKhwDailyProp[] = data.map(item => ({
      time: `${item.dt_medicao.split(':')[1]}h`,
      kWh: item.consumo,
    }))
    setKwhData(formattedData)
  }

  return (
    <div className='space-y-4 pb-12 sm:pb-0'>
      <Select onValueChange={onSelectValueChange}>
        <SelectTrigger className='w-[150px]'>
          <SelectValue placeholder='Selecione...' />
        </SelectTrigger>
        <SelectContent>
          {consumoDiario.map(({ data }) => {
            const dt_formatada = `Dia ${data.split('/')[0]}`
            return (
              <SelectItem key={data} value={data}>
                {dt_formatada}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
      {kwhData.length > 0 ? (
        <ConsumeReportChart data={kwhData} />
      ) : (
        <p className='text-center text-muted-foreground text-sm py-12'>
          Selecione o dia para vizualizar o consumo energético
        </p>
      )}
    </div>
  )
}
