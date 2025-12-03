"use client";
export const metadata = {
  title: "Pigmentation Treatment in Yamuna Vihar – Melasma & Dark Spots",
  description:
    "Advanced treatments for pigmentation, melasma & dark spots at Pt. Yadram Skin Clinic.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Pigmentation Treatment",
  medicalSpecialty: "Dermatology",
  description:
    "Melasma, tanning and pigmentation treatment using lasers and medical therapies.",
  url: "https://your-domain.com/treatments/pigmentation",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};
;


import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function PigmentationTreatmentPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative w-full h-[250px] bg-blue-900 text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Pigmentation Treatment
        </h1>
      </section>

      {/* CONTENT */}
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
              src="/pigmentation-treatment.jpg"
              alt="Pigmentation Treatment"
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
              Advanced Pigmentation & Melasma Treatment
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Pigmentation occurs when the skin produces excess melanin, leading
              to dark spots, uneven tone, and patches. At{" "}
              <strong>Pt. Yadram Skin Clinic</strong>,
              <strong>Dr. Koshinder Vats (MBBS, MD)</strong> provides advanced
              treatment for pigmentation, melasma, tanning and blemishes using
              modern dermatology techniques.
            </p>

            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* TYPES OF PIGMENTATION */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Types of Pigmentation We Treat
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-lg">
            <div className="space-y-3">
              <p className="flex gap-2">
                <FaCheckCircle className="text-blue-700" /> Melasma
              </p>
              <p className="flex gap-2">
                <FaCheckCircle className="text-blue-700" /> Tanning
              </p>
              <p className="flex gap-2">
                <FaCheckCircle className="text-blue-700" /> Post-inflammatory
                pigmentation
              </p>
            </div>

            <div className="space-y-3">
              <p className="flex gap-2">
                <FaCheckCircle className="text-blue-700" /> Age spots / Sun
                spots
              </p>
              <p className="flex gap-2">
                <FaCheckCircle className="text-blue-700" /> Freckles
              </p>
              <p className="flex gap-2">
                <FaCheckCircle className="text-blue-700" /> Dark patches
              </p>
            </div>
          </div>
        </div>

        {/* CAUSES */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Common Causes of Pigmentation
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Sun exposure
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Hormonal imbalance
              (very common in women)
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Skin inflammation or
              acne marks
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Genetics & lifestyle
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Pollution & stress
            </li>
          </ul>
        </div>

        {/* TREATMENT OPTIONS */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Our Pigmentation Treatments
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Chemical Peels",
              "Laser Treatment for Pigmentation",
              "Melasma Treatment",
              "Carbon Peel / Hollywood Peel",
              "PRP for Pigmentation",
              "Skin Brightening Therapies",
              "Anti-pigmentation creams & medicines",
              "Customized treatment plans",
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

        {/* BEFORE AFTER */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Before & After Results
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/pigmentation-before.jpg"
                alt="Before"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/pigmentation-after.jpg"
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
            Benefits of Pigmentation Treatment
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Even skin tone
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Reduction in dark
              patches
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Brighter & glowing
              skin
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Fades acne marks and
              blemishes
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-700" /> Long-lasting results
              with proper care
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
