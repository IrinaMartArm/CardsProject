import { baseQueryWithReauth } from '@/api/base-query.reauth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Cards', 'Me', 'Deck'],
})
