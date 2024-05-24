// Need to use the React-specific entry point to import createApi
import {  TagTypes } from '@/types/tagTypes'
import { baseApi } from '../baseApe'


// Define a service using a base URL and expected endpoints
export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => {
        return {
           url:"/profile",
           method:"GET"
        }
      },
      providesTags:[TagTypes.user]
    }),
    getAllUser: builder.query({
      query: () => {
        return {
           url:"/users",
           method:"GET"
        }
      },
      providesTags:[TagTypes.user]
    }),
    updateUserProfile: builder.mutation({
      query: (profileData) => {
        return {
           url:"/profile",
           method:"PUT",
           data:profileData
        }
      },
      invalidatesTags:[TagTypes.user]
    }),
    updateAccountStatus: builder.mutation({
      query: (payload) => {
        return {
           url:`/update-status/${payload.id}`,
           method:"PATCH",
           data:payload.data
        }
      },
      invalidatesTags:[TagTypes.user]
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserProfileQuery,useGetAllUserQuery,useUpdateUserProfileMutation,useUpdateAccountStatusMutation} = userApi