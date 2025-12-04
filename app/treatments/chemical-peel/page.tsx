export const metadata = {
  title: "Chemical Peel in Yamuna Vihar – Glow & Skin Rejuvenation",
  description:
    "Brighten skin, reduce acne marks & pigmentation with safe chemical peels.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Chemical Peel",
  medicalSpecialty: "Dermatology",
  description: "Chemical peel for glow, acne, pigmentation and brightening.",
  url: "https://your-domain.com/treatments/chemical-peel",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};

import ChemicalPeelPage from "../../components/ChemicalPeelPage";

export default function Page() {
  return (
    <>
    <ChemicalPeelPage />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    /></>
  );
}
