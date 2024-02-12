import { useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

const SliderDemo = () => {
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
    <div className={s.Container}>
      <div className={s.Block}>{value1}</div>
      <Slider.Root
        className={s.SliderRoot}
        defaultValue={[25, 75]}
        max={100}
        onValueChange={change}
        step={1}
      >
        <Slider.Track className={s.SliderTrack}>
          <Slider.Range className={s.SliderRange} />
        </Slider.Track>
        <Slider.Thumb aria-label={'Volume'} className={s.SliderThumb} />
        <Slider.Thumb aria-label={'Volume'} className={s.SliderThumb} />
      </Slider.Root>
      <div className={s.Block}>{value2}</div>
    </div>
  )
}

export default SliderDemo
