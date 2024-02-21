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
  onPageChange: (page: any) => void
  pageSize: number
  siblingCount: number
  totalCount: number
} & ComponentPropsWithoutRef<T>

export const Pagination = <T extends ElementType = 'a'>(
  props: PaginationType<T> & Omit<ComponentPropsWithoutRef<T>, keyof PaginationType<T>>
) => {
  const { as, currentPage, onPageChange, pageSize, siblingCount = 1, totalCount, ...rest } = props

  const { isFirstPage, isLastPage, onNext, onPrevious, paginationRange } = usePagination({
    currentPage,
    onPageChange,
    pageSize,
    siblingCount,
    totalCount,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onChangeHandler = (value: string) => {
    console.log(value)
  }

  return (
    <div className={s.root}>
      <div className={s.paginationContainer}>
        <LeftArrowButton disabled={isFirstPage} onClick={onPrevious} />
        <PaginationButtons
          currentPage={currentPage}
          onClick={onPageChange}
          paginationRange={paginationRange}
          {...rest}
        />
        <RightArrowButton disabled={isLastPage} onClick={onNext} />
      </div>
      <div className={s.selectWrapper}>
        <Typography variant={'body2'}>Показать</Typography>
        <Select isPagination items={items} name={'page'} onChange={onChangeHandler} />
        <Typography variant={'body2'}>на странице</Typography>
      </div>
    </div>
  )
}
