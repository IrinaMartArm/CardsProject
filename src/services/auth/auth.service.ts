import { baseApi } from '@/api/base-api'
import { LoginArgs, User } from '@/services/auth/auth.types'

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
    }
  },
})
export const { useLoginMutation, useLogoutMutation, useMeQuery } = authService
