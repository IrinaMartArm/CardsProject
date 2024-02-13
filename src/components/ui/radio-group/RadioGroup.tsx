import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

type RadioGroupType = {
  disabled?: boolean
  onClick?: () => void
}
const RadioGroupDemo = ({ disabled, onClick }: RadioGroupType) => {
  return (
    <form>
      <RadioGroup.Root
        aria-label={'View density'}
        className={`${s.radioGroupRoot} ${disabled ? s.disabled : ''}`}
        defaultValue={'default'}
        disabled={disabled}
      >
        <div className={s.box}>
          <div className={`${s.wrapper} ${disabled ? s.disabled : ''}`}>
            <RadioGroup.Item
              className={s.RadioGroupItem}
              id={'r1'}
              onClick={onClick}
              value={'default'}
            >
              <RadioGroup.Indicator className={s.RadioGroupIndicator} />
            </RadioGroup.Item>
          </div>
          <label className={'Label'} htmlFor={'r1'}>
            Default
          </label>
        </div>
        <div className={s.box}>
          <div className={`${s.wrapper} ${disabled ? s.disabled : ''}`}>
            <RadioGroup.Item
              className={s.RadioGroupItem}
              id={'r2'}
              onClick={onClick}
              value={'comfortable'}
            >
              <RadioGroup.Indicator className={s.RadioGroupIndicator} />
            </RadioGroup.Item>
          </div>
          <label className={'Label'} htmlFor={'r2'}>
            Comfortable
          </label>
        </div>
      </RadioGroup.Root>
    </form>
  )
}

export default RadioGroupDemo
