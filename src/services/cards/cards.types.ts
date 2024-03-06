import { Pagination } from '@/services/common.types'

export type Card = {
  answer: string
  answerImg?: null | string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg?: null | string
  shots: number
  updated: string
  userId: string
}
export type CardsResponse = {
  items: Card[]
  pagination: Pagination
}
