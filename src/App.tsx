import { useState } from 'react'

import { DropdownMenuDemo } from '@/components/ui/dropDownMenu/DropDown'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { CreateNewPassword } from '@/features/ui/password/CreateNewPassword'
import { ForgotPassword } from '@/features/ui/password/ForgotPassword'

export const items = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

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
  const [currentPage, setCurrentPage] = useState(1)

  const PageChangeHandle = (page: number) => {
    setCurrentPage(page)
  }

  const [inputValue, setInputValue] = useState('')

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '35px',
        justifyContent: 'center',
        padding: '100px',
      }}
    >
      <DropdownMenuDemo />
      <Pagination
        currentPage={currentPage}
        onPageChange={PageChangeHandle}
        pageSize={10}
        siblingCount={1}
        totalCount={44}
      />
      <ForgotPassword />
      <CreateNewPassword />
      <Input
        isShowButton
        // onChange={setInputValue}
        onClearClick={setInputValue}
        type={'search'}
        value={inputValue}
      />
    </div>
  )
}
