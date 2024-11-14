'use client'
import type { LinkProp } from '@/types'
import { FolderCode, House, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links: LinkProp[] = [
  { id: 1, label: 'Home', path: '/', icon: <House /> },
  { id: 2, label: 'Desenvolvedores', path: '/devs', icon: <FolderCode /> },
  { id: 3, label: 'Conta', path: '/auth/login', icon: <User /> },
]
export function HomeNavBar() {
  const pathname = usePathname()

  return (
    <nav className='flex justify-evenly rounded-t-3xl bg-background border border-border'>
      {links.map(link => (
        <Link
          key={link.id}
          href={link.path}
          className={`flex flex-col items-center px-4 py-6 ${pathname === link.path ? 'text-primary' : ''} hover:cursor-pointer hover:text-primary`}
        >
          <span>{link.icon}</span>
          <p>{link.label}</p>
        </Link>
      ))}
    </nav>
  )
}
