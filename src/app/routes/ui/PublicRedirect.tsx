import { Navigate, Outlet } from 'react-router-dom'

import { useAppOutletContext } from '@/features/layout/useAppOutletContext'

export const PublicRedirect = () => {
  const { isAuthenticated } = useAppOutletContext()

  return isAuthenticated ? <Navigate to={'/'} /> : <Outlet />
}
