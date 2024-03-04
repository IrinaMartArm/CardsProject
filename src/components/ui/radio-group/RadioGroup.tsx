import { ComponentPropsWithoutRef, ElementRef, Ref, forwardRef } from 'react'

import { Typography } from '@/components/ui'
import { Option } from '@/utils/Types'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

export type RadioGroupProps = Omit<
  ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>,
  'children'
> & {
  errorMessage?: string
  options: Option[]
}
export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, RadioGroupProps>(
  (
    { disabled, id, name, onValueChange, options, value }: RadioGroupProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <RadioGroupRoot
        aria-label={'View density'}
        className={`${s.radioGroupRoot} ${disabled ? s.disabled : ''}`}
        defaultValue={'1'}
        disabled={disabled}
        id={id}
        name={name}
        onValueChange={onValueChange}
        ref={ref}
        value={`${value}`}
      >
        {options.map(el => {
          return (
            <div className={s.box} key={el.value}>
              <div className={`${s.wrapper} ${disabled ? s.disabled : ''}`}>
                <RadioGroupItem id={el.value} value={el.value} />
              </div>
              <Typography as={'label'} htmlFor={el.value} variant={'body2'}>
                {el.label}
              </Typography>
            </div>
          )
        })}
      </RadioGroupRoot>
    )
  }
)

const RadioGroupRoot = forwardRef<
  ElementRef<typeof RadioGroupRadix.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupRadix.Root className={clsx(s.radioGroupRoot, className)} {...props} ref={ref} />
})

RadioGroupRoot.displayName = RadioGroupRadix.Root.displayName

const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupRadix.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupRadix.Item>
>(({ children, className, ...props }, ref) => {
  return (
    <RadioGroupRadix.Item className={clsx(s.RadioGroupItem, className)} ref={ref} {...props}>
      <RadioGroupRadix.Indicator className={s.RadioGroupIndicator} />
    </RadioGroupRadix.Item>
  )
})

RadioGroupItem.displayName = RadioGroupRadix.Item.displayName
