import { Typography } from '@/components/ui/typography/Typography'
import * as TabsRadix from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

type TabsType = {
  label?: string
  name?: string
  onChange: (key: string, value: string) => void
  value: string
}
export const Tabs = ({ label, onChange, value }: TabsType) => {
  const onValueChangeHandler = (value: string) => {
    onChange('tab', value)
    console.log(value)
  }

  return (
    <div>
      <Typography variant={'body2'}>{label}</Typography>
      <TabsRadix.Root
        className={s.TabsRoot}
        defaultValue={value}
        onValueChange={onValueChangeHandler}
      >
        <TabsRadix.List aria-label={'Manage your account'} className={s.TabsList}>
          <TabsRadix.Trigger className={s.TabsTrigger} value={'all'}>
            <Typography variant={'body1'}>All Cards</Typography>
          </TabsRadix.Trigger>
          <TabsRadix.Trigger className={s.TabsTrigger} value={'my'}>
            <Typography variant={'body1'}>My Cards</Typography>
          </TabsRadix.Trigger>
        </TabsRadix.List>
      </TabsRadix.Root>
    </div>
  )
}
