import * as Tabs from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

type OptionsType = {
  disabled: boolean
  option: string
}

type TabsType = {
  tabsOptions: OptionsType[]
}
export const TabsDemo = ({ tabsOptions }: TabsType) => {
  return (
    <Tabs.Root className={s.TabsRoot} defaultValue={'tab1'}>
      <Tabs.List aria-label={'Manage your account'} className={s.TabsList}>
        {tabsOptions.map((el, index) => {
          return (
            <Tabs.Trigger
              className={s.TabsTrigger}
              disabled={el.disabled}
              key={index}
              value={el.option}
            >
              {el.option}
            </Tabs.Trigger>
          )
        })}
      </Tabs.List>
    </Tabs.Root>
  )
}
