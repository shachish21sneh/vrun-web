import { commonApi } from "../common.api";
export interface TESTIMONIAL {
  id: string;
  review: string;
  rating: number;
  image: string;
  name: string;
  designation: string;
  company: string;
  category: string | null;
  sort_order: number;
  active: boolean;
  created_at: string;
  updated_at: string;
}
export const testimonialsApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getTestimonials: build.query<TESTIMONIAL[], void>({
      query: () => ({
        url: `testimonials`,
        method: "GET",
      }),
      transformResponse: (response: { data: TESTIMONIAL[] }) => {
        return response.data;
      },
    }),
  }),
  overrideExisting: true,
});
