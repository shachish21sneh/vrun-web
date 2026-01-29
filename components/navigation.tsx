"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/vrun-logo.png"
              alt="VRUN Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-gray-600 hover:text-[#0056A0] ${
                isActive("/") ? "!text-[#0056A0] font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`text-gray-600 hover:text-[#0056A0] ${
                isActive("/about-us") ? "!text-[#0056A0] font-semibold" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`text-gray-600 hover:text-[#0056A0] ${
                isActive("/services") ? "!text-[#0056A0] font-semibold" : ""
              }`}
            >
              Our Services
            </Link>
            <Link
              href="/blogs"
              className={`text-gray-600 hover:text-[#0056A0] ${
                isActive("/blogs") ? "!text-[#0056A0] font-semibold" : ""
              }`}
            >
              Blogs
            </Link>
            <Link
              href="/contact-us"
              className={`text-gray-600 hover:text-[#0056A0] ${
                isActive("/contact-us") ? "!text-[#0056A0] font-semibold" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* <Button variant="ghost" className="text-[#0056A0]">
              Login
            </Button> */}
            <Link
              href={"https://play.google.com/store/apps/details?id=com.vrun"}
              target="_blank"
            >
              <Button className="bg-[#0056A0] text-white hover:bg-[#0056A0]/90">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
