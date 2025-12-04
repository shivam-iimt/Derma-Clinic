"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917687077077"
      className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}
