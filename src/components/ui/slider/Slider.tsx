import { Ref, forwardRef, useState } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

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
        <div className={s.Block}>{value1}</div>
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
        <div className={s.Block}>{value2}</div>
      </div>
    </form>
  )
})
