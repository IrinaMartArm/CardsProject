import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from '@/components/ui/checkBox/CheckBox'

const meta = {
  args: {
    disabled: false,
    label: 'Check-Box',
  },
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/CheckBox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false,
  },
}
export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}
