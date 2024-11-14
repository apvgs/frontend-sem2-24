import { MainImageComponent } from '@/components/main-image'
import { Button } from '@/components/ui/button'
import { LockKeyhole, Mail } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className='flex flex-col h-full pt-4 bg-accent'>
      <MainImageComponent />
      <section className='flex flex-col flex-grow border border-border rounded-3xl py-8 px-6 bg-background'>
        <h1 className='font-bold text-xl'>Entrar</h1>
        {/* FORM */}
        <div className='flex flex-col gap-4'>
          <form className='pt-12 flex flex-col gap-4'>
            <div className='flex items-center border-border border-b-2 space-x-0.5 px-1.5'>
              <span>
                <Mail />
              </span>
              <input
                type='email'
                placeholder='e-mail'
                className='w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none'
              />
            </div>
            <div className='flex items-center border-border border-b-2 space-x-0.5 px-1.5'>
              <span>
                <LockKeyhole />
              </span>
              <input
                type='password'
                placeholder='Senha'
                className='w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none'
              />
            </div>
            <Button className='py-6 text-base mt-4'>Entrar</Button>
          </form>
          <p className='text-center text-sm'>
            Não possui uma conta?{' '}
            <Link href={'/auth/signup'} className='font-bold'>
              Cadastre-se
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
