'use client'
import type { LinkProp } from '@/types'
import { ChartColumn, House, ServerCrash, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links: LinkProp[] = [
  {
    id: 1,
    label: 'Home',
    path: '/dashboard',
    icon: <House strokeWidth={1.25} />,
  },
  {
    id: 2,
    label: 'Dispositivos',
    path: '/dashboard/devices',
    icon: <ServerCrash strokeWidth={1.25} />,
  },
  {
    id: 3,
    label: 'Estatísticas',
    path: '/dashboard/statistics',
    icon: <ChartColumn strokeWidth={1.25} />,
  },
  {
    id: 4,
    label: 'Ajustes',
    path: '/dashboard/settings',
    icon: <Settings strokeWidth={1.25} />,
  },
]
export function DashboardNavBar() {
  const pathname = usePathname()

  return (
    <nav className='flex justify-evenly rounded-t-3xl bg-background border border-border'>
      {links.map(link => (
        <Link
          key={link.id}
          href={link.path}
          className={`flex flex-1 flex-col items-center text-sm sm:text-base p-4 ${pathname === link.path ? 'text-primary' : ''} hover:cursor-pointer hover:text-primary`}
        >
          <span>{link.icon}</span>
          <p>{link.label}</p>
        </Link>
      ))}
    </nav>
  )
}
