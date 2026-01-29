export function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="p-8 space-y-8">
            <h1 className="text-3xl font-semibold text-[#0056A0] mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-600">
              <strong>Effective Date:</strong> 14th Jan 2025
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700">
                By using V-RUN Cars, you agree to the following terms and
                conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                2. Eligibility
              </h2>
              <p className="text-gray-700">
                You must be at least 18 years old to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                3. Booking and Payments
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Bookings are confirmed upon receipt of payment.</li>
                <li>Payments must be made via the app or website.</li>
                <li>Prices are inclusive of applicable taxes and fees.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                4. Service Usage
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Ensure your vehicle is ready and accessible at the scheduled
                  time.
                </li>
                <li>
                  Any delays or additional requirements will be communicated
                  promptly.
                </li>
                <li>
                  Report any pre-existing damage before the service starts.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                5. Cancellation Policy
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Full refunds are issued if cancellations are made [insert time
                  frame] prior to the scheduled service.
                </li>
                <li>Late cancellations may incur a cancellation fee.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                6. Liability
              </h2>
              <p className="text-gray-700 mb-2">V-RUN Cars is not liable for:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Personal belongings left in vehicles during service.</li>
                <li>
                  Additional damages due to pre-existing conditions in the
                  vehicle.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                7. Termination
              </h2>
              <p className="text-gray-700">
                We reserve the right to terminate your access for violations of
                these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                8. Dispute Resolution
              </h2>
              <p className="text-gray-700">
                Disputes will be resolved complete assessment of cause of damage
                and inspection by service/repair center.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                9. Compliance with Android and Apple Store Policies
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  We comply with <strong>Google Play Store</strong> and{" "}
                  <strong>Apple App Store</strong> policies regarding service
                  cancellations and refund terms.
                </li>
                <li>
                  Users must be at least 18 years old to book services, as
                  required by both stores.
                </li>
                <li>
                  Payments and refunds will be processed in compliance with the
                  respective store&apos;s payment system policies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                10. Contact Us
              </h2>
              <p className="text-gray-700">
                For any queries, email us at{" "}
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
