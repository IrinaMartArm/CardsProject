import type { Meta, StoryObj } from '@storybook/react'

import { tabsOptions } from '@/App'
import { TabsDemo } from '@/components/ui/tabs/TabsDemo'

const meta = {
  argTypes: {},
  component: TabsDemo,
  tags: ['autodocs'],
  title: 'Components/TabsDemo',
} satisfies Meta<typeof TabsDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { tabsOptions },
}
