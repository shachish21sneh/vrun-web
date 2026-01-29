import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Middleware, isRejectedWithValue } from "@reduxjs/toolkit";

// type RejectedAction = {
//   payload?: {
//     status: number;
//   };
// };

export const commonApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    mode: "cors",
    baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT,
    // prepareHeaders: async (headers) => {
    //   const dynamicJwtToken = getAuthToken();
    //   if (!headers.has('Authorization') && dynamicJwtToken) {
    //     headers.set('Authorization', `Bearer ${dynamicJwtToken}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});

export const commonApiAuthMiddleware: Middleware =
  () => (next) => (action: unknown) => {
    if (isRejectedWithValue(action)) {
      // if ((action as RejectedAction)?.payload?.status === 401) {
      //   const supabase = createClient();
      //   supabase.auth.signOut();
      // }
    }
    return next(action);
  };
