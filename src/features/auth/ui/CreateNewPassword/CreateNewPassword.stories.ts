import { CreateNewPassword } from '@/features/auth/ui/CreateNewPassword/CreateNewPassword'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'Auth/CreateNewPassword',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const PasswordStory: Story = {
  args: {},
}

// export const ForgotPasswordStory: Story = {
//   args: {},
// }
