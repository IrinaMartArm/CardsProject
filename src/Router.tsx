import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Layout } from '@/features/layout'
import { useAppOutletContext } from '@/features/layout/useAppOutletContext'
import { DeckPage } from '@/pages/deckPage/DeckPage'
import { DecksPage } from '@/pages/decksPage/DecksPage'
import { SignInPage } from '@/pages/signInPage/SignInPage'

const publicRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <SignInPage />,
        path: '/login',
      },
    ],
    element: <Outlet />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/',
  },
  {
    element: <DeckPage />,
    path: '/decks/:deckId',
  },
]

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <Layout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { isAuthenticated } = useAppOutletContext()

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
