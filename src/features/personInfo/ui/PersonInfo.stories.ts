import { PersonInfo } from '@/features/personInfo'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: PersonInfo,
  tags: ['autodocs'],
  title: 'Components/PersonInfo',
} satisfies Meta<typeof PersonInfo>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInfo: Story = {
  args: {
    avatar: '',
    email: 'bcgdfsrwe@bv.com',
    name: 'Test',
  },
}
