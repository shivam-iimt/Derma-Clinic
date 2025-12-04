export const metadata = {
  title: "Mole, Wart & Skin Tag Removal in Yamuna Vihar",
  description:
    "Safe & painless removal of moles, warts & skin tags at Pt. Yadram Skin Clinic.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Mole, Wart & Skin Tag Removal",
  medicalSpecialty: "Dermatology",
  description:
    "Safe, painless removal of moles, warts and skin tags using laser and dermatology procedures.",
  url: "https://your-domain.com/treatments/mole-wart-removal",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};

import MoleWartRemovalPage from "../../components/MoleWartRemovalPage";

export default function Page() {
  return (
    <>
      <MoleWartRemovalPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
