import { useParams } from 'react-router-dom'

import { Page } from '@/components/ui'
import { Learn } from '@/features/learn/ui/Learn'

export const LearnPage = () => {
  const { deckId } = useParams()

  return (
    <Page>
      <Learn id={deckId || ''} />
    </Page>
  )
}
