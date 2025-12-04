"use client";

import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutDoctor() {
  return (
    <section className="w-full bg-primaryBg py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT — Doctor Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            About Dr. Koshinder Vats
          </h2>

          <p className="text-textDark text-lg leading-relaxed">
            <strong>Dr. Koshinder Vats (MBBS, MD)</strong> is a highly
            experienced dermatologist with over{" "}
            <strong>10+ years of expertise</strong> in treating skin, hair and
            laser concerns. He specializes in acne, pigmentation, scars, hair
            fall, PRP/GFC therapy, laser hair removal, chemical peels and
            advanced cosmetic dermatology.
          </p>

          <p className="text-textDark text-lg leading-relaxed">
            Dr. Vats has treated thousands of patients using modern dermatology
            techniques and US-FDA approved equipment. Known for ethical practice
            and accurate diagnosis, he provides safe, personalized and effective
            treatment solutions.
          </p>

          <ul className="list-disc pl-5 text-textDark space-y-1">
            <li>Acne & Pimple Treatment</li>
            <li>Pigmentation & Melasma</li>
            <li>Laser Hair Removal</li>
            <li>PRP & GFC Hair Therapy</li>
            <li>Chemical Peels & Carbon Peel</li>
            <li>Hair Fall Treatment</li>
            <li>Anti-Aging Procedures</li>
            <li>Wart, Mole & Skin Tag Removal</li>
          </ul>

          <a
            href="tel:7687077077"
            className="inline-flex items-center gap-3 px-8 py-3 bg-primary text-white rounded-lg shadow hover:bg-primaryLight transition"
          >
            <FaPhoneAlt /> Book Appointment
          </a>
        </motion.div>
        {/* RIGHT — Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/skin-specialist-yamuna-vihar.jpg"
              alt="Dr. Koshinder Vats"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>{" "}
      </div>
    </section>
  );
}
