import RadioGroupDemo from '@/components/ui/radio-group/RadioGroup'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: RadioGroupDemo,
  tags: ['autodocs'],
  title: 'Components/RadioGroupDemo',
} satisfies Meta<typeof RadioGroupDemo>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroup: Story = {
  args: {
    disabled: false,
  },
}
export const RadioGroupDisabled: Story = {
  args: {
    disabled: true,
  },
}
