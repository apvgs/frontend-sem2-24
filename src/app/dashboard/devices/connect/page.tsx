import { MainImageComponent } from '@/components/main-image'
import { ConnectForm } from './_components/connect-form'

export default function DeviceConnectPage() {
  return (
    <div className='flex flex-col flex-grow lg:gap-2 lg:flex-row-reverse bg-accent pt-4 lg:pt-0'>
      <div className='w-full lg:w-2/3 lg:my-auto'>
        <MainImageComponent />
      </div>
      <section className='flex flex-col flex-grow border border-border rounded-3xl py-8 px-6 bg-background w-full lg:w-1/3 lg:rounded-tl-none'>
        <div className='lg:my-auto'>
          <h1 className='font-bold text-xl'>Conectar novo dispositivo</h1>
          <ConnectForm />
        </div>
      </section>
    </div>
  )
}
