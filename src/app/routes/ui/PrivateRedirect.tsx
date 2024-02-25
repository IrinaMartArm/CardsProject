import { Navigate, Outlet } from 'react-router-dom'

import { useAppOutletContext } from '@/features/layout/useAppOutletContext'

export const PrivateRedirect = () => {
  const { isAuthenticated } = useAppOutletContext()

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
