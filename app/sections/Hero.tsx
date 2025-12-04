"use client";

import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function Hero() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* LEFT SIDE */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <div className="w-[260px] h-[330px] relative rounded-2xl overflow-hidden ">
            <Image
              src="/dr-koshinder-vats-dermatologist.jpg"
              alt="Doctor"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Pt. Yadram Skin Clinic
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-textDark">
            Dr. Koshinder Vats (MBBS, MD)
          </h2>

          <p className="text-textDark/70 text-lg max-w-lg">
            Advanced Dermatology, Skin & Hair Treatments in Yamuna Vihar using
            modern techniques & safe procedures.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="tel:7687077077"
              className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primaryLight flex items-center gap-2 transition"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <a
              href="https://wa.me/917687077077"
              target="_blank"
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 flex items-center gap-2 transition"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a
              href="https://www.google.com/maps/place/Dr.+Koshinder+Vats's+Pt+Yadram+Skin+Clinic+,+Laser+and+Hair+Transplant+Centre/@28.7020547,77.2736917,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd66fbd2dc03:0xc477f6559ed49e46!8m2!3d28.7020547!4d77.2762666!16s%2Fg%2F11sms1hklx?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="px-6 py-3 bg-primaryBg text-textDark rounded-lg border border-primary/30 flex items-center gap-2 hover:bg-primary/10 transition"
            >
              <MdLocationPin /> Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
