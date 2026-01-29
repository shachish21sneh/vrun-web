/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { PersonalInfo } from "@/components/register/personal-info";
import { CarSelection } from "@/components/register/car-selection";
import { CarDetails } from "@/components/register/car-details";
import RegistrationLayout from "@/components/register/registration-layout";
import { Card, CardContent } from "@/components/ui/card";

type FormData = {
  personalInfo: {
    fullname: string;
    phone: string;
    email: string;
    address: string;
    termsAccepted: boolean;
  };
  carInfo: {
    registrationType: "registration" | "manual" | null;
    registrationNumber?: string;
  };
  carDetails: {
    brand: string;
    model: string;
    manufacturingDate: string;
  };
};

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      fullname: "",
      phone: "",
      email: "",
      address: "",
      termsAccepted: false,
    },
    carInfo: {
      registrationType: null,
    },
    carDetails: {
      brand: "",
      model: "",
      manufacturingDate: "",
    },
  });

  const updateFormData = (section: keyof FormData, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="p-4 pt-20 md:py-16 md:pt-28 md:px-36">
      <Card className="group overflow-hidden border-none">
        <CardContent className="p-0">
          <RegistrationLayout
            currentStep={step}
            onBack={step > 1 ? prevStep : undefined}
          >
            {step === 1 && (
              <PersonalInfo
                data={formData.personalInfo}
                onUpdate={(data) => updateFormData("personalInfo", data)}
                onNext={nextStep}
              />
            )}
            {step === 2 && (
              <CarSelection
                data={formData.carInfo}
                onUpdate={(data) => updateFormData("carInfo", data)}
                onNext={nextStep}
              />
            )}
            {step === 3 && (
              <CarDetails
                data={formData.carDetails}
                onUpdate={(data) => updateFormData("carDetails", data)}
                onSubmit={() => console.log("Form submitted:", formData)}
              />
            )}
          </RegistrationLayout>
        </CardContent>
      </Card>
    </div>
  );
}
