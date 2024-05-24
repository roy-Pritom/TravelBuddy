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
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTravelRequestsByUserQuery } = travelApi