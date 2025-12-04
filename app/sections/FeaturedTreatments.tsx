"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const featured = [
  {
    title: "Laser Hair Removal",
    desc: "Safe, painless and long-lasting laser hair removal using advanced US-FDA approved technology.",
    img: "/laser-hair-removal.jpg",
    phone: "tel:7687077077",
  },
  {
    title: "Acne & Acne Scar Treatment",
    desc: "Effective treatment for acne, pimples, and scars using peels, lasers, microneedling and modern dermatology care.",
    img: "/acne-scar-removal.jpg",
    phone: "tel:7687077077",
  },
  {
    title: "PRP / GFC Hair Therapy",
    desc: "Advanced PRP and GFC therapy for hair fall control, hair regrowth and improved scalp health.",
    img: "/prp-treatment.webp",
    phone: "tel:7687077077",
  },
];

export default function FeaturedTreatments() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
        >
          Featured Treatments
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-primaryBg rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer border border-primary/20 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative w-full h-56">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-textDark">
                  {item.title}
                </h3>

                <p className="text-textDark/70 text-base leading-relaxed">
                  {item.desc}
                </p>

                <a
                  href={item.phone}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-lg hover:bg-primaryLight transition"
                >
                  <FaPhoneAlt />
                  Book Appointment
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
