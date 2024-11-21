'use client'
import { Progress } from '@/components/ui/progress'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { ConsumoDiario, DadosConsumo } from '@/types'
import { useState } from 'react'

export function DateConsumeInfo({ consumoDiario, consumoTotal }: DadosConsumo) {
  const [progressValue, setProgressValue] = useState(0)
  const [dtConsumoAtual, setDtConsumoAtual] = useState(0)

  const onSelectValueChange = (value: string) => {
    if (value === 'total') {
      setProgressValue(100)
      setDtConsumoAtual(consumoTotal)
      return
    }
    const consumo: ConsumoDiario | undefined = consumoDiario.find(
      ({ data }) => data === value
    )
    if (!consumo) return

    setProgressValue((consumo.consumo / consumoTotal) * 100)
    setDtConsumoAtual(consumo.consumo)
  }

  return (
    <div>
      <h1 className='font-bold text-xl sm:text-2xl'>Estatísticas</h1>
      <p className='text-muted-foreground'>
        Veja o seu consumo diário a partir de uma data deste mês
      </p>
      <div className='space-y-4 pt-4'>
        <div className='flex gap-2 items-center justify-between'>
          <Select onValueChange={onSelectValueChange}>
            <SelectTrigger className='w-[150px]' defaultValue={'TESTEOLA'}>
              <SelectValue placeholder='Selecione...' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='total'>Total</SelectItem>
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
          <p>
            {dtConsumoAtual || 0}
            <span className='text-muted-foreground text-sm'>kHw</span>
          </p>
        </div>
        <div>
          <Progress value={progressValue} max={100} />
          <div className='flex justify-between'>
            <p className='text-sm'>
              {progressValue.toFixed(2)}% da energia total consumida
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
