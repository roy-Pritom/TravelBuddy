// Need to use the React-specific entry point to import createApi
import {  TagTypes } from '@/types/tagTypes'
import { baseApi } from '../baseApe'
import { TMeta } from '@/types'


// Define a service using a base URL and expected endpoints
export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => {
        return {
           url:"/profile",
           method:"GET",
        }
      },
      providesTags:[TagTypes.user]
    }),
    getAllUser: builder.query({
      query: (args) => {
        return {
           url:"/users",
           method:"GET",
           params:args
        }
      },
      transformResponse:(res,meta:TMeta)=>{
        return {
         users:res,
         meta
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
    updateUserRole: builder.mutation({
      query: (payload) => {
        return {
           url:`/update-user-role/${payload.id}`,
           method:"PATCH",
           data:payload.data
        }
      },
      invalidatesTags:[TagTypes.user]
    }),
    changePassword: builder.mutation({
      query: (payload) => {
        return {
           url:'/change-password',
           method:"POST",
           data:payload
        }
      },
      invalidatesTags:[TagTypes.user]
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserProfileQuery,useGetAllUserQuery,useUpdateUserProfileMutation,useUpdateAccountStatusMutation,useUpdateUserRoleMutation,useChangePasswordMutation} = userApi