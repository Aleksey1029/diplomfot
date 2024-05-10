import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apihost, apikey, baseUrl } from './baseUrl'
import { IGetMatchesResponse } from './types'

export const bigAreasApi = createApi({
    reducerPath: 'bigAreasApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: headers => {
            headers.set('X-RapidAPI-Key', apikey)
            headers.set('X-RapidAPI-Host', apihost)
            return headers
        },
    }),
    endpoints: builder => ({
        getCountries: builder.query<any, void>({
            query: () => ({
                url: '/countries',
            }),
        }),
        getallAreasById: builder.query<IGetMatchesResponse, string>({
            query: (_h2h) => ({
                url: `v3/fixtures/headtohead?h2h=33-34`,
            }),
        }),
    }),
})

export const { useGetallAreasByIdQuery, useGetCountriesQuery } = bigAreasApi
