import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { PrivateRedirect } from '@/app/routes/ui/PrivateRedirect'
import { PublicRedirect } from '@/app/routes/ui/PublicRedirect'
import { Layout } from '@/features/layout'
import { SignInPage } from '@/pages/Auth/SignInPage/SignInPage'
import { SignUpPage } from '@/pages/Auth/SignUpPage'
import { DecksPage } from '@/pages/decksPage/DecksPage'

const publicRoutes: RouteObject[] = [
  { element: <SignInPage />, path: '/login' },
  { element: <SignUpPage />, path: '/sign-up' },
]

const privateRoutes: RouteObject[] = [{ element: <DecksPage />, path: '/' }]

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
