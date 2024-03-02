import { Link } from 'react-router-dom'

import { More, Play } from '@/components/assets/icons'
import { Button } from '@/components/ui'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropDownMenu/Test'
import { DeleteCardDialog } from '@/components/ui/modals/dialogs/DeleteCardDialog'
import { EditDeckDialog } from '@/components/ui/modals/dialogs/UpdateDeckDialog'
import { Deck } from '@/services/decks/decks.types'

import d from '../dropDown.module.scss'

type Props = {
  deckData?: Deck
  id: string
  onDeleteClick: () => void
}
export const MyDropdown = ({ deckData, id, onDeleteClick }: Props) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button icon={<More />} variant={'icon'} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align={'start'}>
          <span className={d.arrowBox} />
          <DropdownMenuItem asChild>
            <Button
              as={Link}
              className={d.item}
              icon={<Play />}
              to={`/learn/${id}`}
              variant={'icon'}
            >
              Learn
            </Button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <EditDeckDialog deck={deckData} id={id} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <DeleteCardDialog name={'Delete'} onClick={onDeleteClick} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
