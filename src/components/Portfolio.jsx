import React, { useState, useRef } from 'react';
import { FiArrowRight, FiArrowLeft, FiCoffee, FiZap } from 'react-icons/fi';

const Portfolio = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: 'pnc-electrical',
      title: 'PNC Electrical Consultant',
      badge: 'Live',
      description:
        'A professional web presence designed to showcase electrical consulting services, completed projects, and industry expertise with a modern, clean interface.',
      image: 'https://res.cloudinary.com/yzd1fogr/image/upload/v1788009001/Screenshot_2026-08-29_183940.png',
      link: 'https://pnc-electrical-consultant.vercel.app/',
      cta: 'Explore Project',
    },
    {
      id: 'miss-kala',
      title: 'Miss Kala Trousseau',
      badge: 'New',
      description:
        'An elegant showcase platform for premium trousseau and gift packing services, featuring a visually rich gallery designed to attract high-end clientele.',
      image: 'https://res.cloudinary.com/yzd1fogr/image/upload/v1788009711/Screenshot_2026-08-29_185117.png',
      link: 'https://google.com',
      cta: 'In Progress',
    },
  ];

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[index];
      if (card) {
        container.scrollTo({
          left: card.offsetLeft - container.offsetLeft,
          behavior: 'smooth',
        });
        setActiveIndex(index);
      }
    }
  };

  const scroll = (direction) => {
    const newIndex = direction === 'left' 
      ? Math.max(activeIndex - 1, 0) 
      : Math.min(activeIndex + 1, projects.length - 1);
    scrollToIndex(newIndex);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      
      let closestIndex = 0;
      let minDistance = Infinity;

      Array.from(container.children).forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - container.offsetLeft - scrollLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    }
  };

  return (
    <section id="portfolio" className="bg-white py-24 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-medium text-center text-gray-900 mb-16">
          Our Successful Client Deliveries
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-14 items-start">
          
          {/* LEFT: pinned intro + arrows */}
          <div className="lg:sticky lg:top-24">
            <span
              className="inline-flex items-center gap-2 rounded-md px-4 py-1.5 text-sm font-medium text-gray-900 mb-6"
              style={{ backgroundColor: '#C4FFA8' }}
            >
              Our Portfolio
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Digital solutions built for your success
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
              Explore some of the high-performance websites and custom software we've crafted at Madhava Global to help our clients stand out online.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous product"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Next product"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>

          {/* RIGHT: Native Scroll Container with exact width percentage to show next card partially */}
          <div className="min-w-0 w-full overflow-hidden">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => scrollToIndex(index)}
                  className="snap-start flex-shrink-0 w-full md:w-[calc(75%)] bg-white rounded-2xl border border-gray-200 shadow-[0_24px_48px_-28px_rgba(22,27,34,0.35)] p-3 transition-all duration-300 cursor-pointer"
                  style={{ opacity: activeIndex === index ? 1 : 0.5 }}
                >
                  {/* browser chrome bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2">
                    <span className="w-2 h-2 rounded-full bg-gray-200" />
                    <span className="w-2 h-2 rounded-full bg-gray-200" />
                    <span className="w-2 h-2 rounded-full bg-gray-200" />
                  </div>

                  {/* image section */}
                  <div className="relative w-full h-52 md:h-64 rounded-2xl overflow-hidden bg-[#EAE9EE]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* content below image */}
                  <div className="px-3 pt-6 pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-[11px] font-semibold uppercase tracking-wide text-gray-900 px-2.5 py-1 rounded-md"
                        style={{ backgroundColor: '#C4FFA8' }}
                      >
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                      {project.cta}
                      <FiArrowRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;