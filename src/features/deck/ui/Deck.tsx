import { Link } from 'react-router-dom'

import { ArrowLeft } from '@/components/assets/icons'
import { Button, Input, Page, Typography } from '@/components/ui'
import { MyDropdown } from '@/components/ui/dropDownMenu/myDropdown/MyDropdown'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { CreateCardModal } from '@/features/card/ui/CardActions/CreateCardModal/CreateCardModal'
import { useDeckSearchParams } from '@/features/deck/hooks/useDeckSearchParams'
import { CardsTable } from '@/features/deck/ui/CardsTable'

import s from './DeckPage.module.scss'

export const Deck = () => {
  const {
    cardsData,
    currentUserId,
    deckData,
    deckId,
    disabled,
    inputSearchHandler,
    isOwner,
    search,
    setSearchParametersHandler,
  } = useDeckSearchParams()

  return (
    <Page>
      <div className={s.root}>
        <Button as={Link} className={s.backBtn} icon={<ArrowLeft />} to={'/'} variant={'link'}>
          <Typography variant={'body2'}>Back to Decks List</Typography>
        </Button>
        <div className={s.title}>
          <Typography className={s.dropBoxTitle} variant={'h1'}>
            {deckData?.name}
            {isOwner && <MyDropdown />}
          </Typography>

          {isOwner ? (
            <CreateCardModal deckId={deckId} />
          ) : (
            <Button as={Link} to={`/decks/${deckId}/learn`}>
              Learn to Pack
            </Button>
          )}
        </div>
        <img alt={''} src={deckData?.cover} width={50} />
        <Input
          name={'search'}
          onChange={inputSearchHandler}
          placeholder={'Search cards'}
          type={'search'}
          value={search}
        />
        <CardsTable cards={cardsData?.items} currentUserId={currentUserId} disabled={disabled} />
        <Pagination
          currentPage={cardsData?.pagination.currentPage || 1}
          onFilterChange={setSearchParametersHandler}
          pageSize={cardsData?.pagination.itemsPerPage || 10}
          siblingCount={1}
          totalCount={deckData?.cardsCount || 1}
        />
      </div>
    </Page>
  )
}
