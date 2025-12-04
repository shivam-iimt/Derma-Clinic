export const metadata = {
  title: "Anti-Aging Treatment in Yamuna Vihar – Wrinkle Reduction",
  description:
    "Rejuvenate your skin with anti-aging solutions including lasers, peels & facials.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Anti-Aging Treatment",
  medicalSpecialty: "Dermatology",
  description:
    "Wrinkle reduction, skin tightening, and rejuvenation with anti-aging dermatology treatments.",
  url: "https://your-domain.com/treatments/anti-aging",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};

import AntiAgingTreatmentPage from "../../components/AntiAgingTreatmentPage";

export default function Page() {
  return (
    <>
      <AntiAgingTreatmentPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
