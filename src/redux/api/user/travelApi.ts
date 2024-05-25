// Need to use the React-specific entry point to import createApi
import {  TagTypes } from '@/types/tagTypes'
import { baseApi } from '../baseApe'


// Define a service using a base URL and expected endpoints
export const travelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
 
    getTravelRequestsByUser: builder.query({
      query: () => {
        return {
           url:"/travel-requests",
           method:"GET",
        }
      },
      providesTags:[TagTypes.travel]
    }),
    getAllTravelBuddyRequests: builder.query({
      query: () => {
        return {
           url:"/buddy-requests",
           method:"GET",
        }
      },
      providesTags:[TagTypes.travel]
    }),
    sendTravelBuddyRequest: builder.mutation({
      query: (data:any) => {
        return {
           url:`/trip/${data?.tripId}/request`,
           method:"POST",
           data:data.data
        }
      },
      invalidatesTags:[TagTypes.travel]
    }),
    getReceiveTravelBuddyRequestsByUser: builder.query({
      query: () => {
        return {
           url:`/receive-buddy-requests`,
           method:"GET"
        }
      },
      providesTags:[TagTypes.travel]
    }),
    responseToBuddyRequest: builder.mutation({
      query: (data:any) => {
        return {
           url:`/travel-buddies/${data.senderId}/respond`,
           method:"PUT",
           data:data.data
        }
      },
      invalidatesTags:[TagTypes.travel]
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTravelRequestsByUserQuery, useGetAllTravelBuddyRequestsQuery,useSendTravelBuddyRequestMutation,useGetReceiveTravelBuddyRequestsByUserQuery,useResponseToBuddyRequestMutation} = travelApi