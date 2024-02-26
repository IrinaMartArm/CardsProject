import { useOutletContext } from 'react-router-dom'

export interface AppOutletContext {
  isAuthenticated: boolean
}

export const useAppOutletContext = () => {
  return useOutletContext<AppOutletContext>()
}
