import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography/Typography'
import * as SliderRadix from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './slider.module.scss'

export const Slider = forwardRef<
  ElementRef<typeof SliderRadix.Root>,
  Omit<ComponentPropsWithoutRef<typeof SliderRadix.Root>, 'value'> & {
    label?: string
    value: (null | number)[]
  }
>(({ label, max, value, ...rest }, ref) => {
  return (
    <div>
      <Typography variant={'body2'}>{label}</Typography>
      <div className={s.Container}>
        <span className={clsx(s.slider, s.Block)}>{value?.[0]}</span>
        <SliderRadix.Root
          className={s.SliderRoot}
          max={max}
          ref={ref}
          value={[value?.[0] ?? 0, value?.[1] ?? max ?? 1]}
          {...rest}
        >
          <SliderRadix.Track className={s.SliderTrack}>
            <SliderRadix.Range className={s.SliderRange} />
          </SliderRadix.Track>
          <SliderRadix.Thumb aria-label={'Volume'} className={s.SliderThumb} />
          <SliderRadix.Thumb aria-label={'Volume'} className={s.SliderThumb} />
        </SliderRadix.Root>
        <span className={clsx(s.slider, s.Block)}>{value?.[1]}</span>
      </div>
    </div>
  )
})
