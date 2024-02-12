import { Pagination } from '@/components/ui/pagination/Pagination'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    currentPage: 1,
    pageSize: 5,
    siblingCount: 1,
    totalCount: 10,
  },
}
