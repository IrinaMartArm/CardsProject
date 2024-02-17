import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
