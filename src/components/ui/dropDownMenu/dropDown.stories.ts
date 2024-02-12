import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenuDemo } from '@/components/ui/dropDownMenu/DropDown'

const meta = {
  argTypes: {},
  component: DropdownMenuDemo,
  tags: ['autodocs'],
  title: 'Components/DropDown',
} satisfies Meta<typeof DropdownMenuDemo>

export default meta
type Story = StoryObj<typeof meta>

export const DropdownMenu: Story = {
  args: {},
}
