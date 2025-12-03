export const metadata = {
  title: "Hydra Facial in Yamuna Vihar – Instant Glow Treatment",
  description:
    "Hydra Facial for deep cleansing, hydration & instant glow at Pt. Yadram Skin Clinic.",
};
export const dynamic = "force-static";

export const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Hydra Facial",
  medicalSpecialty: "Dermatology",
  description:
    "Deep cleansing, exfoliation and hydration with Hydra Facial treatment.",
  url: "https://your-domain.com/treatments/hydra-facial",
  provider: { "@type": "Physician", name: "Dr. Koshinder Vats" },
};

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import HydraFacialPage from "./HydraFacialPage";

export default function Page() {
  return (
    <>
      <HydraFacialPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
