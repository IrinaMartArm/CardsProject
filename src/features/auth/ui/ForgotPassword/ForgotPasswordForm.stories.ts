import { ForgotPasswordForm } from '@/features/auth'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/ForgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordStory: Story = {}
