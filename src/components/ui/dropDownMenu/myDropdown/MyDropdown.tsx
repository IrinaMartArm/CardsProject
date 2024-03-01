import { Edit, More, Play, TrashBin } from '@/components/assets/icons'
import { Button, Modal, Typography } from '@/components/ui'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropDownMenu/Test'
import { LearnDialog } from '@/components/ui/modals/dialogs/LearnDialog'
import { useGetQuestionQuery } from '@/services/decks/decks.service'

import d from '@/components/ui/dropDownMenu/dropDown.module.scss'

type Props = {
  id: string
  name?: string
}
export const MyDropdown = ({ id, name }: Props) => {
  const { data } = useGetQuestionQuery({ id })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button icon={<More />} variant={'icon'} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Modal
            trigger={
              <div className={d.item}>
                <Play />
                <Typography variant={'caption'}>Learn</Typography>
              </div>
            }
          >
            <LearnDialog card={data} name={name} />
          </Modal>
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
