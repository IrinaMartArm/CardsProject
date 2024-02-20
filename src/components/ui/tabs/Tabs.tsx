import { Typography } from '@/components/ui/typography/Typography'
import * as TabsRadix from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

type OptionsType = {
  disabled: boolean
  option: string
}

type TabsType = {
  label?: string
  name?: string
  onChange: () => void
  tabsOptions: OptionsType[]
  value?: string
}
export const Tabs = ({ label, onChange, tabsOptions, value }: TabsType) => {
  const onValueChangeHandler = () => {
    onChange()
  }

  return (
    <div>
      <Typography variant={'body2'}>{label}</Typography>
      <TabsRadix.Root
        className={s.TabsRoot}
        defaultValue={tabsOptions[0].option}
        onValueChange={onValueChangeHandler}
        value={value}
      >
        <TabsRadix.List aria-label={'Manage your account'} className={s.TabsList}>
          {tabsOptions.map((el, index) => {
            return (
              <TabsRadix.Trigger
                className={s.TabsTrigger}
                disabled={el.disabled}
                key={index}
                value={el.option}
              >
                <Typography variant={'body1'}>{el.option}</Typography>
              </TabsRadix.Trigger>
            )
          })}
        </TabsRadix.List>
      </TabsRadix.Root>
    </div>
  )
}
