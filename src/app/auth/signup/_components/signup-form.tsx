'use client'
import { Button } from '@/components/ui/button'
import { type SignUpDataInput, signupDataSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, LockKeyhole, Mail, ShieldCheck, UserPen } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { handleSignUp } from '@/app/auth/auth'

export function SignUpForm() {
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm<SignUpDataInput>({
    resolver: zodResolver(signupDataSchema),
  })

  function handleUserSignUp(data: SignUpDataInput) {
    const signupRequest = handleSignUp(data)

    toast.promise(signupRequest, {
      loading: 'Verificando credenciais...',
      success: () => {
        router.replace('/auth/login')
        return 'Cadastrado com sucesso.'
      },
      error: err => {
        return (
          err.message ||
          'Algo deu errado. Por favor, verifique seus dados e tente novamente.'
        )
      },
      position: 'top-center',
      style: { filter: 'none', zIndex: 10 },
    })
  }

  return (
    <form
      className='pt-12 flex flex-col gap-4'
      onSubmit={handleSubmit(handleUserSignUp)}
    >
      <div className='flex flex-col space-y-1'>
        <div className='flex space-x-0.5 items-center border-border border-b-2 px-1.5'>
          <span>
            <UserPen />
          </span>
          <input
            type='text'
            placeholder='Nome completo'
            className='w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none'
            {...register('name')}
          />
        </div>
        {formState.errors.name && (
          <p className='text-destructive text-sm'>
            {formState.errors.name.message}
          </p>
        )}
      </div>
      <div className='flex flex-col space-y-1'>
        <div className='flex space-x-0.5 items-center border-border border-b-2 px-1.5'>
          <span>
            <ShieldCheck />
          </span>
          <input
            type='text'
            placeholder='Cpf (apenas números)'
            className='w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none'
            {...register('cpf')}
          />
        </div>
        {formState.errors.cpf && (
          <p className='text-destructive text-sm'>
            {formState.errors.cpf.message}
          </p>
        )}
      </div>
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
            <Lock />
          </span>
          <input
            type='password'
            placeholder='Senha'
            className='w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none'
            {...register('password')}
          />
        </div>
        {formState.errors.password && (
          <p className='text-destructive text-sm'>
            {formState.errors.password.message}
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
            placeholder='Confirma senha'
            className='w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none'
            {...register('confirmPassword')}
          />
        </div>
        {formState.errors.confirmPassword && (
          <p className='text-destructive text-sm'>
            {formState.errors.confirmPassword.message}
          </p>
        )}
      </div>
      <Button className='py-6 text-base mt-4'>Entrar</Button>
    </form>
  )
}
