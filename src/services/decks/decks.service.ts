import { baseApi } from '@/api/base-api'
import { Card } from '@/services/cards/cards.types'
import {
  CardsResponse,
  CreateDeckArgs,
  Deck,
  DeckResponse,
  DeleteDeckArgs,
  GetCardsArgs,
  GetDecksArgs,
  GetMinMax,
  GradeArgs,
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
        query: args => {
          const formData = new FormData()

          if (args.cover) {
            formData.append('cover', args.cover)
          }
          formData.append('name', args.name)
          if (args.isPrivate) {
            formData.append('isPrivate', `${args.isPrivate}`)
          }

          return {
            body: formData,
            method: 'POST',
            url: `v1/decks`,
          }
        },
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
      getDeckCards: builder.query<CardsResponse, GetCardsArgs>({
        providesTags: ['Cards'],
        query: ({ id, ...params }) => ({
          params: params ?? undefined,
          url: `v1/decks/${id}/cards`,
        }),
      }),
      getDecks: builder.query<DeckResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ? args : undefined,
          url: `v2/decks`,
        }),
      }),
      getMinMaxCards: builder.query<GetMinMax, void>({
        providesTags: ['Decks'],
        query: () => `v2/decks/min-max-cards`,
      }),
      getQuestion: builder.query<Card, { id: string }>({
        query: ({ id }) => `/v1/decks/${id}/learn`,
      }),
      saveTheGrade: builder.mutation<Deck, GradeArgs>({
        query: ({ cardId, grade, id }) => ({
          body: { cardId, grade },
          method: 'POST',
          url: `/v1/decks/${id}/learn`,
        }),
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
        query: ({ cover, id, isPrivate, name }) => {
          const formData = new FormData()

          cover && formData.append('cover', cover)

          name && formData.append('name', name)

          isPrivate && formData.append('isPrivate', `${isPrivate}`)

          return {
            body: formData,
            method: 'PATCH',
            url: `/v1/decks/${id}`,
          }
        },
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
  useGetQuestionQuery,
  useSaveTheGradeMutation,
  useUpdateDeckMutation,
} = DecksService
