import { ElementRef, Ref, forwardRef } from 'react'

import { AnswerVariantType } from '@/utils/Types'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type RadioGroupType = {
  disabled?: boolean
  name?: string
  onChange?: () => void
  onValueChange?: () => void
  variants: AnswerVariantType[]
}
export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, RadioGroupType>(
  ({ disabled, name, onChange, variants }: RadioGroupType, ref: Ref<HTMLDivElement>) => {
    return (
      <form>
        <RadioGroupRadix.Root
          aria-label={'View density'}
          className={`${s.radioGroupRoot} ${disabled ? s.disabled : ''}`}
          defaultValue={'1'}
          disabled={disabled}
          name={name}
          onChange={onChange}
          ref={ref}
        >
          {variants.map(el => {
            return (
              <div className={s.box} key={el.id}>
                <div className={`${s.wrapper} ${disabled ? s.disabled : ''}`}>
                  <RadioGroupRadix.Item className={s.RadioGroupItem} id={el.id} value={el.variant}>
                    <RadioGroupRadix.Indicator className={s.RadioGroupIndicator} />
                  </RadioGroupRadix.Item>
                </div>
                <label className={'Label'} htmlFor={el.id}>
                  {el.variant}
                </label>
              </div>
            )
          })}
        </RadioGroupRadix.Root>
      </form>
    )
  }
)
