import { ChangeEvent } from 'react'

import { TrashBin } from '@/components/assets/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider/Slider'
import { Tabs } from '@/components/ui/tabs/Tabs'
import { Typography } from '@/components/ui/typography/Typography'

import s from '@/features/decks/decks.module.scss'

// type FormValues = {
//   onChange: (value: string) => void
//   search: string
// }

type Props = {
  onChange: (value: string) => void
  value: string
}

const tabOptions = [
  { disabled: false, option: 'My Cards' },
  { disabled: false, option: 'All Cards' },
]

export const DecksFilters = ({ onChange, value }: Props) => {
  // const { handleSubmit, register } = useForm<FormValues>()
  const onSearchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }

  const onClearClick = () => {
    onChange('')
  }

  return (
    <div className={s.filters}>
      <Input
        className={s.input}
        name={'search'}
        onChange={onSearchChangeHandler}
        onClearClick={onClearClick}
        type={'search'}
        value={value}
      />
      <Tabs
        label={'Show decks cards'}
        name={'decksCards'}
        onChange={() => {}}
        tabsOptions={tabOptions}
      />
      <Slider label={'Number of cards'} name={'numberOfCards'} />
      <Button variant={'secondary'}>
        <TrashBin />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
