import { useState } from 'react'
import { toast } from 'react-toastify'

import { Page } from '@/components/ui'
import { CheckEmailForm, ForgotPasswordForm } from '@/features/auth'
import { ForgotPasswordFormData } from '@/features/auth/hooks/useForgotPasswordForm'
import { useRecoverPasswordMutation } from '@/services/auth/auth.service'
import { handleErrorResponse } from '@/utils/handleErrorResponse'

export const ForgotPasswordPage = () => {
  const [recoverPassword, { isLoading, isSuccess }] = useRecoverPasswordMutation()

  const [email, setEmail] = useState('')

  const handleLoginSubmit = async ({ email }: ForgotPasswordFormData) => {
    return recoverPassword(email).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success(`Instructions are sent by email ${email}`)
        setEmail(email)
      }
    })
  }

  return (
    <Page>
      {isSuccess ? (
        <CheckEmailForm email={email} />
      ) : (
        <ForgotPasswordForm isLoading={isLoading} onSubmit={handleLoginSubmit} />
      )}
    </Page>
  )
}
