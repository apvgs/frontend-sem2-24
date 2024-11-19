import { UserContextProvider } from '@/context/user-details-context'
import { DashboardNavBar } from './_components/dashboard-nav-bar'

export default function DashboardLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col h-[calc(100dvh)]'>
      <div className='flex flex-col flex-grow overflow-y-auto'>
        <UserContextProvider>{children}</UserContextProvider>
      </div>
      <DashboardNavBar />
    </main>
  )
}
