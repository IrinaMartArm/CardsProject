import { useState } from 'react'

import { Picture, TrashBin } from '@/components/assets/icons'
import imgReact from '@/components/assets/images/imgReact.png'
import { Button, ControlledTextField, Select } from '@/components/ui'
import { IconButton } from '@/components/ui/IconButton'
import { FileUploader } from '@/components/ui/fileUploader'
import { ModalClose } from '@/components/ui/modals/ModalClose'
import { useActionsCardForm } from '@/features/card/hooks/useActionsCardForm'

import s from './ActionsCardForm.module.scss'

type Props = {
  submitTitle: string
}

const options = [
  { title: 'Text', value: 'text' },
  { title: 'Image', value: 'image' },
]

export const ActionsCardForm = ({ submitTitle }: Props) => {
  const {
    coverOptions: { answerCover, questionCover, setAnswerCover, setQuestionCover },
    formValues: {
      control,
      formState: { errors },
    },
  } = useActionsCardForm()
  const [selectQuestion, setSelectQuestion] = useState(options[0].value)
  const [selectAnswer, setSelectAnswer] = useState(options[0].value)
  const handleChangeSelectQuestion = (value: string) => {
    setSelectQuestion(value)
  }

  const handleChangeSelectAnswer = (value: string) => {
    setSelectAnswer(value)
  }

  return (
    <form className={s.form}>
      <Select
        className={s.input}
        items={options}
        label={'Choose a question format'}
        onChange={handleChangeSelectQuestion}
        value={selectQuestion}
      />
      {selectQuestion === 'text' ? (
        <ControlledTextField
          className={s.input}
          control={control}
          errorMessage={errors.question?.message}
          label={'Question'}
          name={'question'}
          type={'text'}
        />
      ) : (
        <div className={s.input}>
          {questionCover && (
            <div className={s.answerWrapper}>
              <img alt={'question'} className={s.image} src={imgReact} />
              <IconButton className={s.clearCover} icon={<TrashBin />} size={1.5} type={'button'}>
                clear
              </IconButton>
            </div>
          )}
          <FileUploader
            name={'questionImg'}
            setFile={setQuestionCover}
            trigger={
              <Button as={'span'} fullWidth startIcon={<Picture />} variant={'secondary'}>
                Change cover
              </Button>
            }
          />
        </div>
      )}
      <Select
        className={s.input}
        items={options}
        label={'Choose a question format'}
        onChange={handleChangeSelectAnswer}
        value={selectAnswer}
      />
      {selectAnswer === 'text' ? (
        <ControlledTextField
          className={s.input}
          control={control}
          errorMessage={errors.answer?.message}
          label={'Answer'}
          name={'answer'}
          type={'text'}
        />
      ) : (
        <div className={s.input}>
          {answerCover && (
            <div className={s.answerWrapper}>
              <img alt={'answer'} className={s.image} src={imgReact} />
              <IconButton className={s.clearCover} icon={<TrashBin />} size={1.5} type={'button'}>
                clear
              </IconButton>
            </div>
          )}
          <FileUploader
            name={'answerImg'}
            setFile={setAnswerCover}
            trigger={
              <Button as={'span'} fullWidth startIcon={<Picture />} variant={'secondary'}>
                Change cover
              </Button>
            }
          />
        </div>
      )}
      <div className={s.buttons}>
        <ModalClose>
          <Button type={'button'} variant={'secondary'}>
            Cancel
          </Button>
        </ModalClose>
        <Button type={'submit'}>{submitTitle}</Button>
      </div>
    </form>
  )
}
