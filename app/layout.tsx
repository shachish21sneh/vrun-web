import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ToolkitProviderWrapper } from "@/providers/toolkit-provider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "V-RUN",
  description: "Discover the Best Sunroof Solutions for Your Car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToolkitProviderWrapper>
          <div className="bg-white">
            <Navigation />
            {children}
            <Toaster />
            <Footer />
          </div>
        </ToolkitProviderWrapper>
      </body>
    </html>
  );
}
