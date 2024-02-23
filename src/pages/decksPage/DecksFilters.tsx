import { ChangeEvent } from 'react'

import { TrashBin } from '@/components/assets/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider/Slider'
import { Tabs } from '@/components/ui/tabs/Tabs'
import { Typography } from '@/components/ui/typography/Typography'
import { useGetMinMaxCardsQuery } from '@/services/decks/decks.service'
import { DeckResponse } from '@/services/decks/decks.types'

import s from '@/pages/decksPage/decks.module.scss'

type Props = {
  decks: DeckResponse | undefined
  onChange: (value: string) => void
  value: string
}

const tabOptions = [
  { disabled: false, option: 'My Cards' },
  { disabled: false, option: 'All Cards' },
]

export const DecksFilters = ({ decks, onChange, value }: Props) => {
  const {} = useGetMinMaxCardsQuery
  const onSearchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }

  const onClearClick = () => {
    onChange('')
  }

  const onValueChange = () => {}

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
      <Slider
        label={'Number of cards'}
        max={decks?.maxCardsCount || 0}
        min={0}
        onValueChange={onValueChange}
        value={[0, decks?.maxCardsCount || 0]}
      />
      <Button variant={'secondary'}>
        <TrashBin />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
