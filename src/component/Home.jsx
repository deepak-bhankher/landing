import React from "react";

const Home = () => {
  return (
    <section className="bg-white px-1 sm:px-2 lg:px-4 py-4">
      <div className="relative h-screen rounded-[28px] overflow-hidden shadow-lg">
        
        {/* Background Image */}
        <img
          src="/home.png"
          alt="Apna Crusher construction site"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 sm:px-8 lg:px-10">
          
          {/* Badge */}
          <div className="mb-5 px-5 py-2 bg-white rounded-full shadow">
            <span className="text-black text-sm font-medium">
              # 1st ( Apna Crusher )
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white font-extrabold uppercase leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-lg">
            INDIA'S
          </h1>

          <h2 className="mt-2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="font-bold">Trusted</span>{" "}
            <span className="font-light">Platform</span>
          </h2>

          <p className="mt-3 text-white text-xl sm:text-2xl md:text-3xl font-light">
            for Construction Material
          </p>

          {/* Store Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* Google Play */}
            <a
              href="#"
              className="flex items-center gap-3 bg-black rounded-xl px-5 py-3 border border-white/20 hover:scale-105 transition"
            >
              <GooglePlayIcon className="w-7 h-7" />
              <div className="text-left text-white">
                <p className="text-[10px]">GET IT ON</p>
                <p className="text-lg font-semibold">Google Play</p>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="flex items-center gap-3 bg-black rounded-xl px-5 py-3 border border-white/20 hover:scale-105 transition"
            >
              <AppleIcon className="w-7 h-7" />
              <div className="text-left text-white">
                <p className="text-[10px]">Download on the</p>
                <p className="text-lg font-semibold">App Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Google Play Icon */
const GooglePlayIcon = ({ className }) => (
  <svg
    viewBox="0 0 512 512"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M64 32 L64 480 L296 256 Z" fill="#4285F4" />
    <path d="M64 32 L296 256 L376 176 Z" fill="#34A853" />
    <path d="M64 480 L296 256 L376 336 Z" fill="#EA4335" />
    <path
      d="M376 176 L448 216 C468 227 468 285 448 296 L376 336 L296 256 Z"
      fill="#FBBC05"
    />
  </svg>
);

/* Apple Icon */
const AppleIcon = ({ className }) => (
  <svg
    viewBox="0 0 384 512"
    className={className}
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M318.7 268.7c-.3-56.1 45.9-83 48-84.4-26.2-38.3-66.9-43.6-81.4-44.2-34.7-3.5-67.7 20.4-85.3 20.4-17.6 0-44.8-19.9-73.6-19.3-37.9.6-72.9 22-92.4 55.9-39.4 68.3-10.1 169.5 28.3 224.9 18.8 27.1 41.2 57.5 70.6 56.4 28.4-1.1 39.1-18.4 73.4-18.4 34.3 0 44 18.4 73.9 17.8 30.5-.5 49.8-27.6 68.5-54.8 21.6-31.4 30.5-61.8 30.9-63.3-.7-.3-59.2-22.7-59.9-90zM255.1 108.1c15.7-19 26.3-45.5 23.4-71.9-22.6.9-49.9 15.1-66.1 34-14.5 16.8-27.3 43.9-23.9 69.6 25 1.9 50.5-12.7 66.6-31.7z" />
  </svg>
);

export default Home;