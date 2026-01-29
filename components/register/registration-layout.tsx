import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RegistrationLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  onBack?: () => void;
}

export default function RegistrationLayout({
  children,
  currentStep,
  onBack,
}: RegistrationLayoutProps) {
  return (
    <div className="flex">
      {/* Left Panel */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#0056A0] to-blue-700 p-12 flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to V-RUN
          </h1>
          <p className="text-xl text-white/90">
            Effortless Management of your car sunroof
          </p>
        </div>

        {/* Decorative waves pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" fill="white">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z;
                        M0,100 C150,0 350,200 500,100 L500,00 L0,0 Z;
                        M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
              />
            </path>
          </svg>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Seamless Collaboration
          </h2>
          <p className="text-xl text-white/90">
            Effortlessly work together with your
            <br />
            team in real-time.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1">
        <div className="max-w-xl mx-auto p-8">
          <div className="flex items-center justify-between mb-8">
            {onBack ? (
              <Button variant="ghost" className="text-white" onClick={onBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            ) : (
              <div /> // Empty div for spacing
            )}
            <div className="text-sm">
              <span className="text-blue-500">
                STEP {currentStep.toString().padStart(2, "0")}
              </span>
              <span className="text-gray-400">/03</span>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
