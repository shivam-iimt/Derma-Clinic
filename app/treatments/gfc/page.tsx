export const metadata = {
  title: "GFC Hair Treatment in Yamuna Vihar – Advanced Hair Regrowth",
  description:
    "GFC therapy for stronger, healthier hair regrowth. Safe & effective.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "GFC Hair Treatment",
  medicalSpecialty: "Dermatology",
  description:
    "GFC therapy (Growth Factor Concentrate) for advanced hair growth stimulation.",
  url: "https://your-domain.com/treatments/gfc-hair-treatment",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};

import GfcTreatmentPage from "./GfcTreatmentPage";

export default function Page() {
  return (
    <>
      <GfcTreatmentPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
