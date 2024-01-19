import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Entities"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getEntities: build.query({
      query: () => "general/dashboard",
      providesTags: ["Entities"],
    }),
  }),
});

export const { useGetUserQuery, useGetEntitiesQuery } = api;
