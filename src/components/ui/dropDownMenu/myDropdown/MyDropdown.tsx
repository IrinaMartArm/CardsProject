import { Edit, More, Play, TrashBin } from '@/components/assets/icons'
import { Button, Typography } from '@/components/ui'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropDownMenu/Test'

export const MyDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button icon={<More />} variant={'icon'} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => {}}>
          <Play />
          <Typography variant={'caption'}>Learn</Typography>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => {}}>
          <Edit />
          <Typography variant={'caption'}>Edit</Typography>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => {}}>
          <TrashBin />
          <Typography variant={'caption'}>Delete</Typography>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
