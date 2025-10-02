"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../../public/cklogo.png";

export default function Navbar() {
  const menus = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Designs", href: "#designs" },
    { name: "Contact", href: "#contact" },
  ];

  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 shadow-lg z-50">
        {/* Background Animation (kept behind) */}
        <div className="absolute inset-0 -z-10 animate-gradient-xy bg-[radial-gradient(circle_at_top_left,_#1a1a2e,_#16213e,_#0f3460,_#0072ff)] bg-[length:300%_300%]" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 -z-0 opacity-15 bg-[linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3 z-20">
          <Link href="#home">
            <Image
              src={Logo}
              width={55}
              height={55}
              alt="Logo"
              className="cursor-pointer drop-shadow-lg"
            />
          </Link>
          <span className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-xl bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
            Chandrakiran
          </span>
        </div>

        {/* Desktop Menus */}
        <div className="hidden md:flex gap-8 text-lg font-medium z-20">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.href}
              onClick={() => setActive(menu.name)}
              className={`relative transition duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 ${active === menu.name
                  ? "text-orange-400 after:w-full"
                  : "text-white hover:text-orange-400 hover:after:w-full after:w-0"
                }`}
            >
              {menu.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white z-30"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown (fixed so it's never clipped) */}
      {open && (
        <div className="fixed top-20 left-0 w-full bg-blue-900/90 backdrop-blur-md flex flex-col items-center py-6 gap-4 md:hidden border-t border-orange-400/30 shadow-xl z-40">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.href}
              onClick={() => {
                setActive(menu.name);
                setOpen(false);
              }}
              className={`block w-full text-center py-2 text-lg transition ${active === menu.name ? "text-orange-400" : "text-white hover:text-orange-400"
                }`}
            >
              {menu.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
