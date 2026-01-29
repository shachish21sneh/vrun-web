import { commonApi } from "../common.api";

export interface CAR_BRAND {
  id: string;
  name: string;
  display_name: string;
  icon: string | null;
  sort_order: number;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export const carBrandsApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getCarBrands: build.query<CAR_BRAND[], void>({
      query: () => ({
        url: `master-car-brands`,
        method: "GET",
      }),
      transformResponse: (response: { data: CAR_BRAND[] }) => {
        return response.data;
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetCarBrandsQuery } = carBrandsApi;
