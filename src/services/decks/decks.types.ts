import { PaginatedResponse } from '@/services/common.types'

export type DeckResponse = PaginatedResponse<Deck[]>

export type Deck = {
  author: Author
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type Author = {
  id: string
  name: string
}
export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: null | string
}
export type CreateDeckArgs = {
  cover?: File | null
  isPrivate?: boolean
  name: string
}
export type DeleteDeckArgs = {
  id: string
}
