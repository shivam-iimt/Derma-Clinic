import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold">Pt. Yadram Skin Clinic</h3>
          <p className="text-textLight mt-4">
            Advanced Skin & Hair Clinic in Yamuna Vihar, providing professional
            dermatology care under Dr. Koshinder Vats (MBBS, MD).
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-textLight">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/treatments" className="hover:text-white transition">
                Treatments
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold">Contact</h3>

          <div className="mt-4 space-y-3 text-textLight">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-textLight" /> 7687077077
            </p>
            <p className="flex items-center gap-2">
              <FaWhatsapp className="text-textLight" /> 7687077077
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-textLight" /> B-77, Yamuna Vihar,
              Delhi 110053
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-textLight mt-10">
        © {new Date().getFullYear()} Pt. Yadram Skin Clinic. All Rights
        Reserved.
      </p>
    </footer>
  );
}
