import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  { label: "Verified Supplier's", value: "2,500+" },
  { label: "Cities Covered", value: "500+" },
  { label: "Order Delivered", value: "150K+" },
  { label: "Happy Client's", value: "130K+" },
];

// Hand images layered on top of the fixed phone image — these swap
// every 2s while the phone underneath stays completely still.
const handImages = ["/hand1.png", "/hand2.png","/hand3.png","/hand4.png","/hand5.png","/hand6.png","/hand7.png","/hand8.png"];

const About = () => {
  const [activeHand, setActiveHand] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHand((prev) => (prev + 1) % handImages.length);
    }, 2000); // swap every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-14 sm:py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left: phone image — deliberately NOT inside the max-w-7xl mx-auto
            wrapper below. This column is a direct grid child of a full-width
            (100vw) row, so on lg+ screens it always starts flush against the
            true left edge of the viewport, no matter how wide the window is
            (Mac, ultra-wide monitor, whatever). Don't wrap this column in a
            max-w-7xl/mx-auto container again or the left-edge alignment breaks. */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center lg:justify-start mb-24 sm:mb-20 lg:mb-0"
        >
          {/* Phone — fixed, never animates/swaps */}
          <img
            src="/Iphone.png"
            alt="Apna Crusher app on phone"
            className="w-full max-w-md lg:max-w-full h-[320px] sm:h-[370px] lg:h-[450px] object-contain"
          />

          {/* Hand — swaps between hand1.png / hand2.png every 2s,
              stays put on top of the phone and crossfades in place
              (opacity only, no slide). Layered over the phone.
              The hand+gravel image is taller than the phone itself, so it
              spills below the phone's box on purpose — the `mb-*` above
              on the parent reserves that extra room so it never overlaps
              the heading text underneath, at any screen size.
              POSITION: `top` / `left` below control placement — tune per
              breakpoint if it still looks off on a given screen size.
              SIZE: `w-[..]` below controls hand size per breakpoint. */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-[78%] sm:w-[80%] lg:w-[75%]"
              style={{ top: "22%", left: "0%" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={handImages[activeHand]}
                  src={handImages[activeHand]}
                  alt="Hand holding gravel"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full mt-24 h-auto object-contain"
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Right: content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative text-center lg:text-left w-full max-w-2xl mx-auto lg:mx-0 px-6 lg:pl-4 lg:pr-16 xl:pr-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
            Everything at
            <br />
            <span className="font-extrabold  text-3xl sm:text-4xl lg:text-6xl">One Place</span>
          </h2>

          <p className="mt-4 text-neutral-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
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
          <div className="mt-16 grid grid-cols-2  text-center pb-6 gap-x-10 gap-y-8 max-w-md mx-auto lg:mx-0 border-t bg-[#F5F5F5] rounded-2xl border-neutral-100 pt-6">
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