import { Link } from 'react-router-dom'

import { ArrowLeft } from '@/components/assets/icons'
import { Button, Page, Typography } from '@/components/ui'
import { Deck } from '@/features/deck/ui/Deck'

import s from '@/features/deck/ui/DeckPage.module.scss'

export const DeckPage = () => {
  return (
    <Page>
      <Button as={Link} className={s.backBtn} icon={<ArrowLeft />} to={'/'} variant={'link'}>
        <Typography variant={'body2'}>Back to Decks List</Typography>
      </Button>
      <Deck />
    </Page>
  )
}
