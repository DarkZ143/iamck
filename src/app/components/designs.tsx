"use client";
import React, { useState } from "react";
import Image from "next/image";

const HorizontalDesigns = [
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

// 👇 Vertical (portrait) posters (780x1200)
const VerticalDesigns = [
  {
    image: "/Designs/int1.jpg",
    title: "Online Hotel Booking Poster",
    description: "Modern vertical design for hotel booking promotion.",
    tech: "Figma",
  },
  {
    image: "/Designs/int2.jpg",
    title: "Elegant Home Interior Poster",
    description: "Sleek vertical layout for interior design services.",
    tech: "Figma",
  },
  {
    image: "/Designs/int3.jpg",
    title: "Fruit Collection Poster",
    description: "Vibrant vertical design showcasing fresh fruit collection.",
    tech: "Figma",
  },
  {
    image: "/Designs/int4.jpg",
    title: "Interior Design Ad Poster",
    description: "Stylish vertical layout for interior design services.",
    tech: "Figma",
  },
  {
    image: "/Designs/int5.jpg",
    title: "Interior Design Promotion Poster",
    description: "Modern vertical design for interior design promotion.",
    tech: "Figma",
  },
];

const ProductDesign = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="designs" className="w-full">
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
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-pointer"
          >
            {showMore ? "Show Less Designs" : "Show More Designs"}
          </button>
        </div>

        {/* Collapsible Vertical (Portrait) Designs */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 transition-all duration-700 ease-in-out overflow-hidden ${
            showMore ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {VerticalDesigns.map((design, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg shadow-purple-400 overflow-hidden hover:shadow-2xl hover:shadow-purple-600 transition duration-300 cursor-pointer"
            >
              {/* Fixed 780x1200 size */}
              <div
                className="relative w-full"
                style={{
                  aspectRatio: "780 / 1200",
                  maxWidth: "780px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold">{design.title}</h2>
                <p className="text-gray-600 mt-1">{design.description}</p>
                <p className="text-sm text-gray-500 mt-2">{design.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductDesign;
