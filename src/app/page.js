'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { marineProducts, marineBrands } from '@/app/lib/products';
import ProductCard from '@/app/components/ProductCard';
import { ArrowRight, Truck, ShieldCheck, LifeBuoy } from 'lucide-react';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const heroContentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

// Product Collection Section
const ProductCollection = ({ title, products }) => (
  <motion.section
    className="py-20"
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center mb-8 border-b border-gray-300 pb-3">
        <h2 className="text-4xl font-extrabold marine-blue">{title}</h2>
        <Link
          href="/products"
          className="text-lg font-semibold text-yellow-400 hover:marine-blue transition-colors duration-300"
        >
          View All <ArrowRight className="inline h-5 w-5 ml-1" />
        </Link>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={containerVariants}
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default function HomePage() {
  const bestSellers = marineProducts.filter(p => p.isBestSeller).slice(0, 4);
  const newArrivals = marineProducts.filter(p => p.isNew).slice(0, 4);

  return (
    <div>

      {/* 1 — HERO */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline src="/hero-video2.mp4" />
        <div className="absolute inset-0 bg-marine-blue/50 backdrop-blur-sm"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            className="text-gray-100 text-5xl md:text-6xl font-extrabold mb-6"
            initial="hidden" animate="visible" variants={heroContentVariants} custom={1}
          >
            CONQUER THE SEAS
          </motion.h1>
          <motion.p
            className="text-yellow-400 text-2xl font-semibold mb-6"
            initial="hidden" animate="visible" variants={heroContentVariants} custom={2}
          >
            Marine Gear Built for Professionals
          </motion.p>
          <motion.p
            className="max-w-4xl text-gray-200 text-xl mb-12"
            initial="hidden" animate="visible" variants={heroContentVariants} custom={3}
          >
            Experience unmatched performance and durability with globally trusted navigation,
            safety, and expedition equipment.
          </motion.p>
          <motion.div
            initial="hidden" animate="visible" variants={heroContentVariants} custom={4}
          >
            <Link href="/products" className="bg-accent-yellow text-white text-2xl font-bold py-4 px-14 rounded-full shadow-xl hover:bg-green-700 transition-all duration-300">
              Explore Products →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2 — NEW ARRIVALS (bg-white) */}
      <section className="bg-white">
        <ProductCollection title="✨ New Arrivals" products={newArrivals} />
      </section>

      {/* 3 — BEST SELLERS (bg-gray-50) */}
      <section className="bg-gray-50">
        <ProductCollection title="⭐ Best Sellers" products={bestSellers} />
      </section>

      {/* 4 — TOP BRANDS (bg-white) */}
      <section className="py-24 bg-white">
        <motion.section
          className="max-w-7xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold marine-blue mb-12 text-center">
            Top Brands We Distribute
          </h2>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-85"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {marineBrands.map(b => (
              <motion.img
                key={b.id}
                variants={itemVariants}
                src={b.logo}
                alt={b.name}
                className="h-16 w-auto grayscale hover:grayscale-0 transition transform hover:scale-105"
              />
            ))}
          </motion.div>
        </motion.section>
      </section>

      {/* 5 — VALUE PROPOSITIONS (bg-gray-50) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-bold text-yellow-400 uppercase tracking-widest">WHY CHOOSE US</span>
          <h2 className="text-4xl font-extrabold marine-blue mt-1 mb-16">
            Our Promises to the Professional Mariner
          </h2>

          <motion.section
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { title: 'Military-Grade Quality', desc: 'Built for extreme marine conditions, guaranteeing reliability on every voyage.', icon: <ShieldCheck className="h-10 w-10 text-yellow-400 mx-auto mb-4" /> },
              { title: 'Worldwide Express Delivery', desc: 'Fast, secure, and fully tracked international shipping to 100+ countries.', icon: <Truck className="h-10 w-10 text-yellow-400 mx-auto mb-4" /> },
              { title: '24/7 Marine Experts', desc: 'Dedicated technical support from certified marine specialists, anytime.', icon: <LifeBuoy className="h-10 w-10 text-yellow-400 mx-auto mb-4" /> },
            ].map((b, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white shadow-xl p-10 rounded-2xl border-t-4 border-accent-yellow hover:border-marine-blue transition transform hover:-translate-y-1"
              >
                {b.icon}
                <h3 className="text-2xl font-bold marine-blue mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </motion.div>
            ))}
          </motion.section>
        </div>
      </section>

      {/* 6 — NEWSLETTER (bg-white) */}
      <section className="py-24 bg-white">
        <motion.section
          className="max-w-7xl mx-auto bg-marine-blue text-white rounded-[3rem] py-20 px-10 text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <h2 className="text-4xl font-bold mb-3">Join NAV-PRO Insider Club</h2>
          <p className="text-gray-300 mb-10 text-lg">
            Get instant access to product launches, exclusive deals, & field expert guides — zero spam.
          </p>
          <form className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-2 bg-white rounded-full text-black placeholder-gray-500 focus:ring-4 focus:ring-accent-yellow text-lg"
            />
            <button
              type="submit"
              className="bg-accent-yellow text-gray-100 font-bold px-10 py-2 cursor-pointer rounded-full hover:bg-yellow-400 text-lg shadow-lg transition"
            >
              Subscribe
            </button>
          </form>
        </motion.section>
      </section>
    </div>
  );
}
