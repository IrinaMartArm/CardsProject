import { baseApi } from '@/api'

import { Card } from './cards.types'

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
    }
  },
})

export const { useCreateCardMutation } = cardsService
