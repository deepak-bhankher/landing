import React from "react";
import { motion } from "framer-motion";
import { Map, MousePointer2, ClipboardList, Radar } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Search",
    desc: "Search for the material near you",
    icon: Map,
    position: "lg:top-24 lg:left-0",
  },
  {
    number: "02",
    title: "Select",
    desc: "Select the material how much required",
    icon: MousePointer2,
    position: "lg:top-24 lg:right-0",
  },
  {
    number: "03",
    title: "Order",
    desc: "Place your order while selecting location",
    icon: ClipboardList,
    position: "lg:bottom-24 lg:left-0",
  },
  {
    number: "04",
    title: "Status",
    desc: "Check order status till the order in at your location",
    icon: Radar,
    position: "lg:bottom-24 lg:right-0",
  },
];

const Work = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      <div className="text-center mb-10 sm:mb-14">
        <p className="text-2xl sm:text-3xl text-neutral-900 font-medium">How it's</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900">Works</h2>
      </div>

      <div className="relative max-w-5xl mx-auto flex justify-center">
        {/* Phone image */}
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="/image3.png"
          alt="Apna Crusher app order flow"
          className="relative z-10 w-full max-w-[260px] sm:max-w-[300px] object-contain"
        />

        {/* Glass step cards */}
        <div className="lg:contents grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0 lg:absolute lg:inset-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`lg:absolute ${step.position} w-full lg:w-56 flex items-start gap-3 p-4 rounded-2xl
                  bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)]`}
              >
                <span className="shrink-0 w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">{step.number}</p>
                  <p className="text-base font-semibold text-neutral-900">{step.title}</p>
                  <p className="text-xs text-neutral-500 mt-0.5 leading-snug">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;