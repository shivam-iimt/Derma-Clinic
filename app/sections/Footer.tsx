import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold">Pt. Yadram Skin Clinic</h3>
          <p className="text-gray-300 mt-4">
            Advanced Skin & Hair Clinic in Yamuna Vihar, providing professional
            dermatology care under Dr. Koshinder Vats (MBBS, MD).
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/treatments">Treatments</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold">Contact</h3>

          <div className="mt-4 space-y-3 text-gray-300">
            <p className="flex gap-2">
              <FaPhoneAlt /> 7687077077
            </p>
            <p className="flex gap-2">
              <FaWhatsapp /> 7687077077
            </p>
            <p className="flex gap-2">
              <FaMapMarkerAlt /> B-77, Yamuna Vihar, Delhi 110053
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-400 mt-10">
        © {new Date().getFullYear()} Pt. Yadram Skin Clinic. All Rights
        Reserved.
      </p>
    </footer>
  );
}
