import { ChangeEvent } from 'react'

import { TrashBin } from '@/components/assets/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider/Slider'
import { Tabs } from '@/components/ui/tabs/Tabs'
import { Typography } from '@/components/ui/typography/Typography'
import { DeckResponse } from '@/services/decks/decks.types'

import s from '@/features/decks/ui/decks.module.scss'

type Props = {
  decks: DeckResponse | undefined
  maxCardsCount: number
  minCardsCount: number
  onChange: (value: string) => void
  onChangeFilter: (key: string, value: string) => void
  originMaxCount: number
  value: string
}

const tabOptions = [
  { disabled: false, option: 'My Cards' },
  { disabled: false, option: 'All Cards' },
]

export const DecksFilters = ({
  maxCardsCount,
  minCardsCount,
  onChange,
  onChangeFilter,
  originMaxCount,
  value,
}: Props) => {
  const onSearchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    onChange(value)
    onChangeFilter('searchValue', value)
  }

  const onValueChangeHandler = (value: number[]) => {
    const firstValue = value[0]
    const secondValue = value[1]

    onChangeFilter('minCardsCount', String(firstValue))
    onChangeFilter('maxCardsCount', String(secondValue))
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
      <Slider
        label={'Number of cards'}
        max={originMaxCount}
        onValueChange={onValueChangeHandler}
        value={[minCardsCount, maxCardsCount]}
      />
      <Button variant={'secondary'}>
        <TrashBin />
        <Typography variant={'subtitle2'}>Clear Filter</Typography>
      </Button>
    </div>
  )
}
