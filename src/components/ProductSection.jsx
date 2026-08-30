import React, { useState, useRef, useEffect } from 'react';

const productData = [
  {
    id: "email",
    title: "NetBill For Restaurant",
    staticSrc: "https://res.cloudinary.com/yzd1fogr/image/upload/v1787991942/madhavaglobalproduct1.png",
    gifSrc: "https://res.cloudinary.com/yzd1fogr/image/upload/v1787991880/Scene-1_1.gif"
  },
  {
    id: "sms",
    title: "NetBill Instant Billing",
    staticSrc: "https://res.cloudinary.com/yzd1fogr/image/upload/v1788003488/Screenshot_2026-08-29_170337.png",
    gifSrc: "https://res.cloudinary.com/yzd1fogr/image/upload/v1788003377/Scene-2.gif"
  },
  {
    id: "whatsapp",
    title: "NetBill For Dealership",
    staticSrc: "https://res.cloudinary.com/yzd1fogr/image/upload/v1788014525/Screenshot_2026-08-29_201012.png",
    gifSrc: "https://res.cloudinary.com/yzd1fogr/image/upload/v1788014614/Scene-4.gif"
  },
  {
    id: "push",
    title: "NetBill For Jewellers",
    staticSrc: "https://res.cloudinary.com/yzd1fogr/image/upload/v1788005478/Screenshot_2026-08-29_173913.png",
    gifSrc: "https://res.cloudinary.com/yzd1fogr/image/upload/v1788005725/Scene-3.gif"
  },
  {
    id: "loyalty",
    title: "NetBill For Adat",
    staticSrc: "https://res.cloudinary.com/yzd1fogr/image/upload/v1788014782/Screenshot_2026-08-29_201118.png",
    gifSrc: "https://res.cloudinary.com/yzd1fogr/image/upload/v1788014843/Scene-5.gif"
  },
];

const ProductSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // States to track button visibility
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const scrollContainerRef = useRef(null);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; 
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="product" className="py-16 bg-white w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-medium text-center text-gray-900 mb-14">
          Live Products & Development
        </h2>

        <div className="relative">
          
          {/* Left Scroll Fade & Button */}
          {canScrollLeft && (
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none flex items-center justify-start pl-2 z-10">
              <button 
                onClick={() => scroll('left')}
                className="bg-gray-900 text-white p-3 rounded-xl pointer-events-auto hover:bg-gray-800 transition-colors hidden md:block shadow-lg"
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
            </div>
          )}

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef} 
            onScroll={checkScrollPosition}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar relative z-0"
          >
            {productData.map((product) => {
              const isHovered = hoveredCard === product.id;

              return (
                <div
                  key={product.id}
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onFocus={() => setHoveredCard(product.id)}
                  onBlur={() => setHoveredCard(null)}
                  tabIndex={0} 
                  className={`
                    relative flex-shrink-0 w-72 h-88 rounded-2xl p-6 cursor-pointer snap-start
                    transition-all duration-300 ease-in-out flex flex-col justify-between
                    bg-white outline-none border-2
                    ${
                      isHovered
                        ? 'border-[#539A21] shadow-md' 
                        : 'border-gray-100 hover:border-gray-200'
                    }
                  `}
                >
                  <h3 className="text-xl font-medium text-gray-900 leading-tight">
                    {product.title.split(' ').map((word, index) => (
                      <React.Fragment key={index}>
                        {word} <br />
                      </React.Fragment>
                    ))}
                  </h3>

                  <div className="w-full h-44 mt-auto relative flex items-end justify-center overflow-hidden">
                    {/* Static Image */}
                    <img
                      src={product.staticSrc}
                      alt={`${product.title} static`}
                      className={`max-h-full object-contain absolute transition-opacity duration-300 ${
                        isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                    />
                    {/* GIF Image */}
                    <img
                      src={product.gifSrc}
                      alt={`${product.title} animation`}
                      className={`max-h-full object-contain absolute transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Right Scroll Fade & Button */}
          {canScrollRight && (
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none flex items-center justify-end pr-2 z-10">
              <button 
                onClick={() => scroll('right')}
                className="bg-gray-900 text-white p-3 rounded-xl pointer-events-auto hover:bg-gray-800 transition-colors hidden md:block shadow-lg"
                aria-label="Scroll right"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default ProductSection;