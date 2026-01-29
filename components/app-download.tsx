import Image from "next/image";

export function AppDownload() {
  return (
    <section className="bg-gradient-to-br from-[#2E8BC0] to-[#145DA0] py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#0C2D48] opacity-20"></div>
        <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-[#0C2D48] opacity-20"></div>
        <div className="absolute bottom-10 left-1/4 w-48 h-48 rounded-full bg-[#0C2D48] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Phone mockup */}
          <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[280px] h-[570px] relative">
                {/* Phone outer shell */}
                <div className="absolute inset-0 bg-[#1A1A1A] rounded-[50px] shadow-2xl">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-[#1A1A1A] rounded-b-[20px] z-20"></div>
                  {/* Power button */}
                  <div className="absolute right-[-2px] top-[120px] w-[3px] h-[40px] bg-[#2A2A2A] rounded-l"></div>
                  {/* Volume buttons */}
                  <div className="absolute left-[-2px] top-[100px] w-[3px] h-[30px] bg-[#2A2A2A] rounded-r"></div>
                  <div className="absolute left-[-2px] top-[140px] w-[3px] h-[30px] bg-[#2A2A2A] rounded-r"></div>
                </div>

                {/* Screen content */}
                <div className="absolute inset-[8px] rounded-[42px] overflow-hidden bg-white">
                  <Image
                    src="/app-mockup.png"
                    alt="VRUN App Interface"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text and download buttons */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              For the best experience, download our app
            </h2>
            <p className="text-gray-200 mb-8 max-w-lg">
              Book vehicle services for yourself and your family from the
              comfort of your home. Get the best experience of booking services,
              tracking status, and receiving reports and consultation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Google Play Store */}
              <a
                href="https://play.google.com/store/apps/details?id=com.vrun"
                className="transition-transform hover:scale-105"
                aria-label="Get it on Google Play"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/play.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                  className="h-auto"
                />
              </a>

              {/* Apple App Store */}
              <a
                href="#"
                className="transition-transform hover:scale-105"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/apple.png"
                  alt="Download on the App Store"
                  width={165}
                  height={30}
                  className="h-auto rounded-md"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
