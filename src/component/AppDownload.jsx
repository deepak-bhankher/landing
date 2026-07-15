import React from "react";
import { motion } from "framer-motion";

const AppDownload = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-32 py-14 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto rounded-3xl bg-neutral-50 border border-neutral-100 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8  py-10 sm:py-14">
          {/* Left content */}
          <div className="text-center ml-32">
            <p className="text-4xl sm:text-5xl text-neutral-900 font-medium">
              Download the
            </p>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-neutral-900">
              App Now!
            </h2>
            <p className="mt-4 text-neutral-500 text-base sm:text-lg">
              Scan the QR code to download the <span className="font-semibold text-neutral-900">App</span>
            </p>

            <div className="mt-6 flex items-center  justify-center  gap-3">
              <a
                href="#"
                className="flex items-center gap-2  bg-black rounded-lg px-3.5 py-2 hover:scale-105 transition-all duration-300"
              >
                <GooglePlayIcon className="w-8 h-8 shrink-0" />
                <span className="flex flex-col items-start leading-tight text-white">
                  <span className="text-[9px]">GET IT ON</span>
                  <span className="text-sm font-semibold -mt-0.5">Google Play</span>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-black rounded-lg px-3.5 py-2 hover:scale-105 transition-all duration-300"
              >
                <AppleIcon className="w-8 h-8 shrink-0" />
                <span className="flex flex-col items-start leading-tight text-white">
                  <span className="text-[9px]">Download on the</span>
                  <span className="text-sm font-semibold -mt-0.5">App Store</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right: phone image with empty slot for scanner/QR */}
          <div className="relative shrink-0 w-[200px] sm:w-[300px] md:w-[500px]">
            <img
              src="/phone.png"
              alt="Phone frame showing QR code scanner"
              className="w-full h-auto object-contain select-none pointer-events-none block"
            />
            {/* Scanner centered over the phone screen.
                If it's off, tweak translate-y-[..%] below to nudge up/down */}
            <div className="absolute inset-0 flex items-center ml-28 justify-center">
              <img
                src="/scanner.png"
                alt="scanner"
                className="w-[250px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const GooglePlayIcon = ({ className }) => (
  <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M64 32 L64 480 L296 256 Z" fill="url(#gp-blue2)" />
    <path d="M64 32 L296 256 L376 176 Z" fill="url(#gp-green2)" />
    <path d="M64 480 L296 256 L376 336 Z" fill="url(#gp-red2)" />
    <path d="M376 176 L448 216 C468 227 468 285 448 296 L376 336 L296 256 Z" fill="url(#gp-yellow2)" />
    <defs>
      <linearGradient id="gp-blue2" x1="64" y1="32" x2="296" y2="256" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00C3FF" /><stop offset="1" stopColor="#0A78FF" />
      </linearGradient>
      <linearGradient id="gp-green2" x1="64" y1="32" x2="376" y2="176" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3BE28A" /><stop offset="1" stopColor="#00D07A" />
      </linearGradient>
      <linearGradient id="gp-red2" x1="64" y1="480" x2="376" y2="336" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF5B4E" /><stop offset="1" stopColor="#E5382E" />
      </linearGradient>
      <linearGradient id="gp-yellow2" x1="296" y1="216" x2="468" y2="256" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD24D" /><stop offset="1" stopColor="#FFB800" />
      </linearGradient>
    </defs>
  </svg>
);

const AppleIcon = ({ className }) => (
  <svg viewBox="0 0 384 512" className={className} fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M318.7 268.7c-.3-56.1 45.9-83 48-84.4-26.2-38.3-66.9-43.6-81.4-44.2-34.7-3.5-67.7 20.4-85.3 20.4-17.6 0-44.8-19.9-73.6-19.3-37.9.6-72.9 22-92.4 55.9-39.4 68.3-10.1 169.5 28.3 224.9 18.8 27.1 41.2 57.5 70.6 56.4 28.4-1.1 39.1-18.4 73.4-18.4 34.3 0 44 18.4 73.9 17.8 30.5-.5 49.8-27.6 68.5-54.8 21.6-31.4 30.5-61.8 30.9-63.3-.7-.3-59.2-22.7-59.9-90zM255.1 108.1c15.7-19 26.3-45.5 23.4-71.9-22.6.9-49.9 15.1-66.1 34-14.5 16.8-27.3 43.9-23.9 69.6 25 1.9 50.5-12.7 66.6-31.7z" />
  </svg>
);

export default AppDownload;