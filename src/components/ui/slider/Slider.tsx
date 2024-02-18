import { Ref, forwardRef, useState } from 'react'

import { Input } from '@/components/ui/input'
import * as SliderRadix from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './slider.module.scss'

export type SliderProps = {
  name?: string
}
export const Slider = forwardRef(({ name }: SliderProps, ref: Ref<HTMLSpanElement>) => {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  const change = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setValue1(value[0])
      setValue2(value[1])
    } else {
      setValue1(value)
    }
  }

  return (
    <form>
      <div className={s.Container}>
        <Input className={clsx(s.slider, s.Block)} type={'text'} value={value1 + ''} />
        <SliderRadix.Root
          className={s.SliderRoot}
          defaultValue={[25, 75]}
          max={100}
          name={name}
          onValueChange={change}
          ref={ref}
          step={1}
        >
          <SliderRadix.Track className={s.SliderTrack}>
            <SliderRadix.Range className={s.SliderRange} />
          </SliderRadix.Track>
          <SliderRadix.Thumb aria-label={'Volume'} className={s.SliderThumb} />
          <SliderRadix.Thumb aria-label={'Volume'} className={s.SliderThumb} />
        </SliderRadix.Root>
        <Input className={clsx(s.slider, s.Block)} type={'text'} value={value2 + ''} />
      </div>
    </form>
  )
})
