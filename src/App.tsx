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
  { disabled: false, label: 'Did not know', value: '1' },
  { disabled: false, label: 'Forgot', value: '2' },
  { disabled: false, label: 'A lot of thought', value: '3' },
  { disabled: false, label: 'Confused', value: '4' },
  { disabled: false, label: 'Knew the answer', value: '5' },
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
