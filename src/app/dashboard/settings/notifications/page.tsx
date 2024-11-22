import { cookies } from 'next/headers'

type NotificationType = {
  id: number
  mensagem: string
  data: string
}

export default async function NotificationsPage() {
  const req = await fetch(`${process.env.BACKEND_URL}/notificacao`, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      Cookie: (await cookies()).toString(),
    },
  })

  const data: NotificationType[] = await req.json()

  return (
    <div className='flex flex-col flex-grow px-8 pt-4 space-y-4'>
      <h1 className='font-bold text-xl sm:text-2xl'>Notificações</h1>

      {data.length > 0 ? (
        <div className='flex flex-col flex-grow mx-auto max-w-[1080px] shadow-md px-4 gap-2'>
          {data.map(notification => (
            <div
              className='w-full border border-border p-4 flex flex-col justify-between rounded-sm gap-2 md:flex-row md:items-center'
              key={notification.id}
            >
              <p className='text-sm'>{notification.mensagem}</p>
              <p className='text-muted-foreground text-sm'>
                {notification.data.split(' ')[0]} às{' '}
                {notification.data.split(' ')[1]}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-muted-foreground text-sm py-8 text-center'>
          Nenhuma notificação encontrada.
        </p>
      )}
    </div>
  )
}
