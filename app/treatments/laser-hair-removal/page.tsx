export const metadata = {
  title: "Laser Hair Removal in Yamuna Vihar – Painless & Safe",
  description:
    "Permanent hair reduction using US-FDA approved lasers. Safe & painless.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Laser Hair Removal",
  medicalSpecialty: "Dermatology",
  description:
    "Permanent hair reduction using safe and effective US-FDA approved lasers.",
  url: "https://your-domain.com/treatments/laser-hair-removal",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};

import LaserHairRemovalPage from "./LaserHairRemovalPage";

export default function Page() {
  return (
    <>
      <LaserHairRemovalPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
