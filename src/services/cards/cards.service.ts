import { baseApi } from '@/api'
import { Card, CardsResponse, GetCardsArgs } from '@/services/decks/decks.types'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<Card, { body: FormData; id: string | undefined }>({
        invalidatesTags: (_, error) => (error ? [] : ['Cards', 'Decks', 'Deck']),
        onQueryStarted: async (_, { dispatch, getState, queryFulfilled }) => {
          const res = await queryFulfilled

          for (const { endpointName, originalArgs } of cardsService.util.selectInvalidatedBy(
            getState(),
            [{ type: 'Cards' }]
          )) {
            if (endpointName !== 'getDeckCards') {
              continue
            }
            dispatch(
              cardsService.util.updateQueryData(endpointName, originalArgs, draft => {
                draft.items.unshift(res.data)
              })
            )
          }
        },
        query: ({ body, id }) => ({
          body,
          method: 'POST',
          url: `/v1/decks/${id}/cards`,
        }),
      }),
      deleteCard: builder.mutation({
        invalidatesTags: ['Cards', 'Deck', 'Decks'],
        onQueryStarted: async ({ id }, { dispatch, getState, queryFulfilled }) => {
          let patchResult

          for (const { endpointName, originalArgs } of cardsService.util.selectInvalidatedBy(
            getState(),
            [{ type: 'Cards' }]
          )) {
            if (endpointName !== 'getDeckCards') {
              continue
            }
            patchResult = dispatch(
              cardsService.util.updateQueryData(endpointName, originalArgs, draft => {
                const index = draft.items.findIndex(card => card.id === id)

                if (index !== undefined && index !== -1) {
                  draft?.items?.splice(index, 1)
                }
              })
            )
          }
          try {
            await queryFulfilled
          } catch {
            patchResult?.undo()
          }
        },
        query: ({ id }) => ({
          method: 'DELETE',
          url: `/v1/cards/${id}`,
        }),
      }),
      getDeckCards: builder.query<CardsResponse, GetCardsArgs>({
        providesTags: ['Cards'],
        query: ({ id, ...params }) => ({
          params: params ?? undefined,
          url: `v1/decks/${id}/cards`,
        }),
      }),
      updateCard: builder.mutation<Card, { body: FormData; card: Card }>({
        invalidatesTags: (_, error) => (error ? [] : ['Cards']),
        query: ({ body, card }) => ({
          body,
          method: 'PATCH',
          url: `/v1/cards/${card.id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetDeckCardsQuery,
  useUpdateCardMutation,
} = cardsService
