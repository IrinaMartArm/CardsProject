import { baseApi } from '@/api/base-api'
import {
  CardsResponse,
  CreateDeckArgs,
  Deck,
  DeckResponse,
  DeleteDeckArgs,
  GetDecksArgs,
  GetMinMax,
  UpdateDeckArgs,
} from '@/services/decks/decks.types'

export const DecksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
          const res = await queryFulfilled

          for (const { endpointName, originalArgs } of DecksService.util.selectInvalidatedBy(
            getState(),
            [{ type: 'Decks' }]
          )) {
            if (endpointName !== 'getDecks') {
              continue
            }
            dispatch(
              DecksService.util.updateQueryData(endpointName, originalArgs, draft => {
                draft.items.unshift(res.data)
              })
            )
          }
        },
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<Deck, DeleteDeckArgs>({
        invalidatesTags: ['Decks'],
        onQueryStarted: async ({ id }, { dispatch, getState, queryFulfilled }) => {
          let patchResult

          for (const { endpointName, originalArgs } of DecksService.util.selectInvalidatedBy(
            getState(),
            [{ type: 'Decks' }]
          )) {
            if (endpointName !== 'getDecks') {
              continue
            }
            patchResult = dispatch(
              DecksService.util.updateQueryData(endpointName, originalArgs, draft => {
                const index = draft?.items?.findIndex(deck => deck.id === id)

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
        query: args => ({
          method: 'DELETE',
          url: `v1/decks/${args.id}`,
        }),
      }),
      getDeckById: builder.query<Deck, { id: string }>({
        query: ({ id }) => `v1/decks/${id}`,
      }),
      getDeckCards: builder.query<CardsResponse, { id: string }>({
        query: ({ id }) => `v1/decks/${id}/cards`,
      }),
      getDecks: builder.query<DeckResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ? args : undefined,
          url: `v2/decks`,
        }),
      }),
      getMinMaxCards: builder.query<GetMinMax, void>({
        query: () => `v2/decks/min-max-cards`,
      }),
      updateDeck: builder.mutation<Deck, UpdateDeckArgs>({
        invalidatesTags: ['Decks'],
        onQueryStarted: async ({ id, ...data }, { dispatch, getState, queryFulfilled }) => {
          let patchResult

          for (const { endpointName, originalArgs } of DecksService.util.selectInvalidatedBy(
            getState(),
            [{ type: 'Decks' }]
          )) {
            if (endpointName !== 'getDecks') {
              continue
            }
            patchResult = dispatch(
              DecksService.util.updateQueryData(endpointName, originalArgs, draft => {
                const index = draft?.items?.findIndex(deck => deck.id === id)

                if (!index || index === -1) {
                  return
                }

                Object.assign(draft?.items?.[index], data)
              })
            )
          }
          try {
            await queryFulfilled
          } catch {
            patchResult?.undo()
          }
        },
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `/v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useGetDeckCardsQuery,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
  useUpdateDeckMutation,
} = DecksService
