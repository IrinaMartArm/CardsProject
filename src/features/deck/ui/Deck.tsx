import { Link } from 'react-router-dom'

import { ArrowLeft } from '@/components/assets/icons'
import { Button, Input, Page, Typography } from '@/components/ui'
import { MyDropdown } from '@/components/ui/dropDownMenu/myDropdown/MyDropdown'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { Preloader } from '@/components/ui/preloader'
import { CreateCardModal } from '@/features/card/ui/CardActions/CreateCardModal/CreateCardModal'
import { useDeckSearchParams } from '@/features/deck/hooks/useDeckSearchParams'
import { CardsTable } from '@/features/deck/ui/CardsTable'
import { useDeleteDeckMutation } from '@/services/decks/decks.service'

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

  const [deleteDeck, { isLoading }] = useDeleteDeckMutation()
  const onDeleteClick = () => {
    deleteDeck({
      id: deckId || '',
    })
  }

  if (isLoading || disabled) {
    return <Preloader size={100} />
  }

  return (
    <Page>
      <div className={s.root}>
        <Button as={Link} className={s.backBtn} icon={<ArrowLeft />} to={'/'} variant={'link'}>
          <Typography variant={'body2'}>Back to Decks List</Typography>
        </Button>
        {cardsData?.items && cardsData?.items.length >= 1 ? (
          <>
            <div className={s.title}>
              <Typography className={s.dropBoxTitle} variant={'h1'}>
                {deckData?.name}
                {isOwner && (
                  <MyDropdown
                    deckData={deckData}
                    id={deckId || ''}
                    isLoading={isLoading}
                    onDeleteClick={onDeleteClick}
                  />
                )}
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
            <CardsTable
              cards={cardsData?.items}
              currentUserId={currentUserId}
              disabled={isLoading}
            />
            <Pagination
              currentPage={cardsData?.pagination.currentPage || 1}
              onFilterChange={setSearchParametersHandler}
              pageSize={cardsData?.pagination.itemsPerPage || 10}
              siblingCount={1}
              totalCount={deckData?.cardsCount || 1}
            />
          </>
        ) : (
          <div className={s.empty}>
            {isOwner ? (
              <>
                <Typography className={s.text} variant={'body1'}>
                  This pack is empty. Click add new card to fill this pack
                </Typography>
                <CreateCardModal deckId={deckId} />
              </>
            ) : (
              <Typography className={s.text} variant={'body1'}>
                Can not find any pack of cards
              </Typography>
            )}
          </div>
        )}
      </div>
    </Page>
  )
}
