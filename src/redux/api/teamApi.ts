import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teamApi = createApi({
  reducerPath: "teamApi",
  baseQuery: fetchBaseQuery({ baseUrl: "../../../public/team.json" }), // Change to your API
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: () => "/team",
    }),
  }),
});

export const { useGetTeamQuery } = teamApi;
