import Link from 'next/link'
import { SignUpForm } from './_components/signup-form'

export default function SignUpPage() {
  return (
    <section className='flex flex-col flex-grow border border-border rounded-3xl py-8 px-6 bg-background'>
      <h1 className='font-bold text-xl'>Cadastrar</h1>
      {/* FORM */}
      <div className='flex flex-col gap-4'>
        <SignUpForm />
        <p className='text-center text-sm'>
          Já possui uma conta?{' '}
          <Link href={'/auth/login'} className='font-bold'>
            Entrar
          </Link>
        </p>
      </div>
    </section>
  )
}
