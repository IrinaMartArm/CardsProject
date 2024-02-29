import { Provider } from 'react-redux'
import { Bounce, ToastContainer } from 'react-toastify'

import { Router } from '@/app/routes/config/Router'
import { store } from '@/services/store'

import 'react-toastify/dist/ReactToastify.css'

// import { Router } from './Router'

export const items = [
  { title: '3', value: '3' },
  { title: '5', value: '5' },
  { title: '10', value: '10' },
  { title: '15', value: '15' },
  { title: '20', value: '20' },
]
export const answerVariants = [
  { disabled: false, id: '1', variant: 'Did not know' },
  { disabled: false, id: '2', variant: 'Forgot' },
  { disabled: false, id: '3', variant: 'A lot of thought' },
  { disabled: false, id: '4', variant: 'Confused' },
  { disabled: false, id: '5', variant: 'Knew the answer' },
]

export function App() {
  return (
    <Provider store={store}>
      <Router />
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable={false}
        hideProgressBar={false}
        newestOnTop
        pauseOnFocusLoss={false}
        pauseOnHover
        position={'bottom-left'}
        rtl={false}
        theme={'dark'}
        transition={Bounce}
      />
    </Provider>
  )
}
