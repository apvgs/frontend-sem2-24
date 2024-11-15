'use client'
import { ChevronRight, LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function SettingsPage() {
  function handleLogout() {
    console.log('saindo...')
    redirect('/')
  }

  return (
    <div className='flex flex-col flex-grow px-8 py-4'>
      <h1 className='font-bold text-2xl'>Ajustes</h1>
      <div className='flex flex-col space-y-1 items-center px-2'>
        <Link
          href={'/dashboard/settings/user'}
          className='flex w-full justify-between border-b-2 px-2 py-4'
        >
          <div className='flex space-x-2'>
            <User strokeWidth={1.5} />
            <p>Conta</p>
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
