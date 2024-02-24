import { toast } from 'react-toastify'

import { Page } from '@/components/ui'
import { SignInForm } from '@/features/auth'
import { useLoginMutation } from '@/services/auth/auth.service'
import { LoginArgs } from '@/services/auth/auth.types'

export const SignInPage = () => {
  const [login, { isLoading }] = useLoginMutation()

  const handleLoginSubmit = async (data: LoginArgs) => {
    try {
      await login(data).unwrap()
    } catch (error: any) {
      toast.error(error?.data?.message ?? 'Could not sign in')
    }
  }

  return (
    <Page>
      <SignInForm isLoading={isLoading} onSubmit={handleLoginSubmit} />
    </Page>
  )
}
