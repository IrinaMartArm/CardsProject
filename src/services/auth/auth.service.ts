import { baseApi } from '@/api/base-api'
import { LoginArgs, SignUpArgs, User, UserArgs } from '@/services/auth/auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createAccount: builder.query<User, any>({
        providesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
      login: builder.mutation<void, LoginArgs>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: `/v1/auth/login`,
        }),
      }),
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(authService.util.updateQueryData('me', _, () => {}))

          try {
            await queryFulfilled
            dispatch(baseApi.util.resetApiState())
          } catch (e) {
            patchResult.undo()
          }
        },
        query: () => ({ method: 'POST', url: '/v1/auth/logout' }),
      }),
      me: builder.query<User, void>({
        providesTags: ['Me'],
        query: () => 'v1/auth/me',
      }),
      recoverPassword: builder.mutation<void, string>({
        query: email => ({
          body: {
            email,
            html: '<h1>Hi, ##name##</h1><p>Click <a href="http://localhost:5173/create-new-password/##token##">here</a> to create new password</p>',
            // subject: 'Recover password',
          },
          method: 'POST',
          url: '/v1/auth/recover-password',
        }),
      }),
      resetPassword: builder.mutation<void, { password: string; token: string }>({
        query: ({ password, token }) => ({
          body: {
            password,
          },
          method: 'POST',
          url: `/v1/auth/reset-password/${token}`,
        }),
      }),
      signUp: builder.mutation<User, SignUpArgs>({
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
      updateAccount: builder.mutation<User, UserArgs>({
        invalidatesTags: ['Me'],
        query: ({ avatar, name }) => {
          const formData = new FormData()

          avatar && formData.append('avatar', avatar)

          name && formData.append('name', name)

          return {
            body: formData,
            method: 'PATCH',
            url: '/v1/auth/me',
          }
        },
      }),
    }
  },
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateAccountMutation,
} = authService
