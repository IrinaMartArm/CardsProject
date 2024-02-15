import { CreateNewPassword } from '@/features/ui/password/CreateNewPassword'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'Components/CreateNewPassword',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const PasswordStory: Story = {
  args: {},
}

// export const ForgotPasswordStory: Story = {
//   args: {},
// }
