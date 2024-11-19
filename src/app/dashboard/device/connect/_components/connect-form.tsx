'use client'
import { Button } from '@/components/ui/button'
import { useUserContext } from '@/context/user-details-context'
import { type DeviceData, deviceDataSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { FolderPen, MapPinHouse } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function ConnectForm() {
  const router = useRouter()
  const { id } = useUserContext()
  if (!id) router.replace('/dashboard')

  const { register, handleSubmit, formState } = useForm<DeviceData>({
    resolver: zodResolver(deviceDataSchema),
  })

  function handleConnectDevice(data: DeviceData) {
    // const deviceRequest = handleConnectDevice(data, user_id)
    // toast.promise(deviceRequest, {
    //   loading: 'Verificando dados...',
    //   success: () => {
    //     router.replace('/dashboard')
    //     return 'Dispositivo conectado com sucesso!'
    //   },
    //   error: err => {
    //     return (
    //       err.message ||
    //       'Algo deu errado. Por favor, verifique os dados.'
    //     )
    //   },
    //   position: 'top-center',
    //   style: { filter: 'none', zIndex: 10 },
    // })
  }

  return (
    <form
      className='pt-12 flex flex-col gap-4'
      onSubmit={handleSubmit(handleConnectDevice)}
    >
      <div className='flex flex-col space-y-1'>
        <div className='flex space-x-0.5 items-center border-border border-b-2 px-1.5'>
          <span>
            <FolderPen />
          </span>
          <input
            type='text'
            placeholder='Código do dispositivo'
            className='w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none'
            {...register('code')}
          />
        </div>
        {formState.errors.code && (
          <p className='text-destructive text-sm'>
            {formState.errors.code.message}
          </p>
        )}
      </div>
      <div className='flex flex-col space-y-1'>
        <div className='flex space-x-0.5 items-center border-border border-b-2 px-1.5'>
          <span>
            <MapPinHouse />
          </span>
          <input
            type='text'
            placeholder='Localização (ex: Sala de estar)'
            className='w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none'
            {...register('location')}
          />
        </div>
        {formState.errors.location && (
          <p className='text-destructive text-sm'>
            {formState.errors.location.message}
          </p>
        )}
      </div>
      <Button className='py-6 text-base mt-4'>Cadastrar Dispositivo</Button>
    </form>
  )
}
