import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import WhatsAppButton from "./components/WhatsappButton";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "Pt. Yadram Skin Clinic – Best Dermatologist in Yamuna Vihar | Dr. Koshinder Vats",
    template: "%s | Pt. Yadram Skin Clinic",
  },
  description:
    "Pt. Yadram Skin Clinic in Yamuna Vihar offers advanced dermatology treatments such as acne removal, pigmentation, hair fall treatment, PRP, laser hair removal & more. Consult Dr. Koshinder Vats (MBBS, MD).",
  keywords: [
    "Dermatologist Yamuna Vihar",
    "Skin Clinic Delhi",
    "Laser Hair Removal Yamuna Vihar",
    "Acne Treatment Delhi",
    "Pigmentation Treatment",
    "PRP Hair Treatment Delhi",
    "Dr Koshinder Vats",
  ],
  openGraph: {
    title: "Pt. Yadram Skin Clinic – Best Dermatologist in Yamuna Vihar",
    description:
      "Expert skin & hair treatments by Dr. Koshinder Vats (MBBS, MD). Acne, pigmentation, PRP, GFC, laser hair removal & more.",
    url: "https://your-domain.com",
    siteName: "Pt. Yadram Skin Clinic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pt. Yadram Skin Clinic",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Pt. Yadram Skin Clinic",
              image: "https://your-domain.com/og-image.jpg",
              url: "https://your-domain.com",
              telephone: "7687077077",
              address: {
                "@type": "PostalAddress",
                streetAddress: "B-77, Yamuna Vihar",
                addressLocality: "Delhi",
                postalCode: "110053",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "28.7020671",
                longitude: "77.2758295",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Thursday"],
                  opens: "13:00",
                  closes: "20:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Wednesday", "Friday", "Saturday"],
                  opens: "17:00",
                  closes: "20:30",
                },
              ],
              sameAs: ["https://maps.app.goo.gl/...clinic-link..."],
              medicalSpecialty: [
                "Dermatology",
                "Cosmetic Dermatology",
                "Laser Treatment",
                "Hair Treatment",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Koshinder Vats",
              image: "https://your-domain.com/doctor.jpg",
              jobTitle: "Dermatologist",
              medicalSpecialty: "Dermatology",
              url: "https://your-domain.com",
              worksFor: {
                "@type": "MedicalClinic",
                name: "Pt. Yadram Skin Clinic",
              },
              alumniOf: "MBBS, MD",
              description:
                "Dr. Koshinder Vats (MBBS, MD) is an experienced dermatologist specializing in acne, pigmentation, hair fall, PRP, GFC, and laser treatments.",
              telephone: "7687077077",
              address: {
                "@type": "PostalAddress",
                streetAddress: "B-77, Yamuna Vihar",
                addressLocality: "Delhi",
                postalCode: "110053",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}


