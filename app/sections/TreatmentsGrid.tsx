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

// ❗ Updated icon color → theme primary
const iconClass = "text-primary text-4xl";

// Updated colors for theme
const cardHeading = "text-textDark";
const cardBg = "bg-primaryBg";

const treatments = [
  { name: "Acne Treatment", icon: <MdFace className={iconClass} /> },
  { name: "Acne Scar Reduction", icon: <MdHealing className={iconClass} /> },
  { name: "Pigmentation & Melasma", icon: <FaSun className={iconClass} /> },
  { name: "Laser Hair Removal", icon: <FaMagic className={iconClass} /> },
  { name: "PRP Hair Growth", icon: <FaSyringe className={iconClass} /> },
  {
    name: "GFC Hair Therapy",
    icon: <MdOutlineScience className={iconClass} />,
  },
  {
    name: "Chemical Peel",
    icon: <MdOutlineHealthAndSafety className={iconClass} />,
  },
  { name: "Carbon Peel", icon: <FaSpa className={iconClass} /> },
  { name: "Hair Fall Treatment", icon: <FaHeart className={iconClass} /> },
  { name: "Hydra Facial", icon: <FaSpa className={iconClass} /> },
  { name: "Mole / Wart Removal", icon: <MdHealing className={iconClass} /> },
  { name: "Anti-Aging Treatments", icon: <FaUserMd className={iconClass} /> },
];

export default function TreatmentsGrid() {
  return (
    <section className="bg-white py-20 w-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
        >
          Our Treatments
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {treatments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className={`${cardBg} shadow-sm rounded-xl p-6 flex flex-col items-center text-center 
                         border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
            >
              {item.icon}
              <h3 className={`mt-4 text-base font-semibold ${cardHeading}`}>
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
