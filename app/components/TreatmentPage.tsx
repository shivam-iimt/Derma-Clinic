"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const treatments = [
  { name: "Acne Treatment", img: "/acne-scar-removal.jpg", slug: "acne" },
  {
    name: "Acne Scar Removal",
    img: "/acne-scar-removal.jpg",
    slug: "acne-scar",
  },
  {
    name: "Pigmentation Treatment",
    img: "/acne-scar-removal.jpg",
    slug: "pigmentation",
  },
  {
    name: "Chemical Peel",
    img: "/acne-scar-removal.jpg",
    slug: "chemical-peel",
  },
  { name: "Carbon Peel", img: "/acne-scar-removal.jpg", slug: "carbon-peel" },
  { name: "Hydra Facial", img: "/acne-scar-removal.jpg", slug: "hydra-facial" },
  {
    name: "Laser Hair Removal",
    img: "/acne-scar-removal.jpg",
    slug: "laser-hair-removal",
  },
  {
    name: "Hair Fall Treatment",
    img: "/acne-scar-removal.jpg",
    slug: "hair-fall",
  },
  { name: "PRP Hair Treatment", img: "/acne-scar-removal.jpg", slug: "prp" },
  { name: "GFC Hair Treatment", img: "/acne-scar-removal.jpg", slug: "gfc" },
  {
    name: "Mole & Wart Removal",
    img: "/acne-scar-removal.jpg",
    slug: "mole-wart-removal",
  },
  {
    name: "Anti-Aging Treatment",
    img: "/acne-scar-removal.jpg",
    slug: "anti-aging",
  },
];

export default function TreatmentsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-primary text-center">
        Our Treatments
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {treatments.map((t, idx) => (
          <Link key={t.slug} href={`/treatments/${t.slug}`} className=" ">
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
                <Image src={t.img} alt={t.name} fill className="object-cover" />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-textDark">
                  {t.name}
                </h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}
