"use client";

import { motion } from "framer-motion";
import {
  FaSun,
  FaUserMd,
  FaSyringe,
  FaSpa,
  FaMagic,
  FaHeart,
} from "react-icons/fa";
import {
  MdFace,
  MdHealing,
  MdOutlineScience,
  MdOutlineHealthAndSafety,
} from "react-icons/md";

const treatments = [
  {
    name: "Acne Treatment",
    icon: <MdFace className="text-blue-700 text-4xl" />,
  },
  {
    name: "Acne Scar Reduction",
    icon: <MdHealing className="text-blue-700 text-4xl" />,
  },
  {
    name: "Pigmentation & Melasma",
    icon: <FaSun className="text-blue-700 text-4xl" />,
  },
  {
    name: "Laser Hair Removal",
    icon: <FaMagic className="text-blue-700 text-4xl" />,
  },
  {
    name: "PRP Hair Growth",
    icon: <FaSyringe className="text-blue-700 text-4xl" />,
  },
  {
    name: "GFC Hair Therapy",
    icon: <MdOutlineScience className="text-blue-700 text-4xl" />,
  },
  {
    name: "Chemical Peel",
    icon: <MdOutlineHealthAndSafety className="text-blue-700 text-4xl" />,
  },
  { name: "Carbon Peel", icon: <FaSpa className="text-blue-700 text-4xl" /> },
  {
    name: "Hair Fall Treatment",
    icon: <FaHeart className="text-blue-700 text-4xl" />,
  },
  { name: "Hydra Facial", icon: <FaSpa className="text-blue-700 text-4xl" /> },
  {
    name: "Mole / Wart Removal",
    icon: <MdHealing className="text-blue-700 text-4xl" />,
  },
  {
    name: "Anti-Aging Treatments",
    icon: <FaUserMd className="text-blue-700 text-4xl" />,
  },
];

export default function TreatmentsGrid() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12"
        >
          Our Treatments
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {treatments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white shadow-sm rounded-xl p-6 flex flex-col items-center text-center border hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
            >
              {item.icon}
              <h3 className="mt-4 text-base font-semibold text-gray-800">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
