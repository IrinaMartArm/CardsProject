import { useParams } from 'react-router-dom'

import { Page } from '@/components/ui'
import { Learn } from '@/features/learn/ui/Learn'

export const LearnPage = () => {
  const { deckId } = useParams()

  return (
    <Page>
      {/*<Button as={Link} className={s.backBtn} icon={<ArrowLeft />} to={'/'} variant={'link'}>*/}
      {/*  <Typography variant={'body2'}>Back to Decks List</Typography>*/}
      {/*</Button>*/}
      <Learn deckId={deckId || ''} />
    </Page>
  )
}
