import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { answerVariants } from '@/App'
import { Button, CardBox, ControlledRadioGroup, Typography } from '@/components/ui'
import { useGetQuestionQuery, useSaveTheGradeMutation } from '@/services/decks/decks.service'
import { gradeSchema } from '@/utils/Validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './learn.module.scss'

type Props = {
  id: string
  name?: string
}

type FormValues = z.infer<typeof gradeSchema>

export const Learn = ({ id, name }: Props) => {
  const [open, setOpen] = useState(false)
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(gradeSchema),
  })

  const { data } = useGetQuestionQuery({ id })
  const [SaveTheGrade] = useSaveTheGradeMutation()

  const setOpenHandler = () => {
    setOpen(!open)
  }

  const submitHandler = (value: FormValues) => {
    console.log(value)
    debugger
    SaveTheGrade({ grade: +value, id: id })
  }

  // const submitHandler = (value: FormValues) => {
  //   debugger
  //   SaveTheGrade({ grade: +value, id: id })
  //   setOpen(false)
  // }

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
            <Button fullWidth onClick={setOpenHandler} type={'button'}>
              Show Answer
            </Button>
            <Button as={Link} fullWidth to={'/'} type={'button'} variant={'secondary'}>
              End study session
            </Button>
          </>
        )}
        {open && (
          <div className={s.wrapper}>
            <div className={s.question}>
              <Typography variant={'subtitle1'}>Answer:</Typography>
              <Typography variant={'body1'}>{data?.answer}</Typography>
            </div>
            <img alt={''} src={data?.answerImg || ''} width={100} />
            <form onSubmit={() => handleSubmit(submitHandler)}>
              <div className={s.radioBlock}>
                <Typography className={s.rate} variant={'subtitle1'}>
                  Rate yourself:
                </Typography>

                <ControlledRadioGroup control={control} name={'grade'} options={answerVariants} />
              </div>
              <Button fullWidth type={'submit'}>
                Next Question
              </Button>
              {/*<Button*/}
              {/*  as={Link}*/}
              {/*  fullWidth*/}
              {/*  // onClick={setOpenHandler}*/}
              {/*  to={'/'}*/}
              {/*  type={'submit'}*/}
              {/*  variant={'secondary'}*/}
              {/*>*/}
              {/*  End study session*/}
              {/*</Button>*/}
            </form>
          </div>
        )}
      </div>
    </CardBox>
  )
}
