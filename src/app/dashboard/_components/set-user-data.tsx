'use client'
import { useUserContext } from '@/context/user-details-context'
import { useEffect } from 'react'

export default function SetUserData({
  id,
  name,
}: { id: number; name: string }) {
  const { loadData } = useUserContext()

  useEffect(() => {
    loadData(id, name)
  }, [id, name, loadData])
  return null
}
