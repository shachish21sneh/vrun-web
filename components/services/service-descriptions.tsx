import Image from "next/image";

const services = [
  {
    title: "Sunroof Customization",
    description:
      "Transform your vehicle with our expert sunroof installation service. We offer a wide range of sunroof styles and sizes to fit your car perfectly. Our certified technicians ensure a seamless integration that enhances both the aesthetics and functionality of your vehicle.",
    image: "/services1.webp",
  },
  {
    title: "Repair and Maintenance",
    description:
      "Keep your sunroof in top condition with our comprehensive repair and maintenance services. From fixing leaks and noise issues to replacing worn-out components, our team has the expertise to handle all sunroof-related problems, ensuring smooth operation and longevity.",
    image: "/services2.webp",
  },
  {
    title: "Sunroof Glass Replacement",
    description:
      "Accidents happen, but they don't have to ruin your sunroof experience. Our sunroof glass replacement service uses high-quality, perfectly fitted glass to restore your sunroof to its original condition, maintaining the integrity and safety of your vehicle.",
    image: "/blogs2.webp",
  },
  {
    title: "Sunroof Cleaning and Detailing",
    description:
      "Enhance the appearance and functionality of your sunroof with our specialized cleaning and detailing service. We use professional-grade products and techniques to remove dirt, grime, and stains, leaving your sunroof spotless and operating smoothly.",
    image: "/services4.webp",
  },
];

export function ServiceDescriptions() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center mb-20 last:mb-0`}
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:px-8">
              <h3 className="text-2xl font-bold mb-4 text-[#0056A0]">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
