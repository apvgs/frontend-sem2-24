'use client'

import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import { EditDialog } from './edit-device-dialog'
import type { DeviceData } from '@/types'
import { DeleteDialog } from './delete-device-dialog'

export function DeviceList({ devices }: { devices: DeviceData[] }) {
  return (
    <div className='pt-2'>
      {devices.length > 0 ? (
        <Table>
          <TableCaption>Lista com seus dispositivos cadastrados.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead className='text-right'>Opções</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {devices.map(device => (
              <TableRow key={device.id}>
                <TableCell className='font-medium'>{device.codigo}</TableCell>
                <TableCell>{device.localizacao}</TableCell>
                <TableCell className='text-right flex flex-col items-center justify-end gap-1 sm:flex-row'>
                  <EditDialog {...device} />
                  <DeleteDialog {...device} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className='text-muted-foreground text-center text-sm pt-4'>
          Parece que você ainda não conectou algum dispositivo...
        </p>
      )}
    </div>
  )
}
