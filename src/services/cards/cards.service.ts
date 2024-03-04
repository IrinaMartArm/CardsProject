import { baseApi } from '@/api'
import { Card } from '@/services/decks/decks.types'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<Card, { body: FormData; id: string | undefined }>({
        invalidatesTags: (_, error) => (error ? [] : ['Cards', 'Decks', 'Deck']),
        query: ({ body, id }) => ({
          body,
          method: 'POST',
          url: `/v1/decks/${id}/cards`,
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

export const { useCreateCardMutation, useUpdateCardMutation } = cardsService
