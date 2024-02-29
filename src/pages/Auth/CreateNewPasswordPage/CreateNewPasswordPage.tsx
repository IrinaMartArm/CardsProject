import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Page } from '@/components/ui'
import { CreateNewPasswordForm } from '@/features/auth'
import { CreateNewPasswordFormValues } from '@/features/auth/hooks/useCreateNewPasswordForm'
import { useResetPasswordMutation } from '@/services/auth/auth.service'
import { handleErrorResponse } from '@/utils/handleErrorResponse'

export const CreateNewPasswordPage = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation()

  const navigate = useNavigate()

  const { token } = useParams<{ token: string }>()

  const handleLoginSubmit = async ({ password }: CreateNewPasswordFormValues) => {
    if (!token) {
      return
    }

    return resetPassword({ password, token }).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success(`A new password has been created`)
        navigate('/login')
      }
    })
  }

  return (
    <Page>
      <CreateNewPasswordForm isLoading={isLoading} onSubmit={handleLoginSubmit} />
    </Page>
  )
}
