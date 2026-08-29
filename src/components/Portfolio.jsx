import React, { useState } from 'react';
import { FiArrowRight, FiArrowLeft, FiCoffee, FiZap } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Portfolio = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: 'pnc-electrical',
      title: 'PNC Electrical Consultant',
      badge: 'Live',
      description:
        'A professional web presence designed to showcase electrical consulting services, completed projects, and industry expertise with a modern, clean interface.',
      icon: <FiCoffee size={20} />,
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
      icon: <FiZap size={20} />,
      image: 'https://res.cloudinary.com/yzd1fogr/image/upload/v1788009711/Screenshot_2026-08-29_185117.png',
      link: 'https://google.com', // Replace with actual link when ready
      cta: 'In Progress',
    },
  ];

  const handleCardClick = (index) => {
    if (!swiperInstance) return;
    if (swiperInstance.activeIndex !== index) {
      swiperInstance.slideTo(index);
    } 
  };

  return (
    <section id="portfolio" className="bg-white py-24 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-medium text-center text-gray-900 mb-16">
          Our Successful Client Deliveries
        </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-14 items-start">
        
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
              ref={setPrevEl}
              aria-label="Previous product"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors disabled:opacity-30 cursor-pointer"
            >
              <FiArrowLeft />
            </button>
            <button
              ref={setNextEl}
              aria-label="Next product"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors disabled:opacity-30 cursor-pointer"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* RIGHT: Swiper container */}
        <div className="min-w-0">
          {prevEl && nextEl && (
            <Swiper
              modules={[Navigation]}
              navigation={{ prevEl, nextEl }}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              slideToClickedSlide={true}
              observer={true}
              observeParents={true}
              slidesPerView={1.14}
              spaceBetween={24}
              breakpoints={{
                768: { slidesPerView: 1.6 },
                1024: { slidesPerView: 2.1 },
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.id} style={{ height: 'auto' }}>
                  <div
                    className="bg-white rounded-2xl border border-gray-200 shadow-[0_24px_48px_-28px_rgba(22,27,34,0.35)] p-3 h-full transition-opacity duration-300"
                    style={{ opacity: activeIndex === index ? 1 : 0.6 }}
                  >
                    {/* browser chrome bar */}
                    <div className="flex items-center gap-1.5 px-3 py-2">
                      <span className="w-2 h-2 rounded-full bg-gray-200" />
                      <span className="w-2 h-2 rounded-full bg-gray-200" />
                      <span className="w-2 h-2 rounded-full bg-gray-200" />
                    </div>

                    {/* image section */}
                    <div
                      onClick={() => handleCardClick(index)}
                      className="relative w-full h-52 md:h-64 rounded-2xl overflow-hidden cursor-pointer group"
                      style={{ backgroundColor: '#EAE9EE' }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover: transition-transform duration-500"
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
                        className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
                      >
                        {project.cta}
                        <FiArrowRight />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;