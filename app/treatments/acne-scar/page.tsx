export const metadata = {
  title: "Acne Scar Removal in Yamuna Vihar – Laser & MNRF",
  description:
    "Remove acne scars with laser, microneedling & medical treatments by Dr. Koshinder Vats. Safe & long-lasting results.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Acne Scar Removal",
  medicalSpecialty: "Dermatology",
  description:
    "Laser and microneedling acne scar removal treatment at Pt. Yadram Skin Clinic.",
  url: "https://your-domain.com/treatments/acne-scar-removal",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};

import AcneScarTreatmentPage from "../../components/AcneScarTreatmentPage";

export default function Page() {
  return (
    <>
      <AcneScarTreatmentPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
