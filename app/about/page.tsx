"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO BANNER */}
      <section className="relative w-full h-[250px] bg-blue-900 text-white flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Dr. Koshinder Vats
        </h1>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* DOCTOR PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/doctor-placeholder.jpg"
                alt="Dr. Koshinder Vats"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* DOCTOR DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
              Dr. Koshinder Vats (MBBS, MD)
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Dr. Koshinder Vats</strong> is a highly experienced
              dermatologist with over <strong>10+ years of expertise</strong> in
              treating skin, hair, and cosmetic concerns. He specializes in
              acne, pigmentation, scars, PRP/GFC therapy, laser hair removal,
              chemical peels, mole/wart removal and advanced aesthetic
              dermatology.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              His approach combines accurate diagnosis, personalized care and
              modern US-FDA approved equipment, ensuring patients receive the
              safest and most effective treatments.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Over the years, Dr. Vats has treated thousands of patients with
              outstanding clinical results and ethical dermatology practice.
            </p>

            {/* CTA */}
            <a
              href="tel:7687077077"
              className="inline-flex items-center gap-3 px-8 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition"
            >
              <FaPhoneAlt /> Book Appointment
            </a>
          </motion.div>
        </div>

        {/* SPECIALIZATIONS GRID */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Specializations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Acne & Pimple Treatment",
              "Acne Scar Reduction",
              "Pigmentation & Melasma",
              "Laser Hair Removal",
              "PRP / GFC Hair Therapy",
              "Chemical Peels",
              "Carbon Peel",
              "Hair Fall Treatment",
              "Mole / Wart Removal",
              "Hydra Facial",
              "Anti-Aging Treatments",
              "Skin Rejuvenation",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-lg shadow-sm border"
              >
                <FaCheckCircle className="text-blue-700" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
