import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const words = ['Digital Solutions', 'Custom Software', 'Web Application', 'Mobile Application'];

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out / slide up
      setIsAnimating(false);

      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(true); // Trigger fade in / slide down
      }, 300); // Matches half of the transition duration

    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    navigate('/processdealpage');
  };

  const goToProject = () => {
    navigate('/project/smart-store');
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full relative overflow-x-hidden font-sans">

      {/* GREEN BACKGROUND SECTION - Notice the rounded bottom (rounded-b-[60px]) */}
      <section id="home" className="relative w-full pt-40 pb-20 lg:pb-32 bg-[#C0FFA5] rounded-bl-[40px] lg:rounded-bl-[60px]">

        {/* Main Content Container - Keeps text properly aligned */}
        <div className="max-w-[1400px] w-full px-6 mx-auto flex flex-col lg:flex-row relative z-10">

          {/* Left Content (Text) */}
          <div className="w-full lg:w-[50%] xl:w-[45%] text-center lg:text-left z-20">
            {/* Brevo-style Heading Layout */}
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3rem] font-medium text-[#1a1a1a] leading-[1.1] tracking-tight min-h-[140px] lg:min-h-[180px]">
              Turn Every Idea <br />
              into{' '}
              <span
                className={`inline-block transition-all duration-300 transform ${isAnimating
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4'
                  }`}
                style={{ color: '#1a1a1a' }}
              >
                {words[wordIndex]}
              </span>
            </h1>

            <p className="text-lg text-[#1a1a1a] max-w-[480px] mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              Run your operations and grow your business with simple, powerful digital platforms. From vendor management to customer loyalty.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10">
              <button
                onClick={handleNavigation}
                className="w-full sm:w-auto bg-[#1a1a1a] text-white px-8 py-4 rounded-md text-base font-semibold hover:bg-gray-800 transition-all"
              >
                Just 1 Minute
              </button>
              {/* <button
                onClick={goToProject}
                className="w-full sm:w-auto bg-transparent text-[#1a1a1a] border border-[#1a1a1a] px-8 py-4 rounded-xl text-base font-semibold hover:bg-white transition-all"
              >
                Watch live demo
              </button> */}
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2">
              <p className="text-sm font-medium text-[#1a1a1a]">Loved by users everywhere</p>
              <div className="flex items-center gap-3 bg-transparent px-4 py-2 border border-[#1a1a1a] rounded-full w-fit">
                <span className="font-bold text-base text-[#1a1a1a]">G 4.5</span>
                <div className="flex text-[#1a1a1a] text-sm gap-0.5">
                  ★★★★<span>★</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION - Absolutely positioned to touch the right edge */}
        <div className="w-full mt-12 lg:mt-0 lg:absolute lg:right-0 lg:top-[55%] lg:-translate-y-1/2 lg:w-[55vw] max-w-[800px] z-[5]">
          <div
            className="relative cursor-pointer w-full"
          >
            {/* The image now stretches completely to the right */}
            <img
              src="https://res.cloudinary.com/yzd1fogr/image/upload/v1787932879/MadhvaGlobalLandingPageBanner_2.png"
              alt="Madhava Global product preview"
              className="w-full h-auto object-contain lg:object-right lg:scale-110 origin-right block drop-shadow-md"
            />
          </div>
        </div>
      </section>

      {/* WHITE BOTTOM SECTION - Logos
      <div className="max-w-[1400px] w-full px-6 mx-auto mt-16 pb-20 flex flex-col lg:flex-row items-center justify-between gap-10 bg-white">
        <p className="text-[#1a1a1a] font-semibold text-xl lg:max-w-xs text-center lg:text-left leading-snug">
          Join 600,000+ customers around the world who trust Madhava Global
        </p>
        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-10 lg:gap-16 grayscale">
          <span className="text-3xl font-bold font-serif">IKEA</span>
          <span className="text-3xl font-bold tracking-tighter">Feu Vert</span>
          <span className="text-3xl font-bold italic">MICHELIN</span>
          <span className="text-3xl font-bold tracking-widest">NESTLE</span>
        </div>
      </div> */}

    </div>
  );
};

export default Hero;