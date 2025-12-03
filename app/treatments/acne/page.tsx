export const metadata = {
  title: "Acne Treatment in Yamuna Vihar – Dr. Koshinder Vats",
  description:
    "Get clear, acne-free skin with advanced acne treatments by Dr. Koshinder Vats at Pt. Yadram Skin Clinic, Yamuna Vihar. Safe, effective & personalized care.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Acne Treatment",
  medicalSpecialty: "Dermatology",
  description:
    "Advanced acne treatment offered at Pt. Yadram Skin Clinic using peels, medications, laser & personalized plans.",
  url: "https://your-domain.com/treatments/acne",
  provider: {
    "@type": "Physician",
    name: "Dr. Koshinder Vats",
  },
};

import AcneTreatmentPage from "./AcneTreatmentPage";

export default function Page() {
  return (
    <>
      <AcneTreatmentPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
