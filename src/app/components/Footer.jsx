import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Experts', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
  ];

  // Example categories (You should import these from your product data source)
  const productCategories = [
    { name: 'Navigation', href: '/products?category=navigation' },
    { name: 'Safety Equipment', href: '/products?category=safety' },
    { name: 'Communication', href: '/products?category=communication' },
    { name: 'Engine Monitoring', href: '/products?category=engine' },
  ];

  return (
    <footer className="bg-marine-blue text-gray-300 border-t border-marine-dark shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Section: Grid Layout for Links and Contact */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 border-b border-marine-dark pb-10">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <Link href="/">
                <span className="text-4xl tracking-wide font-extrabold text-accent-yellow drop-shadow-lg hover:text-white transition-colors">
                    NAV-PRO
                </span>
            </Link>
            <p className="text-sm max-w-sm">
              Premium distributor of military-grade marine electronics, safety, and expedition equipment. Trusted globally by professionals.
            </p>
           
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-yellow-400 transition duration-200">
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
                  <Link href={cat.href} className="text-sm hover:text-yellow-400 transition duration-200">
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
                <a href="mailto:support@navpro.com" className="text-sm hover:text-white transition duration-200 break-all">
                  support@navpro.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent-yellow flex-shrink-0" />
                <a href="tel:+15551234567" className="text-sm hover:text-white transition duration-200">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-accent-yellow flex-shrink-0" />
                <span className="text-sm">
                  Global HQ: 100 Maritime Way, <br/>Docklands, MA 12345
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
           <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-yellow-400 transition duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-yellow-400 transition duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-yellow-400 transition duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          
          <p className="order-2 md:order-1 mt-4 md:mt-0">
            &copy; {currentYear} NAV-PRO. All rights reserved.
          </p>
          
          <ul className="order-1 md:order-2 flex space-x-4">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-yellow-400 transition duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}