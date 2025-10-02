"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import Logo from "../../../public/cklogo.png"; // use your logo image

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-cyan-400/30 text-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-20 animate-gradient-xy bg-[radial-gradient(circle_at_bottom_right,_#1a1a2e,_#16213e,_#0f3460,_#0072ff)] bg-[length:300%_300%]" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Left: Logo + tagline */}
        <div className="flex flex-col items-start gap-3 bg-black/30 p-4 rounded-xl backdrop-blur-sm">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="Logo" width={50} height={50} />
            <span className="text-xl font-extrabold text-orange-400 drop-shadow-lg">
              Chandrakiran
            </span>
          </Link>
          <p className="text-gray-200 text-sm max-w-xs leading-relaxed">
            Crafting interactive designs & immersive web experiences with modern
            motion and creative ideas.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex flex-col items-center bg-black/30 p-4 rounded-xl backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-orange-300 mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-gray-200">
            <Link href="/" className="hover:text-orange-400 transition">Home</Link>
            <Link href="#about" className="hover:text-orange-400 transition">About</Link>
            <Link href="#designs" className="hover:text-orange-400 transition">Designs</Link>
            <Link href="#contact" className="hover:text-orange-400 transition">Contact</Link>
          </div>
        </div>

        {/* Right: Socials + newsletter */}
        <div className="flex flex-col items-center justify-center gap-4 bg-black/30 p-4 rounded-xl backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-orange-300">Stay Connected</h3>
          <div className="flex gap-4">

            <Link href="https://www.linkedin.com/in/chandrakiran-ck-8373a1330" target="_blank" className="hover:text-orange-400">
              <Linkedin className="w-6 h-6" />
            </Link>

            <Link href="https://instagram.com/cha.ndra9077" target="_blank" className="hover:text-orange-400">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="mailto:chandrakiranck381@gmail.com" className="hover:text-orange-400">
              <Mail className="w-6 h-6" />
            </Link>
          </div>

         
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-400/20 py-4 text-center text-gray-200 text-sm relative z-10">
        ©2025 {new Date().getFullYear()} Chandrakiran · All Rights Reserved · Made with ❤️
      </div>
    </footer>
  );
}
