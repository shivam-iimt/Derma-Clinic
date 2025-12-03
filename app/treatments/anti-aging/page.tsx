"use client";
export const metadata = {
  title: "Anti-Aging Treatment in Yamuna Vihar – Wrinkle Reduction",
  description:
    "Rejuvenate your skin with anti-aging solutions including lasers, peels & facials.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Anti-Aging Treatment",
  medicalSpecialty: "Dermatology",
  description:
    "Wrinkle reduction, skin tightening, and rejuvenation with anti-aging dermatology treatments.",
  url: "https://your-domain.com/treatments/anti-aging",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function AntiAgingTreatmentPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative w-full h-[250px] bg-blue-900 text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">Anti-Aging Treatment</h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* INTRO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/anti-aging.jpg"
              alt="Anti-Aging Treatment"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-700">
              Look Younger with Advanced Anti-Aging Treatments
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Aging signs like wrinkles, fine lines, sagging skin, and uneven
              texture start appearing due to stress, sun damage, and natural
              aging.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong>Pt. Yadram Skin Clinic</strong>,
              <strong>Dr. Koshinder Vats (MBBS, MD)</strong> offers
              scientifically proven anti-aging solutions to restore youthful,
              glowing, and firm skin.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* CONCERNS IT TREATS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Anti-Aging Treatments Help With
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Fine lines & wrinkles
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Loose & sagging skin
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Uneven texture &
              dullness
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Dark spots &
              pigmentation
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Loss of facial volume
            </li>
          </ul>
        </div>

        {/* TYPES OF TREATMENTS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Anti-Aging Treatments Available
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Chemical Peels for rejuvenation",
              "Laser Facial for skin tightening",
              "Carbon Peel for glow & texture",
              "Hydra Facial with anti-aging serums",
              "Micro-needling for collagen boost",
              "Anti-aging medical skincare routine",
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

        {/* HOW IT WORKS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            How Anti-Aging Treatment Works
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Boosts collagen &
              elastin
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Improves skin
              elasticity
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Reduces wrinkles &
              fine lines
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Brightens skin tone
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Tightens and firms the
              skin
            </li>
          </ul>
        </div>

        {/* BEFORE AFTER RESULTS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Before & After Results
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/antiaging-before.jpg"
                alt="Before"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/antiaging-after.jpg"
                alt="After"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Benefits of Anti-Aging Treatments
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Natural & youthful
              appearance
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Non-invasive & safe
              procedures
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Minimal downtime
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Long-lasting results
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Customized anti-aging
              plan
            </li>
          </ul>
        </div>

        {/* CTA */}
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
