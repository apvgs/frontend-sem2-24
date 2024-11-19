import { ConnectForm } from './_components/connect-form'

export default function DeviceConnectPage() {
  return (
    <section className='flex flex-col flex-grow border border-border rounded-3xl py-8 px-6 bg-background'>
      <h1 className='font-bold text-xl'>Conectar novo dispositivo</h1>
      <ConnectForm />
    </section>
  )
}
