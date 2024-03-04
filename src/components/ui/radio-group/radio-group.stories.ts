import { answerVariants } from '@/App'
import { ControlledRadioGroup } from '@/components/ui/controlled/ControlledRadioGroup'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: ControlledRadioGroup,
  tags: ['autodocs'],
  title: 'Components/ControlledRadioGroup',
} satisfies Meta<typeof ControlledRadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroup: Story = {
  args: {
    name: 'radioGroup',
    options: answerVariants,
  },
}
