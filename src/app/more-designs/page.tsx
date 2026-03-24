"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import AnimatedLoader from "@/app/components/AnimatedLoader";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

// 👇 Static fallback designs
const VerticalDesigns: DesignType[] = [
   
];

// 🔹 Type safety (important for production)
type DesignType = {
    id?: string; // 👈 make optional
    image: string;
    title: string;
    description: string;
    tech: string;
};

const MoreDesignsPage = () => {
    const [firebaseDesigns, setFirebaseDesigns] = useState<DesignType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);

    // 🔥 Real-time Firebase listener
    useEffect(() => {
        const q = query(collection(db, "designs"), orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as DesignType),
                }));

                setFirebaseDesigns(data);
                setIsFetching(false);
            },
            (error) => {
                console.error("Firebase error:", error);
                setIsFetching(false);
            }
        );

        return () => unsubscribe();
    }, []);

    // 🔥 Merge Firebase + Static
    const allDesigns = [...firebaseDesigns, ...VerticalDesigns];

    return (
        <>
            {(isLoading || isFetching) && <AnimatedLoader />}

            <div className="w-full">
                <main className="p-10 sm:p-20">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Link
                            href="/#designs"
                            onClick={() => setIsLoading(true)}
                            className="inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                        >
                            ← Go Back to All Designs
                        </Link>
                    </div>

                    {/* Title */}
                    <div className="flex justify-center items-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center bg-linear-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                            More Visual Designs
                        </h1>
                    </div>

                    {/* Loader while fetching */}
                    {isFetching ? (
                        <p className="text-center text-gray-500 mt-10">
                            Loading designs...
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
                            {allDesigns.map((design, index) => (
                                <div
                                    key={design.id || index}
                                    className="bg-white rounded-2xl shadow-lg shadow-purple-400 overflow-hidden hover:shadow-2xl hover:shadow-purple-600 transition duration-300 cursor-pointer"
                                >
                                    {/* Image */}
                                    <div
                                        className="relative w-full"
                                        style={{ aspectRatio: "780 / 1200" }}
                                    >
                                        <Image
                                            src={design.image}
                                            alt={design.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold">
                                            {design.title}
                                        </h2>
                                        <p className="text-gray-600 mt-1">
                                            {design.description}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-2">
                                            {design.tech}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            </div>

            <Footer />
        </>
    );
};

export default MoreDesignsPage;