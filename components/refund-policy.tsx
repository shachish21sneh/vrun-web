export function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="p-8 space-y-8">
            <h1 className="text-3xl font-semibold text-[#0056A0] mb-4">
              Refund Policy
            </h1>
            <p className="text-gray-600">
              <strong>Effective Date:</strong> 14th Jan 2025
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                1. General Policy
              </h2>
              <p className="text-gray-700">
                We aim to ensure a seamless service experience. Refunds will be
                issued under the following conditions:
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                2. Eligible Refunds
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Full refunds for cancellations made at least 24 hours before
                  the scheduled service.
                </li>
                <li>
                  Partial refunds for cancellations made within 24 hours of the
                  scheduled service, subject to a cancellation fee of 20% of the
                  service cost.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                3. Non-Refundable Items
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Bookings canceled after the service has started.</li>
                <li>
                  Penalties for damages or additional costs arising from vehicle
                  issues unrelated to our service.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                4. Refund Process
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Refund requests should be submitted via the app or website.
                </li>
                <li>
                  Refunds will be processed within 7-10 business days to the
                  original payment method.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                5. Compliance with Android and Apple Store Policies
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Google Play Store</strong> requires that in-app
                  purchases comply with their refund policies, where users can
                  request refunds directly through the Google Play Store.
                </li>
                <li>
                  <strong>Apple App Store</strong> follows similar policies,
                  where users can request refunds through the App Store for any
                  purchase-related issues.
                </li>
                <li>
                  For any refunds processed outside the store, we will handle
                  the process in accordance with store guidelines.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                6. Contact Us
              </h2>
              <p className="text-gray-700">
                For refund inquiries, email us at{" "}
                <a
                  href="mailto:support@vruncars.com"
                  className="text-[#0056A0] hover:underline"
                >
                  support@vruncars.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
