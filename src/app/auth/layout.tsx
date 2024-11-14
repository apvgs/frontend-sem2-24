export default function AuthLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col h-[calc(100dvh)]'>
      <div className='flex flex-col flex-grow overflow-y-auto'>{children}</div>
    </main>
  )
}
