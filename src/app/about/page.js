// This component should be placed in a file like src/app/about/page.jsx or src/app/components/AboutUsPage.jsx

import Link from 'next/link';
import { Ship, Lightbulb, Zap, UserCheck, Code, Handshake, Waves, Compass } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 1. Hero Section: Company Mission */}
      <section className="relative py-16 marine-blue overflow-hidden shadow-2xl">
        {/* Background Wave Graphic (Optional: Replace with an actual background image/texture) */}
        <div className="absolute inset-0 opacity-10 bg-repeat-x bg-center" style={{ backgroundImage: "url('/pattern-wave-dark.svg')" }} /> 

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold marine-blue mb-6">
            Navigating the Future of Marine Tech
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-500">
            **NAV-PRO** is built on a foundation of maritime expertise, delivering essential, military-grade navigation and safety equipment that professionals trust when the stakes are highest.
          </p>
        </div>
      </section>
      
      {/* 2. Story / History Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <span className="text-sm font-bold accent-yellow uppercase tracking-widest">OUR STORY</span>
            <h2 className="text-4xl font-extrabold marine-blue mt-2 mb-6">
              From the Helm to the Horizon
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Founded in 2010 by a team of veteran naval engineers and commercial shipping captains, **NAV-PRO** recognized the gap between consumer electronics and the robust, mission-critical gear required for severe ocean environments. Our initial goal was simple: **source the world's most reliable equipment** and back it with unparalleled technical support.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg border-l-4 border-accent-green pl-4 italic">
              "We don't just sell equipment; we equip professionals for survival and success."
            </p>
          </div>
          
          {/* Image/Visual Element */}
          <div className="bg-marine-blue rounded-3xl p-8 shadow-xl">
             
          </div>
        </div>
      </section>

      <hr className="max-w-7xl mx-auto border-gray-200" />
      
      {/* 3. Core Values / Pillars Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-bold accent-yellow uppercase tracking-widest">OUR VALUES</span>
          <h2 className="text-4xl font-extrabold marine-blue mt-2 mb-16">
            The Pillars of NAV-PRO Reliability
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Value 1: Reliability */}
            <div className="p-8 border border-gray-100 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-accent-green/50">
              <Ship className="h-12 w-12 accent-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold marine-blue mb-2">Unwavering Durability</h3>
              <p className="text-gray-600">
                Every component we distribute is certified for extreme IP ratings, tested against vibration, temperature, and salt water exposure. If it can't survive a Category 5 storm, we don't stock it.
              </p>
            </div>
            
            {/* Value 2: Expertise */}
            <div className="p-8 border border-gray-100 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-accent-yellow/50">
              <Compass className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold marine-blue mb-2">Technical Mastery</h3>
              <p className="text-gray-600">
                Our support team consists of former Chief Engineers and certified technicians. We provide genuine, expert advice, installation guidance, and troubleshooting 24/7/365.
              </p>
            </div>
            
            {/* Value 3: Partnership */}
            <div className="p-8 border border-gray-100 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-marine-blue/50">
              <Handshake className="h-12 w-12 marine-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold marine-blue mb-2">Trusted Partnerships</h3>
              <p className="text-gray-600">
                We maintain direct relationships with global manufacturers, ensuring a verifiable supply chain and guaranteeing that every product is 100% authentic and warrantied.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Team / Founders Introduction (Simplified) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-bold text-yellow-400 uppercase tracking-widest">THE CREW</span>
          <h2 className="text-4xl font-extrabold marine-blue mt-2 mb-12">
            Meet the Experts Behind Your Gear
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300">
              
              <h3 className="text-2xl font-bold marine-blue mt-4">Alex V.</h3>
              <p className="accent-green font-semibold">Founder & Lead Engineer</p>
              <p className="text-gray-600 mt-3 text-sm">
                15+ years of naval systems design. Specializes in advanced radar and sonar technology.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300">
              
              <h3 className="text-2xl font-bold marine-blue mt-4">Captain Lee T.</h3>
              <p className="accent-green font-semibold">Chief Maritime Advisor</p>
              <p className="text-gray-600 mt-3 text-sm">
                400,000+ nautical miles logged. Ensures all products meet real-world operational demands.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300">
              
              <h3 className="text-2xl font-bold marine-blue mt-4">Maria S.</h3>
              <p className="accent-green font-semibold">Global Logistics Director</p>
              <p className="text-gray-600 mt-3 text-sm">
                Manages worldwide distribution and ensures rapid, compliant shipping across all continents.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="py-20 bg-marine-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold accent-yellow mb-4">
            Ready to Equip Your Vessel?
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Explore our curated selection of gear, or contact our support team directly for specialized project consultation.
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              href="/products"
              className="bg-accent-yellow text-gray-100 text-lg font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
            >
              Shop All Gear
            </Link>
            <Link
              href="/contact"
              className="bg-marine-dark border border-black text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg hover:bg-black/50 hover:border-accent-yellow transition duration-300"
            >
              Contact Experts
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}