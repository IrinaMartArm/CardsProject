import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { PrivateRedirect } from '@/app/routes/ui/PrivateRedirect'
import { PublicRedirect } from '@/app/routes/ui/PublicRedirect'
import { Layout } from '@/features/layout'
import { CreateNewPasswordPage } from '@/pages/Auth/CreateNewPasswordPage'
import { ForgotPasswordPage } from '@/pages/Auth/ForgotPasswordPage'
import { SignInPage } from '@/pages/Auth/SignInPage'
import { SignUpPage } from '@/pages/Auth/SignUpPage'
import { DeckPage } from '@/pages/deckPage/DeckPage'
import { DecksPage } from '@/pages/decksPage/DecksPage'
import { ErrorPage } from '@/pages/errorPage/ErrorPage'
import { LearnPage } from '@/pages/learnPage/LearnPage'

const publicRoutes: RouteObject[] = [
  { element: <SignInPage />, path: '/login' },
  { element: <SignUpPage />, path: '/sign-up' },
  { element: <ForgotPasswordPage />, path: '/forgot-password' },
  { element: <CreateNewPasswordPage />, path: '/create-new-password/:token' },
]

const privateRoutes: RouteObject[] = [
  { element: <DecksPage />, path: '/' },
  { element: <DeckPage />, path: '/deck/:deckId' },
  { element: <LearnPage />, path: '/learn/:deckId' },
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
  {
    element: <ErrorPage />,
    path: '*',
  },
])
export const Router = () => {
  return <RouterProvider router={router} />
}
