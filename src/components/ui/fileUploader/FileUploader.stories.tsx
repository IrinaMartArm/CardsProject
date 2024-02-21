import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Edit } from '@/components/assets/icons'

import { FileUploader } from './FileUploader'

const meta = {
  component: FileUploader,
  tags: ['autodocs'],
  title: 'components/FileUploader',
} satisfies Meta<typeof FileUploader>

export default meta

type Story = StoryObj<typeof meta>

const ControlledUploader = () => {
  const [cover, setCover] = useState<File | null>(null)

  const coverIsValidImage = cover !== null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px' }}>
      <FileUploader setFile={setCover} trigger={<Edit />} />
      {coverIsValidImage && <img alt={'cover'} src={URL.createObjectURL(cover)} />}
    </div>
  )
}

export const ControlledImageUploader: Story = {
  args: {
    trigger: null,
  },
  render: args => <ControlledUploader {...args} />,
}
