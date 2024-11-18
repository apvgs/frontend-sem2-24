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
