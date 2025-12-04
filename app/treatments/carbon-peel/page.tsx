export const metadata = {
  title: "Carbon Peel in Yamuna Vihar – Hollywood Peel",
  description:
    "Carbon Peel for glowing, smooth & refined skin texture by Dr. Koshinder Vats.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Carbon Peel",
  medicalSpecialty: "Dermatology",
  description: "Carbon Laser Peel for deep cleansing, glow and rejuvenation.",
  url: "https://your-domain.com/treatments/carbon-peel",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};

import CarbonPeelPage from "../../components/CarbonPeelPage";

export default function Page() {
  return (
    <>
      <CarbonPeelPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
