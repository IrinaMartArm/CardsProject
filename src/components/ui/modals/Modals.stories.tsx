import { Picture } from '@/components/assets/icons'
import imgReact from '@/components/assets/images/imgReact.png'
import { Button } from '@/components/ui/button'
import { CheckBox } from '@/components/ui/checkBox'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select/Select'
import { Typography } from '@/components/ui/typography/Typography'
import { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modals'

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Modal',
}

export default meta
type Story = StoryObj<typeof meta>

export const ModalWithTitle: Story = {
  args: {
    defaultOpen: false,
    title: 'title',
    trigger: <Button>Open modal</Button>,
  },
}

export const ModalWithChildren: Story = {
  args: {
    children: (
      <div style={{ padding: '18px 24px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eos error explicabo fugiat
        laborum minus, modi non praesentium quaerat quibusdam ratione reiciendis, tempora vel.
        Accusantium consequatur ex excepturi fugit, impedit ipsum laboriosam nihil quaerat quibusdam
        saepe, sequi, velit? Atque dolor ducimus ea est mollitia, natus nihil quam quibusdam quos
        voluptatem?
      </div>
    ),
    defaultOpen: false,
    trigger: <Button>Open modal</Button>,
  },
}

const options = [
  { title: 'title1', value: 'title1' },
  { title: 'title2', value: 'title2' },
  { title: 'title3', value: 'title3' },
  { title: 'title4', value: 'title4' },
]

export const ModalWithSelectAndInput: Story = {
  args: {
    children: (
      <div
        style={{
          padding: '18px 24px',
          width: '100%',
        }}
      >
        <Select items={options} label={'Select-box'} onChange={() => {}} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginTop: '24px',
          }}
        >
          <Input label={'Input'} type={'text'} value={'Input'} />
          <Input label={'Input'} type={'text'} value={'Input'} />
          <CheckBox checked label={'check-box'} />
        </div>
      </div>
    ),
    defaultOpen: false,
    trigger: <Button>Open modal</Button>,
  },
}

export const ModalQuestion: Story = {
  args: {
    children: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '18px 24px',
          width: '100%',
        }}
      >
        <Typography variant={'subtitle2'}>Question:</Typography>
        <Input label={'Question?'} type={'text'} value={'Name'} />
        <img alt={'Mask'} src={imgReact} />
        <Button icon={<Picture />} variant={'secondary'}>
          Change Cover
        </Button>
        <Typography variant={'subtitle2'}>Answer:</Typography>
        <Input label={'Answer'} type={'text'} value={'Name'} />
        <img alt={'Mask'} src={imgReact} />
        <Button icon={<Picture />} variant={'secondary'}>
          Change Cover
        </Button>
        <Input label={'Input'} type={'text'} value={'Input'} />
        <CheckBox checked label={'check-box'} />
      </div>
    ),
    defaultOpen: false,
    trigger: <Button>Open modal</Button>,
  },
}

export const ModalFooter: Story = {
  args: {
    children: (
      <div
        style={{
          display: 'flex',
          gap: '120px',
          padding: '18px 24px',
        }}
      >
        <Button variant={'secondary'}>Button Secondary</Button>
        <Button variant={'primary'}>Button primary</Button>
      </div>
    ),
    defaultOpen: false,
    trigger: <Button>Open modal</Button>,
  },
}

export const ModalFullExample: Story = {
  args: {
    children: (
      <div
        style={{
          padding: '18px 24px',
          width: '100%',
        }}
      >
        <Select items={options} label={'Select-box'} onChange={() => {}} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginTop: '24px',
          }}
        >
          <Input label={'Input'} type={'text'} value={'Input'} />
          <Input label={'Input'} type={'text'} value={'Input'} />
          <CheckBox checked label={'check-box'} />
        </div>
        <div
          style={{
            display: 'flex',
            gap: '140px',
            marginTop: '36px',
          }}
        >
          <Button variant={'secondary'}>Button Secondary</Button>
          <Button variant={'primary'}>Button primary</Button>
        </div>
      </div>
    ),
    defaultOpen: false,
    title: 'title',
    trigger: <Button>Open modal</Button>,
  },
}
