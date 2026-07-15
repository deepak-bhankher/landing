import React from "react";

const Home = () => {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:h-[600px] rounded-3xl overflow-hidden">
      {/* Background Image */}
      <img
        src="/home.png"
        alt="Apna Crusher construction site"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        {/* Eyebrow pill */}
        <div className="mb-4 sm:mb-6 px-4 py-1.5 sm:px-5 sm:py-2 bg-white/95 rounded-full">
          <span className="text-black text-xs sm:text-sm font-medium tracking-wide">
            # 1st ( Apna Crusher )
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-white font-extrabold uppercase leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-lg">
          India&apos;s
        </h1>

        <h2 className="mt-1 sm:mt-2 flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
          <span className="font-bold text-white">Trusted</span>
          <span className="font-light text-white/95">Platform</span>
        </h2>

        <p className="mt-1 sm:mt-2 text-white/95 font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-md">
          for Construction Material
        </p>

        {/* Store badges */}
        <div className="mt-6 sm:mt-8 flex  xs:flex-row items-center gap-3 sm:gap-4">
          <a
            href="#"
            className="flex items-center gap-2.5 bg-black rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 hover:scale-105 transition-all duration-300"
          >
            <GooglePlayIcon className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
            <span className="flex flex-col items-start leading-tight text-white">
              <span className="text-[10px] sm:text-xs">GET IT ON</span>
              <span className="text-sm sm:text-lg font-semibold -mt-0.5">
                Google Play
              </span>
            </span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2.5 bg-black rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 hover:scale-105 transition-all duration-300 "
          >
            <AppleIcon className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
            <span className="flex flex-col items-start leading-tight text-white">
              <span className="text-[10px] sm:text-xs">Download on the</span>
              <span className="text-sm sm:text-lg font-semibold -mt-0.5">
                App Store
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

/* Original Google Play tricolor triangle icon (SVG, drawn from scratch) */
const GooglePlayIcon = ({ className }) => (
  <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M64 32 L64 480 L296 256 Z"
      fill="url(#gp-blue)"
    />
    <path
      d="M64 32 L296 256 L376 176 Z"
      fill="url(#gp-green)"
    />
    <path
      d="M64 480 L296 256 L376 336 Z"
      fill="url(#gp-red)"
    />
    <path
      d="M376 176 L448 216 C468 227 468 285 448 296 L376 336 L296 256 Z"
      fill="url(#gp-yellow)"
    />
    <defs>
      <linearGradient id="gp-blue" x1="64" y1="32" x2="296" y2="256" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00C3FF" />
        <stop offset="1" stopColor="#0A78FF" />
      </linearGradient>
      <linearGradient id="gp-green" x1="64" y1="32" x2="376" y2="176" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3BE28A" />
        <stop offset="1" stopColor="#00D07A" />
      </linearGradient>
      <linearGradient id="gp-red" x1="64" y1="480" x2="376" y2="336" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF5B4E" />
        <stop offset="1" stopColor="#E5382E" />
      </linearGradient>
      <linearGradient id="gp-yellow" x1="296" y1="216" x2="468" y2="256" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD24D" />
        <stop offset="1" stopColor="#FFB800" />
      </linearGradient>
    </defs>
  </svg>
);

/* Original Apple glyph icon (SVG, drawn from scratch) */
const AppleIcon = ({ className }) => (
  <svg viewBox="0 0 384 512" className={className} fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M318.7 268.7c-.3-56.1 45.9-83 48-84.4-26.2-38.3-66.9-43.6-81.4-44.2-34.7-3.5-67.7 20.4-85.3 20.4-17.6 0-44.8-19.9-73.6-19.3-37.9.6-72.9 22-92.4 55.9-39.4 68.3-10.1 169.5 28.3 224.9 18.8 27.1 41.2 57.5 70.6 56.4 28.4-1.1 39.1-18.4 73.4-18.4 34.3 0 44 18.4 73.9 17.8 30.5-.5 49.8-27.6 68.5-54.8 21.6-31.4 30.5-61.8 30.9-63.3-.7-.3-59.2-22.7-59.9-90zM255.1 108.1c15.7-19 26.3-45.5 23.4-71.9-22.6.9-49.9 15.1-66.1 34-14.5 16.8-27.3 43.9-23.9 69.6 25 1.9 50.5-12.7 66.6-31.7z" />
  </svg>
);

export default Home;