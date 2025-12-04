export const metadata = {
  title: "Hair Fall Treatment in Yamuna Vihar – Dermatologist Recommended",
  description:
    "Get advanced hair fall solutions including PRP, GFC & medical treatments.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Hair Fall Treatment",
  medicalSpecialty: "Dermatology",
  description:
    "Advanced medical and non-surgical treatments to control hair fall and boost growth.",
  url: "https://your-domain.com/treatments/hair-fall-treatment",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};

import HairFallTreatmentPage from "../../components/HairFallTreatmentPage";

export default function Page() {
  return (
    <>
      <HairFallTreatmentPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
