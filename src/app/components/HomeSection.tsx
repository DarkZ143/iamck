"use client";

import Image from "next/image";
import HeroImg from "../../../public/ckimg.png"; // replace with your image

export default function HomeHeroSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 relative overflow-hidden"
    >
      {/* Left: Name + info */}
      <div className="flex-1 flex flex-col gap-6 z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 drop-shadow-md">Hello I'm</h2>
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg">
          Chandrakiran
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 drop-shadow-md">
          UX & UI Designer
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-md leading-relaxed">
          Crafting engaging and interactive user experiences with modern design
          principles. I turn ideas into seamless, visually stunning interfaces.
        </p>
      </div>

      {/* Right: Oval Image with glowing gradient shadow */}
      <div className="flex-1 relative mt-12 md:mt-0 flex justify-center items-center">
        {/* Gradient Glow */}
        <div className="absolute w-80 h-96 md:w-96 md:h-[400px] rounded-[50%/60%] bg-gradient-to-r from-blue-500 via-blue-800 to-cyan-500 blur-3xl animate-pulse opacity-40"></div>

        {/* Hero Image */}
        <div className="relative w-72 h-88 md:w-80 md:h-96 overflow-hidden rounded-[50%/60%] drop-shadow-2xl">
          <Image
            src={HeroImg}
            alt="Chandrakiran"
            width={380}
            height={390}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
