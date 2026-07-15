import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Verified Supplier's", value: "2,500+" },
  { label: "Cities Covered", value: "500+" },
  { label: "Order Delivered", value: "150K+" },
  { label: "Happy Client's", value: "130K+" },
];

const About = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2  items-center">
        {/* Left: phone + hand image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-start"
        >
          <img
            src="/image2.png"
            alt="Apna Crusher app on phone with hand holding gravel"
            className="w-full max-w-md lg:max-w-full object-contain"
          />
        </motion.div>

        {/* Right: content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight">
            Everything at
            <br />
            <span className="font-extrabold">One Place</span>
          </h2>

          <p className="mt-4 text-neutral-500 text-sm sm:text-base leading-relaxed max-w-md">
            Find Verified Crushers, compare prices place orders and track
            deliveries – all in onne app
          </p>

          <a
            href="#"
            className="relative inline-block mt-2 text-sm font-medium text-neutral-900 underline underline-offset-4"
          >
            Learn more
            <svg
              className="hidden sm:block absolute -right-16 -top-6 w-16 h-10 text-blue-500"
              viewBox="0 0 80 50"
              fill="none"
            >
              <path
                d="M2 2 C 40 2, 60 10, 70 40"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />
              <circle cx="70" cy="40" r="3" fill="currentColor" />
            </svg>
          </a>

          {/* Stats grid */}
          <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8 max-w-md border-t border-neutral-100 pt-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-xs sm:text-sm text-neutral-400 mb-1">
                  {stat.label}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-neutral-900">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;