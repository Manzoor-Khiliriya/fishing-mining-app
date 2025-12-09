// src/app/contact/ContactPageClient.jsx
"use client";

import { useState } from "react";
import { Mail, MapPin, CheckCircle2, Send } from "lucide-react";

export default function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate sending (replace with real API / EmailJS / Formspree later)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    // Auto-hide success message after 6 seconds + reset form
    setTimeout(() => {
      setIsSubmitted(false);
      e.target.reset();
    }, 6000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-gray-50 min-h-screen">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold marine-blue mb-4 leading-tight">
          Let's Set Sail Together
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Our specialized team of certified marine experts is ready to assist with technical support,
          quote requests, and expedition planning.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FORM */}
        <div className="relative">
          {/* Success Overlay */}
          {isSubmitted && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl animate-in fade-in duration-500">
              <div className="text-center p-10">
                <CheckCircle2 className="h-20 w-20 text-green-600 mx-auto mb-6 animate-bounce" />
                <h3 className="text-3xl font-bold marine-blue mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-lg text-gray-700">
                  Thank you! We'll reply within 24 hours.
                </p>
              </div>
            </div>
          )}

          <div className={`bg-white p-10 rounded-3xl shadow-2xl border border-gray-100/70 transition-opacity ${isSubmitted ? "opacity-30" : ""}`}>
            <h2 className="text-3xl font-bold marine-blue mb-8 border-b pb-4">
              Send Us an Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isLoading}
                    placeholder="Your name"
                    className="w-full p-4 border border-gray-300 rounded-xl shadow-inner focus:ring-2 focus:ring-marine-blue focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isLoading}
                    placeholder="you@example.com"
                    className="w-full p-4 border border-gray-300 rounded-xl shadow-inner focus:ring-2 focus:ring-marine-blue focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  disabled={isLoading}
                  className="w-full p-4 cursor-pointer border border-gray-300 rounded-xl shadow-inner bg-white focus:ring-2 focus:ring-marine-blue transition"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select inquiry type
                  </option>
                  <option value="quote">Product Quote Request</option>
                  <option value="support">Technical Support / Warranty</option>
                  <option value="partnerships">Dealer / Partnership Inquiry</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  disabled={isLoading}
                  placeholder="Tell us how we can help you at sea..."
                  className="w-full p-4 border border-gray-300 rounded-xl shadow-inner focus:ring-2 focus:ring-marine-blue focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || isSubmitted}
                className={`w-full cursor-pointer text-white text-xl font-bold py-5 rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all ${
                  isLoading || isSubmitted
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-marine-blue hover:bg-marine-dark hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="h-6 w-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-6 w-6" />
                    Dispatch Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100/70">
            <h3 className="text-2xl font-bold marine-blue mb-6 border-b pb-3">
              Direct Assistance
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-yellow-400 h-7 w-7 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold marine-blue">Email</p>
                  <a
                    href="mailto:info@seacastfish.com"
                    className="text-gray-700 hover:text-green-600 text-xl font-mono"
                  >
                    info@seacastfish.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-yellow-400 h-7 w-7 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold marine-blue">Headquarters</p>
                  <address className="text-gray-700 not-italic leading-relaxed">
                    Near Safeer Mall, Musaffah<br />
                    ME9, Abu Dhabi, UAE
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="h-72 bg-marine-blue rounded-3xl shadow-xl flex items-center justify-center relative overflow-hidden">
            <div className="text-center text-white z-10">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-yellow-400 animate-pulse" />
              <h4 className="text-2xl font-bold">Visit Our Global Hub</h4>
              <p className="text-gray-200 mt-2">By appointment only</p>
            </div>
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </div>
    </div>
  );
}