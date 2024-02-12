import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox } from './'

const meta = {
  args: {
    checked: true,
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

export const Checked: Story = {
  args: {
    checked: true,
  },
}
export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}
