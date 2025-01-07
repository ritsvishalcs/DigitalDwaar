import { useState, useEffect } from "react";
import { Element } from "react-scroll";

interface DesignOption {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  selected: boolean;
}

const designOptions: DesignOption[] = [
  {
    id: 1,
    name: "Eye-Catching Visuals",
    description:
      "Create stunning graphics that grab attention and tell your brand story.",
    imageUrl: "/images/paint.jpg",
    selected: false,
  },
  {
    id: 2,
    name: "Social Media Graphics",
    description:
      "Design engaging visuals for your social media platforms to boost engagement.",
    imageUrl: "/images/social.jpg",
    selected: false,
  },
  {
    id: 3,
    name: "Email Marketing Design",
    description:
      "Craft compelling email designs that convert leads into customers.",
    imageUrl: "/images/email.jpg",
    selected: false,
  },
  {
    id: 4,
    name: "Website Banner Design",
    description:
      "Design professional website banners to showcase your offerings.",
    imageUrl: "/images/banner.png",
    selected: false,
  },
  {
    id: 5,
    name: "Instagram Banner Design",
    description:
      "Design professional website banners to showcase your offerings.",
    imageUrl: "/images/instagram.png",
    selected: false,
  },
  {
    id: 6,
    name: "facbook ad Design",
    description:
      "Design professional website banners to showcase your offerings.",
    imageUrl: "/images/fb.png",
    selected: false,
  },
];

function DesignSection() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
    // Handle initial selection (optional)
    // setSelectedOption(1);
  }, []);

  const handleOptionClick = (id: number) => {
    setSelectedOption(id);
  };

  return (
    <Element name="graphic design">
      <section className="py-20">
        <h3
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-p4 leading-snug"
        >
          Graphic Design for Digital Marketing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designOptions.map((option) => (
            <div
              key={option.id}
              className={`border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-200 ease-in-out ${
                selectedOption === option.id ? "shadow-lg" : ""
              }`}
              onClick={() => handleOptionClick(option.id)}
            >
              <img
                src={option.imageUrl}
                alt={option.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="max-w-400 mb-7 h5 text-p4 max-md:mb-6 max-md:h5">{option.name}</h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
}

export default DesignSection;
