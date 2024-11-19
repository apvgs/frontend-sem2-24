'use client'
import { createContext, useContext, useState } from 'react'

type UserContextData = {
  id: number | null
  name: string | null
  loadData: (user_id: number, username: string) => void
}

export const UserContext = createContext<UserContextData | null>(null)

export const UserContextProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [id, setId] = useState<number | null>(null)
  const [name, setName] = useState<string | null>(null)

  const loadData = (user_id: number, username: string) => {
    setId(user_id)
    setName(username)
  }

  return (
    <UserContext.Provider value={{ id, name, loadData }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error(
      'useUserContext deve estar dentro de um UserContextProvider'
    )
  }

  return context
}
