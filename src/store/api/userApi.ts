import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
	type IRegisterUserResponse,
	type IRegisterUserPayload,
	type ILoginUserPayload,
	type ILoginUserResponse,
	type IUserResponse,
	type IUpdatePostPayload,
	IUpdateUserInfoResponse,
} from './types'
import { baseUrl } from './baseUrl'

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		registerUser: builder.mutation<IRegisterUserResponse, IRegisterUserPayload>(
			{
				query: body => ({
					url: 'registration',
					method: 'POST',
					body,
				}),
			}
		),
		loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
			query: body => ({
				url: 'login',
				method: 'POST',
				body,
			}),
		}),
		getUserByID: builder.query<IUserResponse, number>({
			query: user_id => `user?user_id=${user_id}`,
		}),
		updateUserInfo: builder.mutation<
			IUpdateUserInfoResponse,
			IUpdatePostPayload
		>({
			query: body => ({
				url: '',
				method: 'PUT',
				body,
			}),
		}),
	}),
})

export const {
	useRegisterUserMutation,
	useLoginUserMutation,
	useGetUserByIDQuery,
	useUpdateUserInfoMutation,
} = userApi
