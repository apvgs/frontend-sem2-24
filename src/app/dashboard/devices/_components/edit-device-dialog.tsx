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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { handleEditDevice } from '@/http/handle-edit-device'
import type { DeviceData } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export function EditDialog({ id, codigo, localizacao }: DeviceData) {
  const router = useRouter()

  const [newLocation, setNewLocation] = useState(localizacao)

  function handleEdit() {
    if (localizacao === newLocation) {
      return
    }
    const editDeviceRequest = handleEditDevice(id, newLocation)

    toast.promise(editDeviceRequest, {
      loading: 'Editando o dispositivo...',
      success: () => {
        setTimeout(() => {
          router.refresh()
        }, 1000)
        return 'Dispositivo editado com sucesso!'
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
        <Button className='w-full max-w-24'>Editar</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Editar dispositivo</DialogTitle>
          <DialogDescription>
            Aqui você pode editar a localização do dispositivo {codigo}.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='location' className='text-right'>
              Localização
            </Label>
            <Input
              id='location'
              defaultValue={newLocation}
              onChange={e => setNewLocation(e.target.value)}
              className='col-span-3'
            />
          </div>
        </div>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button type='submit' onClick={handleEdit}>
              Salvar alterações
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
