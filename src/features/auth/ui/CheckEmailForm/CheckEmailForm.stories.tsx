import { Meta, StoryObj } from '@storybook/react'

import { CheckEmailForm } from './CheckEmailForm'

const meta = {
  component: CheckEmailForm,
  tags: ['autodocs'],
  title: 'Auth/CheckEmailForm',
} satisfies Meta<typeof CheckEmailForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'example@mail.com',
  },
}
