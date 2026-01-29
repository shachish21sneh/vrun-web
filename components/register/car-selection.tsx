/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ChevronRight } from "lucide-react";

interface CarSelectionProps {
  data: {
    registrationType: "registration" | "manual" | null;
    registrationNumber?: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
}

export function CarSelection({ onUpdate, onNext }: CarSelectionProps) {
  const handleSelection = (type: "registration" | "manual") => {
    onUpdate({ registrationType: type });
    onNext();
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">Add car details</h2>

      <div className="space-y-4">
        <button
          onClick={() => handleSelection("registration")}
          className="w-full p-6 bg-[#0056A0] hover:bg-gray-800 rounded-lg text-left transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-white mb-1">
                Vehicle Registration Number
              </h3>
              <p className="text-gray-400 text-sm">
                Personal account to manage all you activities.
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
        </button>

        <button
          onClick={() => handleSelection("manual")}
          className="w-full p-6 bg-[#0056A0] hover:bg-gray-800 rounded-lg text-left transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-white mb-1">
                Add Car Manually
              </h3>
              <p className="text-gray-400 text-sm">
                Personal account to manage all you activities.
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </div>
        </button>
      </div>
    </div>
  );
}
