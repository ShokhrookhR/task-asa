import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const pizzaApi = createApi({
	reducerPath:'pizza/api',
	baseQuery:fetchBaseQuery({
		baseUrl:'https://62deabb69c47ff309e797094.mockapi.io/items'
	}),
	refetchOnFocus:true,
	endpoints:build=>({
		getItems:build.query({
			query:(page)=>({
				url:'',
				params:{
					page,
					limit:8,
					
					
				}
			}),
			transformResponse:(response)=>response
		}),
		searchItems:build.query({
			query:(search)=>({
				url:'',
				params:{
					search
					
					
				}
			}),
			transformResponse:(response)=>response
		}),
		getOneItem:build.query({
			query:(id)=>({
				url:'',
				params:{
					id,
					
					
				}
			}),
			transformResponse:(response)=>response[0]
		}),
		getItemsByCategory:build.query({
			query:(category)=>({
				url:'',
				params:{
					category,
					
					
				}
			}),
		}),
	})
})
export const {useGetItemsQuery,useSearchItemsQuery,useGetOneItemQuery,useLazyGetItemsByCategoryQuery}=pizzaApi


