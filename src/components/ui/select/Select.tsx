import { ElementRef, Ref, forwardRef, useState } from 'react'

import { Typography } from '@/components/ui/typography/Typography'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

type ItemsType = {
  id: string
  value: string
}

type SelectType = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  isPagination?: boolean
  items: ItemsType[]
  label?: string
  name?: string
  onChange: (value: string) => void
  value?: string
}
export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectType>(
  (
    {
      className,
      defaultValue,
      isPagination,
      items,
      label,
      name,
      onChange,
      value,
      ...rest
    }: SelectType,
    ref: Ref<HTMLSelectElement>
  ) => {
    const classNames = {
      Container: clsx(s.Container, className),
      SelectTrigger: clsx(s.SelectTrigger, isPagination && s.pagination, className),
      selectItem: clsx(s.SelectItem, isPagination && s.pagination, className),
    }

    const [open, setOpen] = useState(false)
    const toggle = () => {
      setOpen(!open)
    }
    const ValueChangeHandler = (value: string) => onChange(value)

    return (
      <SelectRadix.Root
        defaultValue={defaultValue || items[0].value}
        name={name}
        onOpenChange={toggle}
        onValueChange={ValueChangeHandler}
        value={value}
        {...rest}
      >
        <div className={classNames.Container}>
          {label && (
            <Typography className={s.label} variant={'body2'}>
              {label}
            </Typography>
          )}
          <SelectRadix.Trigger aria-label={label} className={classNames.SelectTrigger}>
            <SelectRadix.Value ref={ref} />
            {open ? (
              <SelectRadix.Icon className={s.SelectIcon}>
                <ChevronUpIcon />
              </SelectRadix.Icon>
            ) : (
              <SelectRadix.Icon className={s.SelectIcon}>
                <ChevronDownIcon />
              </SelectRadix.Icon>
            )}
          </SelectRadix.Trigger>
          <SelectRadix.Portal>
            <SelectRadix.Content className={s.SelectContent} position={'popper'} sideOffset={-2}>
              <SelectRadix.Viewport className={s.SelectViewport}>
                <SelectRadix.Group>
                  {items.map((el, index) => (
                    <SelectRadix.Item
                      className={classNames.selectItem}
                      key={index}
                      value={el.value}
                    >
                      <SelectRadix.ItemText>{el.value}</SelectRadix.ItemText>
                    </SelectRadix.Item>
                  ))}
                </SelectRadix.Group>
              </SelectRadix.Viewport>
              <SelectRadix.ScrollDownButton className={s.SelectScrollButton}>
                <ChevronDownIcon />
              </SelectRadix.ScrollDownButton>
            </SelectRadix.Content>
          </SelectRadix.Portal>
        </div>
      </SelectRadix.Root>
    )
  }
)

// const SelectItem = ({ children, className, ...props }: SelectItemType) => {
//   const classNames = {
//     selectItem: clsx(s.SelectItem, className),
//   }
//
//   return (
//     <SelectRadix.Item className={classNames.selectItem} {...props}>
//       <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
//       {/*<Select.ItemIndicator className={s.SelectItemIndicator}>*/}
//       {/*  <CheckIcon />*/}
//       {/*</Select.ItemIndicator>*/}
//     </SelectRadix.Item>
//   )
// }
