import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASEURL,
  }),
  endpoints: (builder) => ({
    getCurrentData: builder.query({
      query: (args) => {
        const { lat, lon } = args;

        return {
          url: `weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_APIKEY}&units=metric`,
        };
      },
    }),

    getForecastData: builder.query({
      query: (args) => {
        const { lat, lon } = args;

        return {
          url: `forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_APIKEY}&units=metric`,
        };
      },
    }),
  }),
});

export const { useGetForecastDataQuery, useGetCurrentDataQuery } = weatherApi;
