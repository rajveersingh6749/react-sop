import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),

  tagTypes: ['Posts'],

  endpoints: (builder) => ({
    // GET POSTS
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: ['Posts'],
    }),

    // DELETE POST
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
})

export const { useGetPostsQuery, useDeletePostMutation } = postsApi
