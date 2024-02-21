import { Provider } from 'react-redux'

import { Router } from '@/Router'
import { store } from '@/services/store'

export const items = [
  { title: 'title1', value: 'title1' },
  { title: 'title2', value: 'title2' },
  { title: 'title3', value: 'title3' },
  { title: 'title4', value: 'title4' },
]

export const tabsOptions = [
  { disabled: false, option: 'Switcher' },
  { disabled: false, option: 'Switcher' },
  { disabled: true, option: 'Switcher' },
  { disabled: false, option: 'Switcher' },
]

export const answerVariants = [
  { disabled: false, id: '1', variant: 'Did not know' },
  { disabled: false, id: '2', variant: 'Forgot' },
  { disabled: false, id: '3', variant: 'A lot of thought' },
  { disabled: false, id: '4', variant: 'Confused' },
  { disabled: false, id: '5', variant: 'Knew the answer' },
]

export function App() {
  // const [currentPage, setCurrentPage] = useState(1)
  //
  // const PageChangeHandle = (page: number) => {
  //   setCurrentPage(page)
  // }
  //
  // const [inputValue, setInputValue] = useState('')

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
