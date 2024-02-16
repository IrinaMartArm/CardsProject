import type { Meta, StoryObj } from '@storybook/react'

import { Modals } from '@/components/ui/modals/Modals'

const meta = {
  component: Modals,
  tags: ['autodocs'],
  title: 'Components/Modals',
} satisfies Meta<typeof Modals>

export default meta
type Story = StoryObj<typeof meta>

export const ModalsStory: Story = {
  args: {
    title: 'Modals',
  },
}
