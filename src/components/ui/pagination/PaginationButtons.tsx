import { ComponentPropsWithoutRef, ElementType, FC } from 'react'

import { clsx } from 'clsx'

import s from './pagination.module.scss'

type PaginationButtonsType<T extends ElementType> = {
  as?: T
  currentPage: number
  disabled?: boolean
  onClick: (pageNumber: number) => void
  paginationRange: (number | string)[]
} & ComponentPropsWithoutRef<T>

const classNames = {
  dots: s.dots,
  item: s.item,
  pageButton(selected?: boolean) {
    return clsx(this.item, selected && s.selected)
  },
}

export const PaginationButtons = <T extends ElementType = 'a'>(
  props: PaginationButtonsType<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof PaginationButtonsType<T>>
) => {
  const { as: Component = 'a', currentPage, onClick, paginationRange, ...rest } = props

  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return (
          <Component
            className={classNames.pageButton(isSelected)}
            key={index}
            onClick={() => onClick(page)}
            {...rest}
          >
            {page}
          </Component>
        )
      })}
    </>
  )
}

const Dots: FC = () => {
  return <span className={s.dots}>&#8230;</span>
}
