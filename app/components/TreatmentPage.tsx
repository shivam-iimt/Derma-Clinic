"use client"
import Link from "next/link";

const treatments = [
  { name: "Acne Treatment", slug: "acne" },
  { name: "Acne Scar Removal", slug: "acne-scar-removal" },
  { name: "Pigmentation Treatment", slug: "pigmentation" },
  { name: "Chemical Peel", slug: "chemical-peel" },
  { name: "Carbon Peel", slug: "carbon-peel" },
  { name: "Hydra Facial", slug: "hydra-facial" },
  { name: "Laser Hair Removal", slug: "laser-hair-removal" },
  { name: "Hair Fall Treatment", slug: "hair-fall-treatment" },
  { name: "PRP Hair Treatment", slug: "prp-hair-treatment" },
  { name: "GFC Hair Treatment", slug: "gfc-hair-treatment" },
  { name: "Mole & Wart Removal", slug: "mole-wart-removal" },
  { name: "Anti-Aging Treatment", slug: "anti-aging" },
];

export default function TreatmentsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-blue-900 text-center">
        Our Treatments
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {treatments.map((t) => (
          <Link
            key={t.slug}
            href={`/treatments/${t.slug}`}
            className="p-6 bg-white rounded-xl shadow border hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-700">{t.name}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}
