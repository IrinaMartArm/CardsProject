import { baseApi } from '@/api/base-api'
import { LoginArgs, SignUpArgs, User } from '@/services/auth/auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createAccount: builder.query({
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
      me: builder.query<User, void>({
        providesTags: ['Me'],
        query: () => 'v1/auth/me',
      }),
      signUp: builder.mutation<User, SignUpArgs>({
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
    }
  },
})
export const { useLoginMutation, useMeQuery, useSignUpMutation } = authService
