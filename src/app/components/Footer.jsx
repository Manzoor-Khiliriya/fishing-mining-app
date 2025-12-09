import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Experts", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ];

  // Example categories (You should import these from your product data source)
  const productCategories = [
    {
      name: "Navigation Systems",
      href: "/products?category=navigation-systems",
    },
    {
      name: "Fish Finders & Sonar",
      href: "/products?category=fish-finders-sonar",
    },
    {
      name: "Marine Communication",
      href: "/products?category=marine-communication",
    },
    {
      name: "Safety & Survival Gear",
      href: "/products?category=safety-survival",
    },
  ];

  return (
    <footer
      className="text-gray-300 border-t border-marine-dark shadow-2xl"
      style={{ backgroundColor: "#0d304b" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section: Grid Layout for Links and Contact */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 border-b border-marine-dark pb-10">
          {/* Column 1: Brand Info */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <Link href="/">
              <span className="text-2xl mb-2 tracking-wide font-extrabold text-accent-yellow drop-shadow-lg hover:text-white transition-colors">
                SEA CAST <br />
                FISHING EQUIPMENTS
              </span>
            </Link>
            <p className="text-sm max-w-sm">
              Premium distributor of military-grade marine electronics, safety,
              and expedition equipment. Trusted globally by professionals.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-yellow-400 transition duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Shop Categories */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Shop By</h3>
            <ul className="space-y-3">
              {productCategories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    className="text-sm hover:text-yellow-400 transition duration-200"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent-yellow flex-shrink-0" />
                <a
                  href="mailto:support@navpro.com"
                  className="text-sm hover:text-white transition duration-200 break-all"
                >
                  info@seacastfish.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-accent-yellow flex-shrink-0" />
                <span className="text-sm">
                  Near to Safeer Mall, Musaffah, <br />
                  ME9, Abu Dhabi
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <p className="pt-6 text-center text-xs mx-auto">
          &copy; {currentYear} SEA CAST FISHING EQUIPMENTS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
