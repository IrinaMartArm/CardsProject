import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { PrivateRedirect } from '@/app/routes/ui/PrivateRedirect'
import { PublicRedirect } from '@/app/routes/ui/PublicRedirect'
import { Layout } from '@/features/layout'
import { ForgotPasswordPage } from '@/pages/Auth/ForgotPasswordPage'
import { SignInPage } from '@/pages/Auth/SignInPage'
import { SignUpPage } from '@/pages/Auth/SignUpPage'
import { DecksPage } from '@/pages/decksPage/DecksPage'
import { ErrorPage } from '@/pages/errorPage/ErrorPage'

const publicRoutes: RouteObject[] = [
  { element: <SignInPage />, path: '/login' },
  { element: <SignUpPage />, path: '/sign-up' },
  { element: <ForgotPasswordPage />, path: '/forgot-password' },
]

const privateRoutes: RouteObject[] = [
  { element: <DecksPage />, path: '/' },
  { element: <Navigate replace to={'/404'} />, path: '*' },
  { element: <ErrorPage />, path: '/404' },
]

const appRoutes: RouteObject[] = [
  { children: privateRoutes, element: <PrivateRedirect /> },
  { children: publicRoutes, element: <PublicRedirect /> },
]

export const router = createBrowserRouter([
  {
    children: appRoutes,
    element: <Layout />,
  },
])
export const Router = () => {
  return <RouterProvider router={router} />
}
