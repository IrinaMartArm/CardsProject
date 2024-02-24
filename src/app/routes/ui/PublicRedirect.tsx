import { Navigate, Outlet } from 'react-router-dom'

import { useAppOutletContext } from '@/features/layout/useAppOutletContext'

export const PublicRedirect = () => {
  const { isAuth } = useAppOutletContext()

  return isAuth ? <Navigate to={'/'} /> : <Outlet />
}
