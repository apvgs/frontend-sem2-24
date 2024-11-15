'use client'
import { Button } from '@/components/ui/button'
import { type LoginDataInput, loginDataSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { LockKeyhole, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { handleLogin } from '../handle-login'
import { toast } from 'sonner'
export function LoginForm() {
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm<LoginDataInput>({
    resolver: zodResolver(loginDataSchema),
  })

  function handleUserLogin(data: LoginDataInput) {
    const loginRequest = handleLogin(data)

    toast.promise(loginRequest, {
      loading: 'Verificando credenciais...',
      success: () => {
        router.replace('/dashboard')
        return 'Logado com sucesso.'
      },
      error: err => {
        return (
          err.message ||
          'Algo deu errado. Por favor, verifique suas credenciais.'
        )
      },
      position: 'top-center',
      style: { filter: 'none', zIndex: 10 },
    })
  }

  return (
    <form
      className='pt-12 flex flex-col gap-4'
      onSubmit={handleSubmit(handleUserLogin)}
    >
      <div className='flex flex-col space-y-1'>
        <div className='flex space-x-0.5 items-center border-border border-b-2 px-1.5'>
          <span>
            <Mail />
          </span>
          <input
            type='email'
            placeholder='e-mail'
            className='w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none'
            {...register('email')}
          />
        </div>
        {formState.errors.email && (
          <p className='text-destructive text-sm'>
            {formState.errors.email.message}
          </p>
        )}
      </div>
      <div className='flex flex-col space-y-1'>
        <div className='flex space-x-0.5 items-center border-border border-b-2 px-1.5'>
          <span>
            <LockKeyhole />
          </span>
          <input
            type='password'
            placeholder='Senha'
            className='w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none'
            {...register('password')}
          />
        </div>
        {formState.errors.email && (
          <p className='text-destructive text-sm'>
            {formState.errors.email.message}
          </p>
        )}
      </div>
      <Button className='py-6 text-base mt-4'>Entrar</Button>
    </form>
  )
}
