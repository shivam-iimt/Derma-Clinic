"use client";

import { motion } from "framer-motion";
import { FaMagic, FaSyringe, FaSpa, FaCheckCircle } from "react-icons/fa";
import {
  MdFace,
  MdHealing,
  MdOutlineScience,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import Link from "next/link";

const treatments = [
  {
    title: "Acne Treatment",
    desc: "Professional treatment for acne & pimples using medical peels and modern dermatology.",
    icon: <MdFace className="text-blue-700 text-4xl" />,
    link: "/treatments/acne",
  },
  {
    title: "Acne Scar Reduction",
    desc: "Microneedling, peels and laser treatments for scar reduction.",
    icon: <MdHealing className="text-blue-700 text-4xl" />,
    link: "/treatments/acne-scar",
  },
  {
    title: "Pigmentation & Melasma",
    desc: "Advanced pigmentation and melasma treatment with peels & laser.",
    icon: <FaSpa className="text-blue-700 text-4xl" />,
    link: "/treatments/pigmentation",
  },
  {
    title: "Laser Hair Removal",
    desc: "Pain-free, long-lasting laser hair removal using US-FDA technology.",
    icon: <FaMagic className="text-blue-700 text-4xl" />,
    link: "/treatments/laser-hair-removal",
  },
  {
    title: "PRP Hair Growth",
    desc: "Effective PRP therapy to reduce hair fall and promote growth.",
    icon: <FaSyringe className="text-blue-700 text-4xl" />,
    link: "/treatments/prp",
  },
  {
    title: "GFC Hair Therapy",
    desc: "Advanced GFC therapy to boost hair regrowth naturally.",
    icon: <MdOutlineScience className="text-blue-700 text-4xl" />,
    link: "/treatments/gfc",
  },
  {
    title: "Chemical Peels",
    desc: "Medical-grade peels for glowing, even-toned skin.",
    icon: <MdOutlineHealthAndSafety className="text-blue-700 text-4xl" />,
    link: "/treatments/chemical-peel",
  },
  {
    title: "Carbon Peel",
    desc: "Popular laser carbon peel for instant glow & pore tightening.",
    icon: <FaSpa className="text-blue-700 text-4xl" />,
    link: "/treatments/carbon-peel",
  },
  {
    title: "Hair Fall Treatment",
    desc: "Diagnosis & treatments for reducing hair fall effectively.",
    icon: <FaCheckCircle className="text-blue-700 text-4xl" />,
    link: "/treatments/hair-fall",
  },
  {
    title: "Hydra Facial",
    desc: "Deep cleansing & rejuvenating hydra facial treatment.",
    icon: <FaSpa className="text-blue-700 text-4xl" />,
    link: "/treatments/hydra-facial",
  },
  {
    title: "Mole / Wart Removal",
    desc: "Safe removal of moles, warts, and skin tags.",
    icon: <MdHealing className="text-blue-700 text-4xl" />,
    link: "/treatments/mole-wart",
  },
  {
    title: "Anti-Aging Treatment",
    desc: "Skin tightening & anti-aging procedures for youthful skin.",
    icon: <FaCheckCircle className="text-blue-700 text-4xl" />,
    link: "/treatments/anti-aging",
  },
];

export default function TreatmentsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our Treatments</h1>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
          Complete range of skin, hair and laser services designed to give you
          safe and effective results.
        </p>
      </section>

      {/* TREATMENTS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {treatments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-gray-50 rounded-xl p-6 shadow border hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>

                <Link
                  href={item.link}
                  className="mt-3 text-blue-700 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
