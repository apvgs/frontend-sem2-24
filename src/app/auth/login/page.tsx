import Link from 'next/link'
import { LoginForm } from './_components/login-form'

export default function LoginPage() {
  return (
    <section className='flex flex-col flex-grow border border-border rounded-3xl py-8 px-6 bg-background'>
      <h1 className='font-bold text-xl'>Entrar</h1>
      {/* FORM */}
      <div className='flex flex-col gap-4'>
        <LoginForm />
        <p className='text-center text-sm'>
          Não possui uma conta?{' '}
          <Link href={'/auth/signup'} className='font-bold'>
            Cadastre-se
          </Link>
        </p>
      </div>
    </section>
  )
}
