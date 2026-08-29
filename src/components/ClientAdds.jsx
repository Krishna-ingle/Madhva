 import React from 'react';

const ClientMarquee = () => {
  // Storing logos to easily duplicate them for the infinite loop
  const logos = (
    <>
      <span className="text-xl font-bold font-serif whitespace-nowrap">NetBill</span>
      <span className="text-xl font-bold tracking-tighter whitespace-nowrap">Miss Kala</span>
      <span className="text-xl font-bold italic whitespace-nowrap">Pnc Electrical Consultant</span>
      <span className="text-xl font-bold tracking-widest whitespace-nowrap">Shree Radhaswami Namkeen</span>
      <span className="text-xl font-bold tracking-widest whitespace-nowrap">Rajnandini dairy</span>
      <span className="text-xl font-bold tracking-widest whitespace-nowrap">Hotel Lakhdatar</span>

    </>
  );

  return (
    <section className="w-full mt-10 py-10 border-y border-gray-100 font-sans">
      
      {/* Keyframes for the scrolling animation */}
      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
          .animate-marquee {
            animation: infinite-scroll 35s linear infinite ;
          }
        `}
      </style>

      <div className="max-w-[1200px] mx-auto lg:px-8 flex flex-col md:flex-row items-center">
        
        {/* Left Side: Static Text */}
        <div className="w-full md:w-1/4 lg:w-1/4 mb-6 md:mb-0 relative z-20 bg-white pr-4">
          <h3 className="text-xl font-medium text-[#091F2C] leading-tight uppercase tracking-wide">
            Madhava Global
          </h3>
          <p className="text-sm font-semibold mt-1 uppercase tracking-widest" style={{ color: '#539A21' }}>
            Clients And Products
          </p>
        </div>

        {/* Right Side: Scrolling Marquee with Fades */}
        <div className="w-full md:w-3/4 lg:w-3/4 relative overflow-hidden flex items-center">
          
          {/* Left Fade (Smokey White) */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Track */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] grayscale opacity-70 cursor-pointer">
            {/* Set 1 */}
            <div className="flex items-center gap-8">
              {logos}
              {logos}
            </div>
          </div>

          {/* Right Fade (Smokey White) */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;