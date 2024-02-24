import { Navigate, Outlet } from 'react-router-dom'

import { useAppOutletContext } from '@/features/layout/useAppOutletContext'

export const PrivateRedirect = () => {
  const { isAuth } = useAppOutletContext()

  return isAuth ? <Outlet /> : <Navigate to={'/login'} />
}
