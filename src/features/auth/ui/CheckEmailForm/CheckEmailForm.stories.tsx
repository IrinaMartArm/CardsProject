import { MemoryRouter } from 'react-router-dom'

import { Meta, StoryObj } from '@storybook/react'

import { CheckEmailForm } from './CheckEmailForm'

const meta = {
  argTypes: {},
  component: CheckEmailForm,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
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
