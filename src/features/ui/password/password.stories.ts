import { Password } from '@/features/ui/password/Password'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Password,
  tags: ['autodocs'],
  title: 'Components/Password',
} satisfies Meta<typeof Password>

export default meta
type Story = StoryObj<typeof meta>

export const PasswordStory: Story = {
  args: {},
}

// export const ForgotPasswordStory: Story = {
//   args: {},
// }
