import { ComponentPropsWithoutRef, useRef } from 'react'

import { Picture, TrashBin } from '@/components/assets/icons'
import { Button, ControlledTextField } from '@/components/ui'
import { IconButton } from '@/components/ui/IconButton'
import { FileUploader } from '@/components/ui/fileUploader'
import { ModalClose } from '@/components/ui/modals/ModalClose'
import { ActionsCardFormData, useActionsCardForm } from '@/features/card/hooks/useActionsCardForm'
import { Card } from '@/services/decks/decks.types'
import { CatchingData } from '@/utils/handleErrorResponse'

import s from './ActionsCardForm.module.scss'

type Props = {
  card?: Card
  disabled: boolean
  onSubmit: (data: FormData) => Promise<CatchingData | undefined>
  submitTitle: string
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const ActionsCardForm = ({ card, disabled, onSubmit, submitTitle }: Props) => {
  const {
    coverOptions: { answerCover, questionCover, setAnswerCover, setQuestionCover },
    formValues: {
      control,
      formState: { errors },
      handleSubmit,
      setError,
    },
  } = useActionsCardForm(card)

  const handleCreateCard = (formValues: ActionsCardFormData) => {
    const formData = new FormData()

    formData.append('question', formValues.question)
    formData.append('answer', formValues.answer)
    !isDefaultQuestionCover && formData.append('questionImg', questionCover || '')
    !isDefaultAnswerCover && formData.append('answerImg', answerCover || '')

    onSubmit(formData).then(error => {
      if (error && error.fieldErrors) {
        error.fieldErrors?.forEach(el => {
          setError(el.field as keyof ActionsCardFormData, { message: el.message })
        })
      }
    })
  }

  const isDefaultQuestionCover = typeof questionCover === 'string'
  const isDefaultAnswerCover = typeof answerCover === 'string'
  const questionFileRef = useRef<HTMLInputElement>(null)
  const answerFileRef = useRef<HTMLInputElement>(null)
  const handleClearQuestionCover = () => {
    setQuestionCover(null)
    if (questionFileRef.current) {
      questionFileRef.current.value = ''
    }
  }

  const handleClearAnswerCover = () => {
    setAnswerCover(null)
    if (answerFileRef.current) {
      answerFileRef.current.value = ''
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(handleCreateCard)}>
      <ControlledTextField
        className={s.input}
        control={control}
        disabled={disabled}
        errorMessage={errors.question?.message}
        label={'Question'}
        name={'question'}
        type={'text'}
      />
      <div className={s.input}>
        {questionCover && (
          <div className={s.answerWrapper}>
            <img
              alt={'question'}
              className={s.image}
              src={isDefaultQuestionCover ? questionCover : URL.createObjectURL(questionCover)}
            />
            <IconButton
              className={s.clearCover}
              icon={<TrashBin />}
              onClick={handleClearQuestionCover}
              size={1.5}
              type={'button'}
            >
              clear
            </IconButton>
          </div>
        )}
        <FileUploader
          disabled={disabled}
          name={'questionImg'}
          ref={questionFileRef}
          setFile={setQuestionCover}
          trigger={
            <Button as={'span'} fullWidth icon={<Picture />} variant={'secondary'}>
              Change cover
            </Button>
          }
        />
      </div>

      <ControlledTextField
        className={s.input}
        control={control}
        disabled={disabled}
        errorMessage={errors.answer?.message}
        label={'Answer'}
        name={'answer'}
        type={'text'}
      />

      <div className={s.input}>
        {answerCover && (
          <div className={s.answerWrapper}>
            <img
              alt={'answer'}
              className={s.image}
              src={isDefaultAnswerCover ? answerCover : URL.createObjectURL(answerCover)}
            />
            <IconButton
              className={s.clearCover}
              icon={<TrashBin />}
              onClick={handleClearAnswerCover}
              size={1.5}
              type={'button'}
            >
              clear
            </IconButton>
          </div>
        )}
        <FileUploader
          disabled={disabled}
          name={'answerImg'}
          ref={answerFileRef}
          setFile={setAnswerCover}
          trigger={
            <Button as={'span'} fullWidth icon={<Picture />} variant={'secondary'}>
              Change cover
            </Button>
          }
        />
      </div>

      <div className={s.buttons}>
        <ModalClose>
          <Button disabled={disabled} type={'button'} variant={'secondary'}>
            Cancel
          </Button>
        </ModalClose>
        <Button disabled={disabled} type={'submit'}>
          {submitTitle}
        </Button>
      </div>
    </form>
  )
}
