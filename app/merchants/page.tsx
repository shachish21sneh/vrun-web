"use client";

import { useGetMerchantsQuery } from "@/toolkit/merchants/merchants.api";

export default function MerchantsPage() {
  const { data, isLoading, error } = useGetMerchantsQuery();

  if (isLoading) {
    return (
      <div className="container mx-auto py-24 text-center">
        Loading merchants...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-24 text-center text-red-500">
        Failed to load merchants
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-10">
        Merchant Partners
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((merchant) => (
          <div
            key={merchant.id}
            className="bg-white border rounded-xl p-5 shadow-sm"
          >
            <h3 className="font-bold text-lg mb-2">
              {merchant.business_name}
            </h3>

            <p className="text-sm">
              {merchant.business_phone}
            </p>

            <p className="text-sm text-gray-600 mt-2">
              {merchant.business_email}
            </p>

            <p className="text-sm text-gray-500 mt-3">
              {merchant.full_address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}