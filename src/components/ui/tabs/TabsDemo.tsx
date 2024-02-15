import * as TabsRadix from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

type OptionsType = {
  disabled: boolean
  option: string
}

type TabsType = {
  tabsOptions: OptionsType[]
}
export const Tabs = ({ tabsOptions }: TabsType) => {
  const onValueChangeHandler = () => {}

  return (
    <TabsRadix.Root
      className={s.TabsRoot}
      defaultValue={tabsOptions[0].option}
      onValueChange={onValueChangeHandler}
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
              {el.option}
            </TabsRadix.Trigger>
          )
        })}
      </TabsRadix.List>
    </TabsRadix.Root>
  )
}
