"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulated API call
    await new Promise((resolve) => setTimeout(resolve, 1400));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 5000);
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <motion.section
        className="max-w-7xl mx-auto bg-marine-blue text-white py-20 px-6 text-center shadow-2xl rounded-lg relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
      >
        {/* Background Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 -left-10 w-96 h-96 bg-accent-yellow rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-accent-green rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold mb-4">
            Join SEA CAST FISH Insider Club
          </h2>
          <p className="text-gray-200 mb-10 text-lg max-w-2xl mx-auto">
            Get instant access to new product launches, exclusive deals, and expert marine guides —{" "}
            <span className="text-accent-yellow font-bold">zero spam, ever.</span>
          </p>

          {/* Success Message */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-2xl"
            >
              <CheckCircle2 className="h-16 w-16 text-accent-yellow mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold mb-2">Welcome Aboard!</h3>
              <p className="text-gray-200">
                You've successfully joined the Insider Club.
              </p>
            </motion.div>
          ) : (
            /* Subscription Form */
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isLoading}
                  className="w-full pl-14 pr-6 py-2 bg-white rounded-full marine-blue placeholder-gray-500 focus:ring-4 focus:ring-accent-yellow focus:outline-none text-lg shadow-lg transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`bg-accent-yellow cursor-pointer text-gray-100 font-bold px-10 py-2 rounded-full text-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 ${
                  isLoading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="h-6 w-6 border-4 border-marine-blue/30 border-t-marine-blue rounded-full animate-spin"></div>
                    Subscribing...
                  </>
                ) : (
                  <>Subscribe Now</>
                )}
              </button>
            </form>
          )}

        </div>
      </motion.section>
    </section>
  );
}
