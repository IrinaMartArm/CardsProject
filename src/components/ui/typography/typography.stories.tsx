import type { Meta } from '@storybook/react'

import { Typography, TypographyVariantTypes } from './Typography'

const variants: TypographyVariantTypes[] = [
  'body1',
  'body2',
  'caption',
  'caption-bold',
  'caption-link',
  'error',
  'h1',
  'h2',
  'h3',
  'link1',
  'overline',
  'subtitle-link',
  'subtitle1',
  'subtitle2',
]

// const meta = {
//   argTypes: {
//     align: {
//       control: 'select',
//       description: 'Typography text align',
//       options: ['left', 'center', 'right'],
//     },
//     as: {
//       control: false,
//       description: 'Element for render',
//     },
//     variant: {
//       control: 'radio',
//       description: 'Typography display style',
//     },
//   },
//   component: Typography,
//   tags: ['autodocs'],
//   title: 'components/Typography',
// } satisfies Meta<typeof Typography>
//
// export default meta
//
// type Story = StoryObj<typeof meta>

export default {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} as Meta<typeof Typography>

export const AllVariants = {
  render: () => (
    <div>
      {variants.map(variant => (
        <div key={variant} style={{ margin: '10px 0' }}>
          <Typography variant={variant}>
            {variant}: The quick brown fox jumps over the lazy dog.
          </Typography>
        </div>
      ))}
    </div>
  ),
}
//
// export const H1: Story = {
//   args: {
//     children: 'h1. Heading',
//     variant: 'h1',
//   },
// }
//
// export const H2: Story = {
//   args: {
//     children: 'h2. Heading',
//     variant: 'h2',
//   },
// }
//
// export const H3: Story = {
//   args: {
//     children: 'h3. Heading',
//     variant: 'h3',
//   },
// }
//
// export const H4: Story = {
//   args: {
//     children: 'h4. Heading',
//     variant: 'h4',
//   },
// }
//
// export const Body1: Story = {
//   args: {
//     children:
//       'body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
//     variant: 'body1',
//   },
// }
//
// export const Subtitle1: Story = {
//   args: {
//     children: 'subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
//     variant: 'subtitle1',
//   },
// }
//
// export const Body2: Story = {
//   args: {
//     children:
//       'body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
//     variant: 'body2',
//   },
// }
//
// export const Subtitle2: Story = {
//   args: {
//     children:
//       'subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
//     variant: 'subtitle2',
//   },
// }
//
// export const Caption: Story = {
//   args: {
//     children: 'caption text',
//     variant: 'caption',
//   },
// }
//
// export const Overline: Story = {
//   args: {
//     children: 'overline text',
//     variant: 'overline',
//   },
// }
//
// export const Link1: Story = {
//   args: {
//     children: 'Link 1',
//     variant: 'link1',
//   },
// }
//
// export const Link2: Story = {
//   args: {
//     children: 'Link 2',
//     variant: 'link2',
//   },
// }
