export function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 space-y-8">
            <h1 className="text-3xl font-semibold text-[#0056A0] mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              <strong>Effective Date:</strong> 14th Jan 2025
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                Introduction
              </h2>
              <p className="text-gray-700">
                Welcome to VRUN Carz, a service provided by Autonomous Ventures.
                We respect your privacy and are committed to safeguarding your
                personal data. This Privacy Policy explains how we collect, use,
                and protect your information when you use our website or mobile
                app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Personal Information</strong>: Name, email address,
                  phone number, payment details when you register or book a
                  service.
                </li>
                <li>
                  <strong>Device Information</strong>: Device type, operating
                  system, IP address, app usage data.
                </li>
                <li>
                  <strong>Location Data</strong>: For providing location-based
                  services such as sunroof installation and repair.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To facilitate booking and service scheduling.</li>
                <li>To process payments securely.</li>
                <li>To offer customer support.</li>
                <li>To send service notifications and updates.</li>
                <li>To improve our services and app performance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                3. Data Sharing
              </h2>
              <p className="text-gray-700 mb-2">
                We do not sell your personal data. However, we may share your
                information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Payment processors for transaction processing.</li>
                <li>Government authorities when required by law.</li>
                <li>
                  Service providers that assist in operating and improving our
                  services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-700">
                We implement industry-standard security measures to protect your
                data. However, no system is entirely secure. Use our services at
                your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                5. Your Rights
              </h2>
              <p className="text-gray-700 mb-2">You can:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Access or update your personal data via your account settings.
                </li>
                <li>
                  Request data deletion by contacting us at [Contact Email].
                </li>
                <li>Opt out of marketing communications at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                6. Compliance with Android and Apple Store Policies
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  We comply with the <strong>Google Play Store</strong> and{" "}
                  <strong>Apple App Store</strong> privacy policies, ensuring
                  transparent collection, usage, and sharing of personal data.
                </li>
                <li>
                  <strong>Google Play Store</strong> requires apps to adhere to
                  their{" "}
                  <a
                    href="https://support.google.com/googleplay/android-developer/answer/113469"
                    className="text-[#0056A0] hover:underline"
                  >
                    User Data Policy
                  </a>{" "}
                  and obtain user consent for data collection.
                </li>
                <li>
                  <strong>Apple App Store</strong> requires apps to disclose
                  their data practices via{" "}
                  <a
                    href="https://developer.apple.com/app-store/app-privacy-details/"
                    className="text-[#0056A0] hover:underline"
                  >
                    App Privacy Details
                  </a>
                  . We ensure that all data practices are clearly communicated
                  to users.
                </li>
                <li>
                  Users can manage their privacy settings in the app, including
                  opting out of data collection where applicable.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                7. Changes to This Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, effective from the date of posting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0056A0] mb-4">
                8. Contact Us
              </h2>
              <p className="text-gray-700 mb-2">
                If you have questions, contact us at:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <a
                    href="mailto:support@vruncars.com"
                    className="text-[#0056A0] hover:underline"
                  >
                    support@vruncars.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:operations@vruncars.com"
                    className="text-[#0056A0] hover:underline"
                  >
                    operations@vruncars.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
