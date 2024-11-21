import type { ReactNode } from 'react'

export type LinkProp = {
  id: number
  label: string
  path: string
  icon: ReactNode
}

export type DashboardKhwDailyProp = {
  time: string
  kWh: number
}

export type jwtToken = {
  iss: string
  sub: string
  exp: number
}

export type UserDashboardDetails = {
  nome: string
  id: number
  cpf: string
  email: string
  senha: string
  data: string // Format: DD/MM/YYYY
  consumoDiario: number
  consumoMensal: number
  mediaDiaria: number
  list: {
    id: number
    dt_medicao: string // Format: DD/MM/YYYY:HH:mm:ss
    consumo: number
    nomeDispositivo: string
  }[]
  existeDispositivo: boolean
}

export type DeviceData = {
  id: number
  codigo: string
  localizacao: string
}

export type ConsumoDiario = {
  data: string
  consumo: number
}

export type DadosConsumo = {
  consumoDiario: ConsumoDiario[]
  consumoTotal: number
}
