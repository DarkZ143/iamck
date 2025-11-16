"use client"; // 1. Add "use client" to use state
import React, { useState } from "react"; // 2. Import useState
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import AnimatedLoader from "@/app/components/AnimatedLoader"; // 3. Import the loader

// 👇 Vertical (portrait) posters (780x1200)
const VerticalDesigns = [
    // ... your designs array ...
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
    {
        image: "/Designs/int6.jpg",
        title: "Jwelry Collection Poster",
        description: "Modern vertical design showcasing elegant jewelry collection.",
        tech: "Figma",
    },
    {
        image: "/Designs/int7.jpg",
        title: "Gold Jwelry Collection Poster",
        description:
            "Modern vertical design showcasing elegant gold jewelry collection.",
        tech: "Figma",
    },
    {
        image: "/Designs/int8.jpg",
        title: "Kiran Jewellers Collection Poster",
        description: "Modern vertical design showcasing Kiran Jewellers collection.",
        tech: "Figma",
    },
    {
        image: "/Designs/int9.jpg",
        title: "Kiran Jewellers Collection Poster",
        description: "Modern vertical design showcasing Kiran Jewellers collection.",
        tech: "Figma",
    },
];

const MoreDesignsPage = () => {
    // 4. Add loading state
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {/* 5. Conditionally render the loader */}
            {isLoading && <AnimatedLoader />}


            <div className="w-full">
                <main className="p-10 sm:p-20">
                    {/* Navigation Link */}
                    <div className="mb-8">
                        <Link
                            href="/#designs"
                            // 6. Add onClick to trigger the loader
                            onClick={() => setIsLoading(true)}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Go Back to All Designs
                        </Link>
                    </div>

                    {/* Page Title */}
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent leading-relaxed">
                            More Visual Designs
                        </h1>
                    </div>

                    {/* Vertical (Portrait) Designs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                        {VerticalDesigns.map((design, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg shadow-purple-400 overflow-hidden hover:shadow-2xl hover:shadow-purple-600 transition duration-300 cursor-pointer"
                            >
                                {/* Image Container */}
                                <div
                                    className="relative w-full"
                                    style={{
                                        aspectRatio: "780 / 1200",
                                    }}
                                >
                                    <Image
                                        src={design.image}
                                        alt={design.title}
                                        fill
                                        className="object-contain" // Using object-contain to see the full poster
                                    />
                                </div>

                                {/* Card Content */}
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
            <Footer /> {/* Added Footer */}
        </>
    );
};

export default MoreDesignsPage;