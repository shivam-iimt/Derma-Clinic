export const metadata = {
  title: "Pt. Yadram Skin Clinic – Dermatologist in Yamuna Vihar",
  description:
    "Pt. Yadram Skin Clinic offers expert skin and hair treatments including acne, pigmentation, laser hair removal, PRP, GFC & more. Consult Dr. Koshinder Vats (MBBS, MD).",
};
import Hero from "./sections/Hero";
import AboutDoctor from "./sections/AboutDoctor";
import WhyChooseUs from "./sections/WhyChooseUs";
import TreatmentsGrid from "./sections/TreatmentsGrid";
import FeaturedTreatments from "./sections/FeaturedTreatments";
import BeforeAfter from "./sections/BeforeAfter";
import ClinicGallery from "./sections/ClinicGallery";
import Reviews from "./sections/Reviews";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutDoctor />
      <WhyChooseUs />
      <TreatmentsGrid />
      <FeaturedTreatments />
      <BeforeAfter />
      <ClinicGallery />
      <Reviews />
      <ContactSection />
    </main>
  );
}
