import React from "react";

const Home = () => {
  return (
    <section className="bg-white px-1 sm:px-2 lg:px-4 py-4">
      <div className="relative h-screen  overflow-hidden shadow-lg">
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
          <h1 className="text-white font-bold  text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">
          India`s  1st Marketplace for <br/> High-Quality Stone Aggregates
          </h1>


          <p className="mt-3 text-white text-xl sm:text-2xl md:text-3xl font-light">
            for Construction Material
          </p>

          {/* Store Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* Google Play */}

            {/* Store Buttons */}

            {/* Google Play */}
            <a
              href="#"
              
            >
              <img
                src="/play.png"
                alt="Google Play"
                className="h-16 w-[220px] rounded-xl transition-all duration-300  hover:scale-105 "
              />
            </a>

            {/* App Store */}
            <a
              href="#"
          
            >
              <img
                src="/apple.png"
                alt="App Store"
                   className="h-16 w-[220px] rounded-xl transition-all duration-300  hover:scale-105 "
              />

            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
