import { Edit, More, Play, TrashBin } from '@/components/assets/icons'
import { Button, Typography } from '@/components/ui'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropDownMenu/Test'
import { LearnDialog } from '@/components/ui/modals/dialogs/LearnDialog'
import { Deck } from '@/services/decks/decks.types'

import d from '@/components/ui/dropDownMenu/dropDown.module.scss'

type Props = {
  deckData?: Deck
  id: string
  name?: string
}
export const MyDropdown = ({ id, name }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button icon={<More />} variant={'icon'} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <LearnDialog
            // deck={deckData}
            id={id}
            name={name}
            trigger={
              <div className={d.item}>
                <Play />
                <Typography variant={'caption'}>Learn</Typography>
              </div>
            }
          />
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
