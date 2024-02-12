import { FC, ReactNode, useState } from 'react'

import { Check } from '@/images/icons/svgs/Check'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'
import { AnimatePresence } from 'framer-motion'

import s from './checkBox.module.scss'

export type CheckboxProps = {
  className?: string
  disabled?: boolean
  label?: ReactNode
  onChange?: (checked: boolean) => void
}

export const CheckBox: FC<CheckboxProps> = ({ className, disabled, label }) => {
  const classNames = {
    arrowColor: clsx(disabled ? 'var(--color-light-700)' : ''),
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    checkColor: clsx(disabled ? 'var(--color-dark-100)' : 'var(--color-light-900)'),
    checkColorB: clsx(disabled ? 'var(--color-light-900)' : 'var(--color-dark-900)'),
    container: clsx(s.container, className),
    label: clsx(s.label, disabled && s.disabled),
  }

  const [checked, setChecked] = useState(false)
  const onChangeH = () => {
    setChecked(!checked)
  }

  return (
    <form>
      <div className={classNames.container}>
        <LabelRadix.Root className={classNames.label}>
          <div className={classNames.buttonWrapper}>
            <CheckboxRadix.Root
              checked={checked}
              className={s.root}
              disabled={disabled}
              onCheckedChange={onChangeH}
            >
              <AnimatePresence initial={false}>
                {checked && (
                  <CheckboxRadix.Indicator asChild className={s.indicator} forceMount>
                    <Check
                      color={classNames.checkColor}
                      colorB={classNames.checkColorB}
                      size={20}
                    />
                  </CheckboxRadix.Indicator>
                )}
              </AnimatePresence>
            </CheckboxRadix.Root>
          </div>
          {label}
        </LabelRadix.Root>
      </div>
    </form>
  )
}
