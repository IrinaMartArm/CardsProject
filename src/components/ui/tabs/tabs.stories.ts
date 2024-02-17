import type { Meta, StoryObj } from '@storybook/react'

import { tabsOptions } from '@/App'
import { Tabs } from '@/components/ui/tabs/Tabs'

const meta = {
  argTypes: {},
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { tabsOptions },
}
