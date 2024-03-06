import { ChangeEvent } from 'react'

import { TrashBin } from '@/components/assets/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider/Slider'
import { Tabs } from '@/components/ui/tabs/Tabs'
import { DeckResponse } from '@/services/decks/decks.types'

import s from '@/features/decks/ui/decks.module.scss'

type Props = {
  decks: DeckResponse | undefined
  maxCardsCount: number
  minCardsCount: number
  onChange: (value: string) => void
  onChangeFilter: (key: string, value: string) => void
  onFiltersReset: () => void
  originMaxCount: number
  tab: string
  value: string
}
export const DecksFilters = ({
  maxCardsCount,
  minCardsCount,
  onChange,
  onChangeFilter,
  onFiltersReset,
  originMaxCount,
  tab,
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
      <Tabs label={'Show decks cards'} name={'tab'} onChange={onChangeFilter} value={tab} />
      <Slider
        label={'Number of cards'}
        max={originMaxCount}
        onValueChange={onValueChangeHandler}
        value={[minCardsCount, maxCardsCount]}
      />
      <Button
        className={s.clearFilter}
        icon={<TrashBin />}
        onClick={onFiltersReset}
        variant={'secondary'}
      >
        Clear Filter
      </Button>
    </div>
  )
}
