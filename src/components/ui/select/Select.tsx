import { ElementRef, Ref, forwardRef, useState } from 'react'

import { KeyboardArrowDown } from '@/components/assets/icons'
import { ArrowUpIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

type ItemsType = {
  name: string
}

type SelectType = {
  defaultValue?: string
  disabled?: boolean
  isPagination?: boolean
  items: ItemsType[]
  label?: string
  name: string
  onChange: (value: string) => void
  value?: string
}
export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectType>(
  (
    { defaultValue, isPagination, items, label, name, onChange, value, ...rest }: SelectType,
    ref: Ref<HTMLSelectElement>
  ) => {
    const classNames = {
      Container: clsx(s.Container),
      SelectTrigger: clsx(s.SelectTrigger, isPagination && s.pagination),
      selectItem: clsx(s.SelectItem, isPagination && s.pagination),
    }

    const [open, setOpen] = useState(false)
    const toggle = () => {
      setOpen(!open)
    }
    const ValueChangeHandler = (value: string) => onChange(value)

    return (
      <SelectRadix.Root
        defaultValue={defaultValue || items[0].name}
        name={name}
        onOpenChange={toggle}
        onValueChange={ValueChangeHandler}
        value={value}
        {...rest}
      >
        <div className={classNames.Container}>
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
                    <SelectRadix.Item className={classNames.selectItem} key={index} value={el.name}>
                      <SelectRadix.ItemText>{el.name}</SelectRadix.ItemText>
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
