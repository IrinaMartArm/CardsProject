import { Link, useParams } from 'react-router-dom'

import { ArrowLeft } from '@/components/assets/icons'
import { Button, Page, Typography } from '@/components/ui'
import { Learn } from '@/features/learn/ui/Learn'

import s from '@/features/deck/ui/DeckPage.module.scss'

export const LearnPage = () => {
  const { deckId } = useParams()

  return (
    <Page>
      <Button as={Link} className={s.backBtn} icon={<ArrowLeft />} to={'/'} variant={'link'}>
        <Typography variant={'body2'}>Back to Decks List</Typography>
      </Button>
      <Learn deckId={deckId || ''} />
    </Page>
  )
}
