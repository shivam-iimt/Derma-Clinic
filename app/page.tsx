import Hero from "./sections/Hero";
import AboutDoctor from "./sections/AboutDoctor";
import WhyChooseUs from "./sections/WhyChooseUs";
import TreatmentsGrid from "./sections/TreatmentsGrid";
import FeaturedTreatments from "./sections/FeaturedTreatments";
import BeforeAfter from "./sections/BeforeAfter";
import ClinicGallery from "./sections/ClinicGallery";
import Reviews from "./sections/Reviews";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

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
      <Footer />
    </main>
  );
}
