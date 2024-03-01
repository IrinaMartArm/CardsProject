import type { Meta, StoryObj } from '@storybook/react'

import { CardBox } from './'

const meta = {
  argTypes: {},
  component: CardBox,
  tags: ['autodocs'],
  title: 'Components/CardBox',
} satisfies Meta<typeof CardBox>

export default meta
type Story = StoryObj<typeof meta>

export const CardDemo: Story = {
  args: {},
}
