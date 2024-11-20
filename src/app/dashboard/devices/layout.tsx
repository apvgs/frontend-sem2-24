export default function DeviceLayout({
  children,
}: { children: React.ReactNode }) {
  return <div className='flex flex-col flex-grow'>{children}</div>
}
