import { Meta } from '@storybook/react'

import { Typography } from './Typography'

export default {
  args: {
    variant: [],
  },
  component: Typography,
  title: 'Components/Typography',
} as Meta<typeof Typography>

export const AllTypography = {
  render: () => Typography,
}
