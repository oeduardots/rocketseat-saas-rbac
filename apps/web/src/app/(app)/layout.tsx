import { redirect } from 'next/navigation'
import type { ReactNode } from 'react'

import { isAuthenticated } from '@/auth/auth'

export default function AppLayout({
  children,
  teste,
}: Readonly<{
  children: React.ReactNode
  teste: ReactNode
}>) {
  if (!isAuthenticated()) {
    redirect('/auth/sign-in')
  }

  return (
    <>
      {children}
      {teste}
    </>
  )
}
