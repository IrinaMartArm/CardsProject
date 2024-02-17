import { PersonInfo } from '@/features/personInfo/ui/PersonInfo'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: PersonInfo,
  tags: ['autodocs'],
  title: 'Components/PersonInfo',
} satisfies Meta<typeof PersonInfo>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInfo: Story = {
  args: {},
}
