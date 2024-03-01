import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { answerVariants } from '@/App'
import { Button, CardBox, ControlledRadioGroup, Typography } from '@/components/ui'
import { Card } from '@/services/decks/decks.types'

import s from '../Modals.module.scss'

type Props = {
  card?: Card
  name?: string
}
export const LearnDialog = ({ card, name }: Props) => {
  const [open, setOpen] = useState(false)
  const { control, handleSubmit } = useForm()

  const showAnswerHandler = () => {
    setOpen(true)
  }
  const nextQuestionHandler = () => {
    setOpen(false)
  }

  return (
    <CardBox>
      <div className={s.learnRoot}>
        <Typography variant={'h1'}>Learn {name}</Typography>
        <div className={s.question}>
          <Typography variant={'subtitle1'}>Question:</Typography>
          <Typography variant={'body1'}>{card?.question}</Typography>
        </div>
        <img alt={''} src={card?.questionImg} />
        <Typography className={s.text} variant={'body2'}>
          Количество попыток ответов на вопрос: 10
        </Typography>
        {!open && (
          <Button fullWidth onClick={showAnswerHandler}>
            Show Answer
          </Button>
        )}
        {open && (
          <div className={s.wrapper}>
            <div className={s.question}>
              <Typography variant={'subtitle1'}>Answer:</Typography>
              <Typography variant={'body1'}>{card?.answer}</Typography>
            </div>
            <img alt={''} src={card?.answerImg} />
            <div className={s.radioBlock}>
              <Typography className={s.rate} variant={'subtitle1'}>
                Rate yourself:
              </Typography>
              <ControlledRadioGroup control={control} name={'answers'} variants={answerVariants} />
            </div>

            <Button fullWidth onClick={nextQuestionHandler}>
              Next Question
            </Button>
          </div>
        )}
      </div>
    </CardBox>
  )
}
