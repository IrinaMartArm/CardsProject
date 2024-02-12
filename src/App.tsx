import { useState } from 'react'

import { Card } from '@/components/ui/card'
import { CheckBox } from '@/components/ui/checkBox'
import { DropdownMenuDemo } from '@/components/ui/dropDownMenu/DropDown'
import { Header } from '@/components/ui/header/Header'
import { Input } from '@/components/ui/input'
import { Modals } from '@/components/ui/modals/Modals'
import { Pagination } from '@/components/ui/pagination/Pagination'
import RadioGroupDemo from '@/components/ui/radio-group/RadioGroup'
import Select from '@/components/ui/select/Select'
import Slider from '@/components/ui/slider/Slider'
import { IconsBlock } from '@/components/ui/tables/IconsBlock'
import { StarsBlock } from '@/components/ui/tables/StarsBlock'
import { Table } from '@/components/ui/tables/Table'
import { TabsDemo } from '@/components/ui/tabs/TabsDemo'
import { Typography } from '@/components/ui/tipography/Typography'

import { Button } from './components/ui/button'
import out from './images/svg/log-out.svg'

export const items = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

export const tabsOptions = [
  { disabled: false, option: 'Switcher' },
  { disabled: false, option: 'Switcher' },
  { disabled: true, option: 'Switcher' },
  { disabled: false, option: 'Switcher' },
]

export function App() {
  const [currentPage, setCurrentPage] = useState(1)

  const PageChangeHandle = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '35px',
        justifyContent: 'center',
        padding: '100px',
      }}
    >
      <StarsBlock />
      <Button as={'a'} variant={'primary'}>
        <img alt={''} src={out} />
        hello
      </Button>
      <Button variant={'secondary'}>
        <img alt={''} src={out} />
        hello my friend
      </Button>
      <Button fullWidth variant={'primary'}>
        hello
      </Button>
      <Input className={'password'} label={'Input'} placeholder={'input'} type={'password'} />
      <Input className={'text'} label={'Input'} placeholder={'input'} type={'text'} />
      <Input className={'text'} disabled label={'Disabled'} placeholder={'input'} type={'text'} />
      <Input
        className={'search'}
        errorMessage={'error'}
        isShowButton
        placeholder={'input search'}
        type={'search'}
      />
      <Card />
      <CheckBox onChange={() => {}} />
      <CheckBox disabled onChange={() => {}} />
      <CheckBox label={'Check-box'} onChange={() => {}} />
      <CheckBox disabled label={'Check-box'} onChange={() => {}} />
      <RadioGroupDemo />
      <RadioGroupDemo disabled />
      <Slider />
      <Select items={items} onChange={() => {}} placeholder={'100'} />
      <TabsDemo tabsOptions={tabsOptions} />
      <DropdownMenuDemo />
      <div>
        <Typography variant={'body1'}>IT-incubator body1</Typography>
        <Typography variant={'body2'}>IT-incubator body2</Typography>
        <Typography variant={'caption'}>IT-incubator caption</Typography>
        <Typography variant={'caption-bold'}>IT-incubator caption-bold</Typography>
        <Typography variant={'caption-link'}>IT-incubator caption-link</Typography>
        <Typography variant={'error'}>IT-incubator error</Typography>
        <Typography variant={'h1'}>IT-incubator h1</Typography>
        <Typography variant={'h2'}>IT-incubator h2</Typography>
        <Typography variant={'h3'}>IT-incubator h3</Typography>
        <Typography variant={'link1'}>IT-incubator link1</Typography>
        <Typography variant={'overline'}>IT-incubator overline</Typography>
        <Typography variant={'subtitle-link'}>IT-incubator subtitle-link</Typography>
        <Typography variant={'subtitle1'}>IT-incubator subtitle1</Typography>
        <Typography variant={'subtitle2'}>IT-incubator subtitle2</Typography>
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={PageChangeHandle}
        pageSize={10}
        siblingCount={1}
        totalCount={44}
      />
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <StarsBlock />
            </Table.Cell>
            <Table.Cell>
              <IconsBlock />
            </Table.Cell>
            <Table.Cell />
            <Table.Cell>
              <Typography variant={'overline'}>Hi</Typography>
            </Table.Cell>
            <Table.Cell>:(</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <Modals />
      <Modals buttons />
      <Header name={'Irina'} />
      <Header withBtn />
    </div>
  )
}
