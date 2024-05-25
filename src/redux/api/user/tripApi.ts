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
    updateTrip: builder.mutation({
      query: (tripData:any) => {
        return {
           url:`/update-trip/${tripData.tripId}`,
           method:"PATCH",
           data:tripData.data
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
    getAllTrips: builder.query({
      query: () => {
        return {
           url:"/trips",
           method:"GET",
        }
      },
      providesTags:[TagTypes.trip]
    }),
    getTripById: builder.query({
      query: (id:string | undefined) => {
        return {
           url:`/trip/${id}`,
           method:"GET",
        }
      },
      providesTags:[TagTypes.trip]
    }),
    deleteTrip: builder.mutation({
      query: (tripId:string | undefined) => {
        return {
           url:`/trip/soft-delete/${tripId}`,
           method:"DELETE",
        }
      },
      invalidatesTags:[TagTypes.trip]
    }),
    getDeletedTrips: builder.query({
      query: () => {
        return {
           url:`/deleted-trips`,
           method:"GET",
        }
      },
      providesTags:[TagTypes.trip]
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateTripMutation,useUpdateTripMutation,useGetTripByUserQuery,useGetAllTripsQuery,useGetTripByIdQuery,useDeleteTripMutation, useGetDeletedTripsQuery} = tripApi