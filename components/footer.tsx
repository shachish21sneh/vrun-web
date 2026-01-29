import Link from "next/link";
import Image from "next/image";
import { AppDownload } from "./app-download";

export function Footer() {
  return (
    <>
      <AppDownload />
      <footer className="bg-[#001A33]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Image
                  src="/vrun-logo.png"
                  alt="V-RUN Logo"
                  width={100}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <div className="space-y-2">
                <Link
                  href="https://x.com/vruncars"
                  className="block text-white hover:text-[#FFD700]"
                >
                  Twitter
                </Link>
                <Link
                  href="https://www.facebook.com/vruncars"
                  className="block text-white hover:text-[#FFD700]"
                >
                  Facebook
                </Link>
                <Link
                  href="https://www.instagram.com/vruncars/"
                  className="block text-white hover:text-[#FFD700]"
                >
                  Instagram
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[#FFD700]">Navigation</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-white hover:text-[#FFD700]">
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className="block text-white hover:text-[#FFD700]"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="block text-white hover:text-[#FFD700]"
                >
                  Our Services
                </Link>
                <Link
                  href="/blogs"
                  className="block text-white hover:text-[#FFD700]"
                >
                  Blogs
                </Link>
                <Link
                  href="/contact-us"
                  className="block text-white hover:text-[#FFD700]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[#FFD700] mb-4">Services</h3>
              <div className="space-y-2">
                <Link
                  href="/services"
                  className="block text-white hover:text-[#FFD700]"
                >
                  Customization
                </Link>
                <Link
                  href="/services"
                  className="block text-white hover:text-[#FFD700]"
                >
                  Repair
                </Link>
                <Link
                  href="/services"
                  className="block text-white hover:text-[#FFD700]"
                >
                  Maintenance
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[#FFD700] mb-4">Legal</h3>
              <div className="space-y-2">
                <Link
                  href="/terms-and-conditions"
                  className="block text-white hover:text-[#FFD700]"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy-policy"
                  className="block text-white hover:text-[#FFD700]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/refund-policy"
                  className="block text-white hover:text-[#FFD700]"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-white">
            2024 Autonomous Ventures Pvt ltd All rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
