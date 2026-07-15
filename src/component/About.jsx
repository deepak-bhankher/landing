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
          className="relative"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
            Everything at
            <br />
            <span className="font-extrabold  text-3xl sm:text-4xl lg:text-6xl">One Place</span>
          </h2>

          <p className="mt-4 text-neutral-500 text-sm sm:text-base leading-relaxed max-w-md">
            Find Verified Crushers, compare prices <br/> place orders and track
            deliveries – all in <br/>onne app
          </p>

          <a
            href="#"
            className="relative inline-block mt-2 text-sm font-medium text-neutral-900 underline underline-offset-4"
          >
            Learn more
          </a>
      <img
  src="/arrow.png"
  alt="Arrow"
  className="absolute top-8 left-20 lg:right-20 w-[200px] lg:w-[300px] pointer-events-none"
/>

          {/* Stats grid */}
          <div className="mt-16 grid grid-cols-2  text-center pb-6 gap-x-10 gap-y-8 max-w-md border-t bg-[#F5F5F5] rounded-2xl border-neutral-100 pt-6">
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