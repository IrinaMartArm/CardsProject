import { PersonInfo } from '@/features/ui/personInfo/PersonInfo'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: PersonInfo,
  tags: ['autodocs'],
  title: 'Components/PersonInfo',
} satisfies Meta<typeof PersonInfo>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInfo: Story = {
  args: {},
}
