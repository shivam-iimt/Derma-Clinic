export const metadata = {
  title: "PRP Hair Treatment in Yamuna Vihar – Hair Regrowth",
  description:
    "Boost hair growth naturally with PRP therapy by expert dermatologist Dr. Koshinder Vats.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "PRP Hair Treatment",
  medicalSpecialty: "Dermatology",
  description:
    "PRP (Platelet Rich Plasma) therapy to boost natural hair regrowth.",
  url: "https://your-domain.com/treatments/prp-hair-treatment",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};
import PrpTreatmentPage from "./PrpTreatmentPage";

export default function Page() {
  return (
    <>
      <PrpTreatmentPage />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
