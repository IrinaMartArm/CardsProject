import { ElementRef, forwardRef } from 'react'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

type ItemsType = {
  name: string
}

type SelectType = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  items: ItemsType[]
  label?: string
  name: string
  onChange: (value: string) => void
  // value?: string
}
// type SelectItemType = {
//   children: string
//   className?: string
//   disabled?: boolean
//   label?: string
//   value: string
// }
export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectType>(
  ({ className, defaultValue, items, label, name, onChange, ...rest }: SelectType, ref) => {
    const classNames = {
      Container: clsx(s.Container, className),
      SelectTrigger: clsx(s.SelectTrigger, className),
      selectItem: clsx(s.SelectItem, className),
    }

    return (
      <SelectRadix.Root
        defaultValue={defaultValue || items[0].name}
        name={name}
        onValueChange={onChange}
        ref={ref}
        {...rest}
      >
        <div className={classNames.Container}>
          <SelectRadix.Trigger aria-label={label} className={classNames.SelectTrigger}>
            <SelectRadix.Value />
            <SelectRadix.Icon className={s.SelectIcon}>
              <ChevronDownIcon />
            </SelectRadix.Icon>
          </SelectRadix.Trigger>
          <SelectRadix.Portal>
            <SelectRadix.Content className={s.SelectContent}>
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
