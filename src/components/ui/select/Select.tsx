import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

type ItemsType = {
  name: string
}

type SelectType = {
  className?: string
  disabled?: boolean
  items: ItemsType[]
  label?: string
  onChange: any
  placeholder?: string
}
type SelectItemType = {
  children: string
  className?: string
  disabled?: boolean
  label?: string
  onChange: any
  value: string
}
const SelectDemo = ({ className, items, label, placeholder }: SelectType) => {
  const classNames = {
    Container: clsx(s.Container, className),
    SelectTrigger: clsx(s.SelectTrigger, className),
  }

  return (
    <Select.Root>
      <div className={classNames.Container}>
        <Select.Trigger aria-label={label} className={classNames.SelectTrigger}>
          <Select.Value placeholder={placeholder} />
          <Select.Icon className={s.SelectIcon}>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.SelectContent}>
            <Select.Viewport className={s.SelectViewport}>
              <Select.Group>
                {items.map((el, index) => (
                  <SelectItem key={index} onChange={() => 'da'} value={el.name}>
                    {el.name}
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className={s.SelectScrollButton}>
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </div>
    </Select.Root>
  )
}

const SelectItem = ({ children, className, ...props }: SelectItemType) => {
  const classNames = {
    selectItem: clsx(s.SelectItem, className),
  }

  return (
    <Select.Item className={classNames.selectItem} {...props}>
      <Select.ItemText>{children}</Select.ItemText>
      {/*<Select.ItemIndicator className={s.SelectItemIndicator}>*/}
      {/*  <CheckIcon />*/}
      {/*</Select.ItemIndicator>*/}
    </Select.Item>
  )
}

export default SelectDemo
