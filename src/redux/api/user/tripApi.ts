// Need to use the React-specific entry point to import createApi
import {  TagTypes } from '@/types/tagTypes'
import { baseApi } from '../baseApe'


// Define a service using a base URL and expected endpoints
export const tripApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTrip: builder.mutation({
      query: (data:any) => {
        return {
           url:"/trips",
           method:"POST",
           data
        }
      },
      invalidatesTags:[TagTypes.trip]
    }),
    getTripByUser: builder.query({
      query: () => {
        return {
           url:"/user/trips",
           method:"GET",
        }
      },
      providesTags:[TagTypes.trip]
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateTripMutation,useGetTripByUserQuery } = tripApi