"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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

// Icon + colors
const iconClass = "text-primary text-4xl";
const cardHeading = "text-textDark";
const cardBg = "bg-primaryBg";

// SAME SLUGS AS MAIN PAGE
const treatments = [
  {
    name: "Acne Treatment",
    slug: "acne",
    icon: <MdFace className={iconClass} />,
  },
  {
    name: "Acne Scar Removal",
    slug: "acne-scar",
    icon: <MdHealing className={iconClass} />,
  },
  {
    name: "Pigmentation Treatment",
    slug: "pigmentation",
    icon: <FaSun className={iconClass} />,
  },
  {
    name: "Chemical Peel",
    slug: "chemical-peel",
    icon: <MdOutlineHealthAndSafety className={iconClass} />,
  },
  {
    name: "Carbon Peel",
    slug: "carbon-peel",
    icon: <FaSpa className={iconClass} />,
  },
  {
    name: "Hydra Facial",
    slug: "hydra-facial",
    icon: <FaSpa className={iconClass} />,
  },
  {
    name: "Laser Hair Removal",
    slug: "laser-hair-removal",
    icon: <FaMagic className={iconClass} />,
  },
  {
    name: "Hair Fall Treatment",
    slug: "hair-fall",
    icon: <FaHeart className={iconClass} />,
  },
  {
    name: "PRP Hair Treatment",
    slug: "prp",
    icon: <FaSyringe className={iconClass} />,
  },
  {
    name: "GFC Hair Treatment",
    slug: "gfc",
    icon: <MdOutlineScience className={iconClass} />,
  },
  {
    name: "Mole & Wart Removal",
    slug: "mole-wart-removal",
    icon: <MdHealing className={iconClass} />,
  },
  {
    name: "Anti-Aging Treatment",
    slug: "anti-aging",
    icon: <FaUserMd className={iconClass} />,
  },
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
            <Link key={item.slug} href={`/treatments/${item.slug}`}>
              <motion.div
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
