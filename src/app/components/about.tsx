"use client";

import Image from "next/image";
import ProfileImg from "../../../public/ckdesign.png"; // replace with your profile/illustration
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Figma",
    "Canva",
    "Photoshop",
    "CorelDraw",
    "Netgraphy",
    "Sketching",
    "Blender",
    "Adobe Premiere Pro",
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460]"
    >
      {/* Left: Profile Image */}
      <motion.div
        className="flex-1 relative flex justify-center items-center mb-12 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-72 h-96 md:w-80 md:h-[400px] rounded-[50%/60%] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 blur-3xl animate-pulse opacity-40"></div>
        <div className="relative w-72 h-88 md:w-80 md:h-96 overflow-hidden rounded-[50%/60%] drop-shadow-2xl">
          <Image src={ProfileImg} alt="Profile" fill className="object-cover" />
        </div>
      </motion.div>

      {/* Right: Info */}
      <motion.div
        className="flex-1 flex flex-col gap-6 z-10 text-white"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
          I am a multi-disciplinary designer with knowledge spanning Textile Technology and Computer Science & Design. I have honed skills in creating visually compelling designs, illustrations, and digital experiences.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 mt-4">
          {skills.map((skill, idx) => (
            <motion.span
              key={skill}
              className="px-4 py-2 rounded-full font-semibold text-sm bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg hover:scale-110 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Education */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-orange-400 mb-2">Education</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              🎓 <span className="font-semibold">Diploma:</span> Textile Technology, Government Girls Polytechnic Prayagraj (2022)
            </li>
            <li>
              🎓 <span className="font-semibold">BTech:</span> Computer Science & Design, AKTU University (Expected 2026)
            </li>
          </ul>
        </div>

        {/* Resume Download */}
        <a
          href="/chandrakiran_resume.pdf"
          download
          className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform hover:brightness-110"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
