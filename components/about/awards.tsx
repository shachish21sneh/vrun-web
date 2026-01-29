import { Card, CardContent } from "@/components/ui/card";
import { TrophyIcon } from "@heroicons/react/24/outline";

export function Awards() {
  const awards = [
    {
      title: "Best Automotive Service Provider 2023",
      organization: "Auto Excellence Awards",
    },
    {
      title: "Innovation in Customer Service",
      organization: "India Business Awards",
    },
    {
      title: "Top Sunroof Specialist",
      organization: "Car Modification Association",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Awards & Recognition
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <Card key={index}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <TrophyIcon className="w-12 h-12 text-[#FFD700] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.organization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
