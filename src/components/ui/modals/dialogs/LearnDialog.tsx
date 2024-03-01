import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'

import { answerVariants } from '@/App'
import { Button, CardBox, ControlledRadioGroup, Modal, Typography } from '@/components/ui'
import { useGetQuestionQuery, useSaveTheGradeMutation } from '@/services/decks/decks.service'

import s from '../Modals.module.scss'

type Props = {
  id: string
  name?: string
  trigger: ReactNode
}
export const LearnDialog = ({ id, name, trigger }: Props) => {
  const [open, setOpen] = useState(false)
  const { control, handleSubmit } = useForm()
  const { data } = useGetQuestionQuery({ id })
  const [] = useSaveTheGradeMutation()

  const showAnswerHandler = () => {
    setOpen(true)
  }
  const nextQuestionHandler = () => {
    setOpen(false)
  }
  const submitHandler = () => {
    handleSubmit(data => {})
  }

  return (
    <Modal trigger={trigger}>
      <CardBox>
        <div className={s.learnRoot}>
          <Typography variant={'h1'}>Learn {name}</Typography>
          <div className={s.question}>
            <Typography variant={'subtitle1'}>Question:</Typography>
            <Typography variant={'body1'}>{data?.question}</Typography>
          </div>
          <img alt={''} src={data?.questionImg} width={100} />
          <Typography className={s.text} variant={'body2'}>
            Количество попыток ответов на вопрос: 10
          </Typography>
          {!open && (
            <Button fullWidth onClick={showAnswerHandler}>
              Show Answer
            </Button>
          )}
          {open && (
            <form className={s.wrapper} onSubmit={submitHandler}>
              <div className={s.question}>
                <Typography variant={'subtitle1'}>Answer:</Typography>
                <Typography variant={'body1'}>{data?.answer}</Typography>
              </div>
              <img alt={''} src={data?.answerImg} width={100} />
              <div className={s.radioBlock}>
                <Typography className={s.rate} variant={'subtitle1'}>
                  Rate yourself:
                </Typography>
                <ControlledRadioGroup
                  control={control}
                  name={'answers'}
                  variants={answerVariants}
                />
              </div>

              <Button fullWidth onClick={nextQuestionHandler}>
                Next Question
              </Button>
            </form>
          )}
        </div>
      </CardBox>
    </Modal>
  )
}
