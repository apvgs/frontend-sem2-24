import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'

export default function AuthLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col h-[calc(100dvh)] relative'>
      <Link href='/' className='absolute left-4 top-4'>
        <ArrowLeftCircle strokeWidth={1.25} size={36} />
      </Link>
      <div className='flex flex-col flex-grow overflow-y-auto'>{children}</div>
    </main>
  )
}
