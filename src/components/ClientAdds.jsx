import React from 'react';

const ClientMarquee = () => {
  // Storing logos to easily duplicate them for the infinite loop
  const logos = (
    <>
      <span className="text-base md:text-xl font-bold font-serif whitespace-nowrap">NetBill</span>
      <span className="text-base md:text-xl font-bold tracking-tighter whitespace-nowrap">Miss Kala</span>
      <span className="text-base md:text-xl font-bold italic whitespace-nowrap">Pnc Electrical Consultant</span>
      <span className="text-base md:text-xl font-bold tracking-widest whitespace-nowrap">Shree Radhaswami Namkeen</span>
      <span className="text-base md:text-xl font-bold tracking-widest whitespace-nowrap">Rajnandini dairy</span>
      <span className="text-base md:text-xl font-bold tracking-widest whitespace-nowrap">Hotel Lakhdatar</span>
    </>
  );

  return (
    <section className="w-full mt-6 md:mt-10 py-6 md:py-10 border-y border-gray-100 font-sans overflow-hidden">
      
      {/* Keyframes for the scrolling animation */}
      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
          .animate-marquee {
            animation: infinite-scroll 35s linear infinite;
          }
        `}
      </style>

      {/* Added items-start for desktop alignment, keeping items-center for mobile */}
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
        
        {/* Left Side: Static Text */}
        <div className="w-full lg:w-[280px] shrink-0 text-left">
          <h3 className="text-lg md:text-xl font-medium text-[#091F2C] leading-tight uppercase tracking-wide">
            Madhava Global
          </h3>
          <p className="text-xs md:text-sm font-semibold mt-1 uppercase tracking-widest" style={{ color: '#539A21' }}>
            Clients And Products
          </p>
        </div>

        {/* Right Side: Scrolling Marquee with Fades */}
        <div className="w-full lg:flex-1 relative overflow-hidden flex items-center">
          
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Track */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] grayscale opacity-70 cursor-pointer">
            {/* Set 1 */}
            <div className="flex items-center gap-8 pr-8">
              {logos}
            </div>
            {/* Set 2 (for seamless loop) */}
            <div className="flex items-center gap-8 pr-8">
              {logos}
            </div>
          </div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;