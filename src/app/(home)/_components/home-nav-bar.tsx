import type { LinkProp } from '@/types'
import Link from 'next/link'

export function HomeNavBar() {
  const links: LinkProp[] = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Desenvolvedores', path: '/devs' },
    { id: 3, label: 'Conta', path: '/auth/login' },
  ]

  return (
    <nav className='flex justify-evenly rounded-t-3xl bg-background border border-border'>
      {links.map(link => (
        <Link
          key={link.id}
          href={link.path}
          className='px-4 py-6 font-semibold text- hover:text-primary hover:underline'
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
