'use client'
import { logout } from '@/app/auth/auth'
import { Bell, ChevronRight, LogOut } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'

export default function SettingsPage() {
  function handleLogout() {
    logout()
    toast.success('Você saiu da sua conta.', {
      position: 'top-center',
      style: { filter: 'none', zIndex: 10 },
    })
    redirect('/')
  }

  return (
    <div className='flex flex-col flex-grow px-8 py-4'>
      <h1 className='font-bold text-2xl'>Ajustes</h1>
      <div className='flex flex-col space-y-1 items-center px-2'>
        <Link
          href={'/dashboard/settings/notifications'}
          className='flex w-full justify-between border-b-2 px-2 py-4'
        >
          <div className='flex space-x-2'>
            <Bell strokeWidth={1.5} />
            <p>Notificações</p>
          </div>
          <ChevronRight />
        </Link>
        <button
          type='button'
          onClick={handleLogout}
          className='flex w-full justify-between border-b-2 px-2 py-4'
        >
          <div className='flex space-x-2'>
            <LogOut strokeWidth={1.5} />
            <p>Sair</p>
          </div>
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
