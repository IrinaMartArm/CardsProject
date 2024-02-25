import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import { Header, HeaderProps } from '@/components/ui/header/Header'
import { Preloader } from '@/components/ui/preloader'
import { AppOutletContext } from '@/features/layout/useAppOutletContext'
import { useMeQuery } from '@/services/auth/auth.service'

import s from './layout.module.scss'

/*type AuthContext = {
  isAuthenticated: boolean
}

export function useAuthContext() {
  return useOutletContext<AuthContext>()
}*/

export const Layout = () => {
  const { data, isError, isLoading } = useMeQuery()
  const isAuthenticated = !isError && !isLoading

  if (isLoading) {
    return <Preloader fullHeight size={100} />
  }

  return (
    <LayoutContent
      avatar={data?.avatar ?? ''}
      email={data?.email ?? ''}
      isLoggedIn={isAuthenticated}
      onLogout={() => {}}
      userName={data?.name ?? ''}
    >
      <Outlet context={{ isAuthenticated } satisfies AppOutletContext} />
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
