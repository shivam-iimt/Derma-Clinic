export const metadata = {
  title: "Pigmentation Treatment in Yamuna Vihar – Melasma & Dark Spots",
  description:
    "Advanced treatments for pigmentation, melasma & dark spots at Pt. Yadram Skin Clinic.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Pigmentation Treatment",
  medicalSpecialty: "Dermatology",
  description:
    "Melasma, tanning and pigmentation treatment using lasers and medical therapies.",
  url: "https://your-domain.com/treatments/pigmentation",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};

import PigmentationTreatmentPage from "./PigmentationTreatmentPage";

export default function Page() {
  return (
    <>
      <PigmentationTreatmentPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
