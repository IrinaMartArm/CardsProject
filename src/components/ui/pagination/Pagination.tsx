import { ComponentPropsWithoutRef, ElementType } from 'react'

import { items } from '@/App'
import { LeftArrowButton } from '@/components/ui/pagination/LeftArrowButton'
import { PaginationButtons } from '@/components/ui/pagination/PaginationButtons'
import { RightArrowButton } from '@/components/ui/pagination/RightArrowButton'
import { Select } from '@/components/ui/select/Select'
import { Typography } from '@/components/ui/typography/Typography'

import s from './pagination.module.scss'

import { usePagination } from './usePagination'

type PaginationType<T extends ElementType> = {
  as?: T
  className?: string
  currentPage: number
  onFilterChange: (key: string, value: string) => void
  pageSize: number
  siblingCount: number
  totalCount: number
} & ComponentPropsWithoutRef<T>

export const Pagination = <T extends ElementType = 'button'>(
  props: PaginationType<T> & Omit<ComponentPropsWithoutRef<T>, keyof PaginationType<T>>
) => {
  const { as, currentPage, onFilterChange, pageSize, siblingCount = 1, totalCount, ...rest } = props

  const { isFirstPage, isLastPage, onNext, onPrevious, paginationRange } = usePagination({
    currentPage,
    onFilterChange,
    pageSize,
    siblingCount,
    totalCount,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  return (
    <div className={s.root}>
      <div className={s.paginationContainer}>
        <LeftArrowButton disabled={isFirstPage} onClick={onPrevious} />
        <PaginationButtons
          currentPage={currentPage}
          onClick={onFilterChange}
          paginationRange={paginationRange}
          {...rest}
        />
        <RightArrowButton disabled={isLastPage} onClick={onNext} />
      </div>
      <div className={s.selectWrapper}>
        <Typography variant={'body2'}>Показать</Typography>
        <Select
          isPagination
          items={items}
          name={'page'}
          onChange={onFilterChange}
          value={String(pageSize)}
        />
        <Typography variant={'body2'}>на странице</Typography>
      </div>
    </div>
  )
}
