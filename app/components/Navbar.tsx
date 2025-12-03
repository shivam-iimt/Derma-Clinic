"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Treatments", href: "/treatments" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Pt. Yadram Skin Clinic
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-textDark font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-primary transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CALL BUTTON (Desktop) */}
        <a
          href="tel:7687077077"
          className="hidden md:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primaryLight transition"
        >
          <FaPhoneAlt /> Call Now
        </a>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-primaryBg shadow-lg py-4">
          <ul className="flex flex-col gap-4 px-6 text-textDark font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Mobile Call Button */}
            <a
              href="tel:7687077077"
              className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-primaryLight transition"
            >
              <FaPhoneAlt /> Call Now
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917687077077"
              className="flex items-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
