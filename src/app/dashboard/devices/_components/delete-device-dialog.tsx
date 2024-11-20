'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { handleDeleteDevice } from '@/http/handle-delete-device'
import type { DeviceData } from '@/types'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function DeleteDialog({ id, codigo, localizacao }: DeviceData) {
  const router = useRouter()
  function handleDelete() {
    const deleteDeviceRequest = handleDeleteDevice(id)

    toast.promise(deleteDeviceRequest, {
      loading: 'Deletando o dispositivo...',
      success: () => {
        setTimeout(() => {
          router.refresh()
        }, 1000)
        return 'Dispositivo deletado com sucesso!'
      },
      error: err => {
        return (
          err.message ||
          'Algo deu errado. Por favor, tente novamente mais tarde.'
        )
      },
      position: 'top-center',
      style: { filter: 'none', zIndex: 10 },
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'destructive'} className='w-full max-w-24'>
          Excluir
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Excluir dispositivo</DialogTitle>
          <DialogDescription className='flex flex-col'>
            <span>Dispositivo: {codigo}</span>
            <span>Localização: {localizacao}</span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button variant={'secondary'} className='w-full'>
              Cancelar
            </Button>
          </DialogTrigger>
          <DialogTrigger asChild>
            <Button
              variant={'destructive'}
              type='submit'
              onClick={handleDelete}
              className='w-full'
            >
              Excluir mesmo assim
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
