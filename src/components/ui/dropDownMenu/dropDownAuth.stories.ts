import type { Meta, StoryObj } from '@storybook/react'

import { DropDownAuth } from '@/components/ui/dropDownMenu/DropDownAuth'

const meta = {
  argTypes: {},
  component: DropDownAuth,
  tags: ['autodocs'],
  title: 'Components/DropDownAuth',
} satisfies Meta<typeof DropDownAuth>

export default meta
type Story = StoryObj<typeof meta>

export const DropdownMenu: Story = {
  args: {},
}
