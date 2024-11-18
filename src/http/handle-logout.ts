'use server'

import { logout } from '@/app/auth/auth'

export async function handleLogout() {
  try {
    await logout()
  } catch {
    throw new Error('Houve um erro ao sair da conta.')
  }
}
