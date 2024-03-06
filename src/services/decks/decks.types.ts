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
  cover?: File
  isPrivate?: boolean
  name: string
}
export type DeleteDeckArgs = {
  id: string
}
export type GetMinMax = {
  max: number
  min: number
}

export type GetCardsArgs = {
  answer?: string
  currentPage?: number
  id: string
  itemsPerPage?: number
  orderBy?: string
  question?: string
}

export type GradeArgs = {
  cardId: string
  grade: number
  id: string
}

export type UpdateDeckArgs = Partial<CreateDeckArgs> & { id: Deck['id'] }
