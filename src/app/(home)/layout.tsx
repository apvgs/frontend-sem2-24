import { HomeNavBar } from './_components/home-nav-bar'

export default function HomeLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col h-screen'>
      <div className='flex flex-col flex-grow overflow-y-auto'>{children}</div>
      <HomeNavBar />
    </main>
  )
}
