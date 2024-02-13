import type { Meta, StoryObj } from '@storybook/react'

import { ErrorPage } from '@/features/ui/404/ErrorPage'

const meta = {
  component: ErrorPage,
  tags: ['autodocs'],
  title: 'Components/ErrorPage',
} satisfies Meta<typeof ErrorPage>

export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {
  args: {},
}
