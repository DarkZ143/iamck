"use client";
import React, { useState } from "react"; // 1. Import useState
import Image from "next/image";
import Link from "next/link";
import AnimatedLoader from "@/app/components/AnimatedLoader"; // 2. Import your loader

// Horizontal (landscape) posters
const HorizontalDesigns = [
  // ... your design objects are here ...
  {
    image: "/Designs/ParadiseCollections.png",
    title: "Paradise Collections Poster",
    description:
      "Vibrant poster design for Paradise Collections showcasing tropical vibes.",
    tech: "Figma | Photoshop",
  },
  {
    image: "/Designs/Gucci.png",
    title: "Gucci Man Collections Poster",
    description:
      "Sleek Gucci poster design highlighting modern fashion and elegance.",
    tech: "Figma | Photoshop",
  },
  {
    image: "/Designs/Apple.png",
    title: "Apple iPhone Collections Poster",
    description:
      "Sleek Apple iPhone poster design highlighting modern tech and elegance.",
    tech: "Figma | Photoshop",
  },
  {
    image: "/Designs/GreenTeaCream.png",
    title: "Green Tea Cream Poster",
    description:
      "Eco-friendly cream product design with green theme and discount offer highlight.",
    tech: "Figma | Photoshop",
  },
  {
    image: "/Designs/AudixFeel.png",
    title: "AudixFeel Headphones Poster",
    description:
      "Sleek headphones poster design with modern tech vibe and discount highlight.",
    tech: "Figma | Photoshop",
  },
  {
    image: "/Designs/Fogg.png",
    title: "Fogg Perfume Poster",
    description:
      "Elegant perfume product poster design with luxurious theme and discount highlight.",
    tech: "Figma | Photoshop",
  },
];

const ProductDesign = () => {
  // 3. Add loading state
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div id="designs" className="w-full">
      {/* 5. Conditionally render the loader */}
      {isLoading && <AnimatedLoader />}

      <main className="p-10 sm:p-20">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent leading-relaxed">
            My Visual Designs
          </h1>
        </div>

        {/* Horizontal Designs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ease-in-out">
          {HorizontalDesigns.map((design, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg shadow-blue-400 overflow-hidden hover:shadow-2xl hover:shadow-blue-600 transition duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold">{design.title}</h2>
                <p className="text-gray-600 mt-2">{design.description}</p>
                <p className="text-sm text-gray-500 mt-2">{design.tech}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/more-designs"
            // 4. Add onClick handler to trigger the loader
            onClick={() => setIsLoading(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-pointer"
          >
            Show More Designs
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProductDesign;