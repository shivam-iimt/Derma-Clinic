"use client";
export const metadata = {
  title: "Laser Hair Removal in Yamuna Vihar – Painless & Safe",
  description:
    "Permanent hair reduction using US-FDA approved lasers. Safe & painless.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Laser Hair Removal",
  medicalSpecialty: "Dermatology",
  description:
    "Permanent hair reduction using safe and effective US-FDA approved lasers.",
  url: "https://your-domain.com/treatments/laser-hair-removal",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};
;

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function LaserHairRemovalPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative w-full h-[250px] bg-blue-900 text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">Laser Hair Removal</h1>
      </section>

      {/* PAGE CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* INTRO SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/laser-treatment.jpg"
              alt="Laser Hair Removal"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-700">
              Safe, Painless & Long-Lasting Laser Hair Removal
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong>Pt. Yadram Skin Clinic</strong>,
              <strong> Dr. Koshinder Vats (MBBS, MD)</strong> provides advanced
              laser hair removal using **US-FDA approved machines** that offer
              painless and long-lasting results.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Our laser technology is suitable for all skin types and offers
              faster, safer and more effective hair reduction compared to
              waxing, shaving, or threading.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* BENEFITS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Benefits of Laser Hair Removal
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Painless & comfortable
              procedure
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Permanent hair
              reduction
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Safe for all skin
              types
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> No ingrown hairs
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Smooth & clear skin
            </li>
          </ul>
        </div>

        {/* BODY AREAS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Areas We Treat
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Full Body Laser",
              "Face Laser",
              "Underarms",
              "Arms",
              "Legs",
              "Bikini Area",
              "Back",
              "Chest",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-3 p-4 bg-gray-50 rounded-xl shadow border"
              >
                <FaCheckCircle className="text-blue-700 text-xl" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* HOW LASER WORKS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            How the Laser Works
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed">
            The laser targets the root of the hair follicle and safely limits
            hair growth without damaging the surrounding skin. With every
            session, the hair becomes:
          </p>

          <ul className="space-y-3 text-gray-700 text-lg mt-4">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Thinner
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Lighter
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Less visible
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Reduced in growth
            </li>
          </ul>
        </div>

        {/* BEFORE-AFTER */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Before & After Results
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/laser-before.jpg"
                alt="Before"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/laser-after.jpg"
                alt="After"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-20 text-center">
          <a
            href="tel:7687077077"
            className="inline-flex items-center gap-3 px-10 py-4 bg-blue-700 text-white rounded-lg text-lg shadow hover:bg-blue-800 transition"
          >
            <FaPhoneAlt /> Call Now for Appointment
          </a>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
