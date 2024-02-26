import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Page } from '@/components/ui'
import { SignUpForm } from '@/features/auth'
import { useSignUpMutation } from '@/services/auth/auth.service'
import { SignUpArgs } from '@/services/auth/auth.types'
import { CatchingData, handleErrorResponse } from '@/utils/handleErrorResponse'

export const SignUpPage = () => {
  const [signUp, { isLoading }] = useSignUpMutation()

  const navigate = useNavigate()

  const handleSubmit = async ({ email, password }: SignUpArgs) => {
    return signUp({ email, password }).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success('The account has been created. Try to log in!')
        navigate('/login')
      }
    }) as Promise<CatchingData | null>
  }

  return (
    <Page>
      <SignUpForm isLoading={isLoading} onSubmit={handleSubmit} />
    </Page>
  )
}
