import { ReactNode } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'

import Loader from '@/components/assets/icons/Loader'
import { Header, HeaderProps } from '@/components/ui/header/Header'
import { useMeQuery } from '@/services/auth/auth.service'

import s from './layout.module.scss'

type AuthContext = {
  isAuthenticated: boolean
}

export function useAuthContext() {
  return useOutletContext<AuthContext>()
}

export const Layout = () => {
  const { data, isError, isLoading } = useMeQuery()
  const isAuthenticated = !isError && !isLoading

  if (isLoading) {
    return <Loader />
  }

  return (
    <LayoutContent
      avatar={data?.avatar ?? ''}
      email={data?.email ?? ''}
      isLoggedIn={isAuthenticated}
      onLogout={() => {}}
      userName={data?.name ?? ''}
    >
      <main>
        <Outlet context={{ isAuthenticated } satisfies AuthContext} />
      </main>
    </LayoutContent>
  )
}

export type LayoutContentProps = { children: ReactNode } & HeaderProps

export const LayoutContent = ({ children, ...headerProps }: LayoutContentProps) => {
  return (
    <div className={s.layout}>
      <Header {...headerProps} />
      <div className={s.content}>{children}</div>
    </div>
  )
}
