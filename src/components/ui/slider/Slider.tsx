import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

// import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography/Typography'
import * as SliderRadix from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './slider.module.scss'

export const Slider = forwardRef<
  ElementRef<typeof SliderRadix.Root>,
  Omit<ComponentPropsWithoutRef<typeof SliderRadix.Root>, 'value'> & {
    label?: string
    onChangeFilter: (key: string, value: string) => void
    value: (null | number)[]
  }
>(({ label, max, onChangeFilter, value, ...rest }, ref) => {
  // const onChangeFilterHandler = () => {}

  return (
    <div>
      <Typography variant={'body2'}>{label}</Typography>
      <div className={s.Container}>
        <span className={clsx(s.slider, s.Block)}>{value?.[0]}</span>
        {/*<Input className={clsx(s.slider, s.Block)} type={'text'} value={min + ''} />*/}
        <SliderRadix.Root
          className={s.SliderRoot}
          max={max}
          // onChangeFilter={onChangeFilterHandler}
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
        {/*<Input className={clsx(s.slider, s.Block)} type={'text'} value={max + ''} />*/}
      </div>
    </div>
  )
})
