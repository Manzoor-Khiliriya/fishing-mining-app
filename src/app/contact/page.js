import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react'; 

export const metadata = {
  title: 'Contact Us - NAV-PRO',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
      
      <header className="text-center mb-16">
        <h1 className="text-6xl font-extrabold marine-blue mb-4 leading-tight">
          Let's Set Sail Together ⚓
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Our specialized team of certified marine experts is ready to assist with technical support, quote requests, and expedition planning.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100/70">
          <h2 className="text-3xl font-bold text-marine-blue mb-8 border-b pb-4">
            Send Us an Inquiry
          </h2>
          
          <form className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-inner transition duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.doe@vessel.com"
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-inner transition duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
              <select
                id="subject"
                name="subject"
                className="w-full p-4 border border-gray-300 rounded-xl shadow-inner bg-white  appearance-none transition duration-300"
                defaultValue=""
                required
              >
                <option value="" disabled>Select inquiry type</option>
                <option value="quote">Product Quote Request</option>
                <option value="support">Technical Support / Warranty</option>
                <option value="partnerships">Dealer / Partnership Inquiry</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="I am interested in the GPS Fish Finder and need pricing or technical specifications..."
                className="w-full p-4 border border-gray-300 rounded-xl shadow-inner transition duration-300"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-marine-blue text-white text-xl font-bold py-4 rounded-xl shadow-lg transition-all duration-300 hover:bg-marine-dark hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Dispatch Inquiry →
            </button>
          </form>
        </div>

        <div className="space-y-8">
          
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100/70">
            <h3 className="text-2xl font-bold text-marine-dark mb-6 border-b pb-3">
              Direct Assistance
            </h3>
            
            <div className="space-y-6">
              
              <div className="flex items-start">
                <Phone className="text-accent-yellow h-7 w-7 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold text-marine-blue">Technical Support Line</p>
                  <a href="tel:+15551234567" className="text-gray-700 hover:text-accent-green transition duration-200 text-xl font-mono">
                    +1 (555) 123-4567
                  </a>
                  <p className="text-sm text-gray-500">Available 24/7 for urgent technical queries.</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-accent-yellow h-7 w-7 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold text-marine-blue">General Sales Email</p>
                  <a href="mailto:sales@navpro.com" className="text-gray-700 hover:text-accent-green transition duration-200 text-xl font-mono">
                    sales@navpro.com
                  </a>
                  <p className="text-sm text-gray-500">For quotes, orders, and partnership opportunities.</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-accent-yellow h-7 w-7 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold text-marine-blue">Headquarters</p>
                  <address className="text-gray-700 not-italic">
                    140 Seafarer Way, <br />
                    Marine City, CA 90210, USA
                  </address>
                </div>
              </div>

            </div>
          </div>

          <div className="h-72 bg-marine-blue rounded-3xl shadow-xl border border-gray-100/70 flex items-center justify-center overflow-hidden">
            <div className="text-center text-white p-8">
                <MapPin className="h-10 w-10 mx-auto mb-3 text-accent-yellow" />
                <h4 className="text-2xl font-bold mb-1">Visit Our Global Hub</h4>
                <p className="text-gray-200">Appointments required for in-person visits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}