import { commonApi } from "../common.api";
export interface FAQ {
  id: string;
  title: string;
  content: string;
  category: string | null;
  sort_order: number;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export const faqApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getFAQs: build.query<FAQ[], void>({
      query: () => ({
        url: `faqs`,
        method: "GET",
      }),
      transformResponse: (response: { data: FAQ[] }) => {
        return response.data;
      },
    }),
  }),
  overrideExisting: true,
});
