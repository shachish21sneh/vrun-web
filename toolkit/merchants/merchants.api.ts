import { commonApi } from "../common.api";

export interface MERCHANT {
  id: string;
  business_name: string;
  business_email: string;
  business_phone: string;
  full_address?: string;
  logo?: string;
}

export const merchantsApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getMerchants: build.query<MERCHANT[], void>({
      query: () => ({
        url: "merchant",
        method: "GET",
      }),
      transformResponse: (response: { data: MERCHANT[] }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetMerchantsQuery } = merchantsApi;