import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { answerVariants } from '@/App'
import { Button, CardBox, ControlledRadioGroup, Typography } from '@/components/ui'
import { useGetQuestionQuery, useSaveTheGradeMutation } from '@/services/decks/decks.service'

import s from './learn.module.scss'

type Props = {
  id: string
  name?: string
}

export const Learn = ({ id, name }: Props) => {
  const [open, setOpen] = useState(false)
  const { control, handleSubmit } = useForm()
  const { data } = useGetQuestionQuery({ id })
  const [] = useSaveTheGradeMutation()
  const navigate = useNavigate()

  const setOpenHandler = () => {
    setOpen(true)
  }
  const nextQuestionHandler = () => {
    setOpen(false)
  }
  const submitHandler = () => {}

  return (
    <CardBox>
      <div className={s.learnRoot}>
        <Typography variant={'h1'}>Learn {name}</Typography>
        <div className={s.question}>
          <Typography variant={'subtitle1'}>Question:</Typography>
          <Typography variant={'body1'}>{data?.question}</Typography>
        </div>
        <img alt={''} src={data?.questionImg || ''} width={100} />
        <Typography className={s.text} variant={'body2'}>
          Количество попыток ответов на вопрос: 10
        </Typography>
        {!open && (
          <>
            <Button fullWidth onClick={setOpenHandler}>
              Show Answer
            </Button>
            {/*<Button fullWidth onClick={navigate('/')} variant={'secondary'}>*/}
            {/*  End study session*/}
            {/*</Button>*/}
          </>
        )}
        {open && (
          <form className={s.wrapper} onSubmit={handleSubmit(submitHandler)}>
            <div className={s.question}>
              <Typography variant={'subtitle1'}>Answer:</Typography>
              <Typography variant={'body1'}>{data?.answer}</Typography>
            </div>
            <img alt={''} src={data?.answerImg || ''} width={100} />
            <div className={s.radioBlock}>
              <Typography className={s.rate} variant={'subtitle1'}>
                Rate yourself:
              </Typography>
              <ControlledRadioGroup control={control} name={'grade'} variants={answerVariants} />
            </div>

            <Button fullWidth onClick={nextQuestionHandler} type={'button'}>
              Next Question
            </Button>
            <Button fullWidth onClick={navigate('/')} type={'submit'} variant={'secondary'}>
              End study session
            </Button>
          </form>
        )}
      </div>
    </CardBox>
  )
}
