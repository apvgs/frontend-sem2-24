import { MainImageComponent } from '@/components/main-image'

export default function DeviceLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col flex-grow overflow-y-auto bg-accent pt-4'>
      <MainImageComponent />
      {children}
    </div>
  )
}
