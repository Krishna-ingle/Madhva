import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiArrowLeft, FiChevronRight } from 'react-icons/fi';
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../assets/styles/Portfolio.css';

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const swiperRef = useRef(null);

  const projects = [
    { id: 'smart-store', title: 'Smart Store', category: 'Mobile App', description: 'Capture everything that is, was, or could be important.', image: '🛍️', gradient: 'linear-gradient(135deg, #f0fdf4, #f0fdf4)' },
    { id: 'miss-klla', title: 'Template', category: 'Web', description: 'Get further faster with ready-made note structures.', image: '📋', gradient: 'linear-gradient(135deg, #f0f9ff, #f0f9ff)' },
    { id: 'health-tracker', title: 'Search', category: 'Mobile App', description: 'Find exactly what you’re looking for in seconds.', image: '🔍', gradient: 'linear-gradient(135deg, #fffbeb, #fffbeb)' },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Make the most of your ideas</h2>
          <p className="section-description">Capture everything that is important and access it whenever.</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="portfolio-swiper"
        >
          {filteredProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="modern-card" onClick={() => navigate(`/project/${project.id}`)}>
                <div className="card-icon" style={{ background: project.gradient }}>
                  {project.image}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows from your screenshot */}
        <div className="slider-controls">
          <button className="nav-btn prev" onClick={() => swiperRef.current?.slidePrev()}>
            <FiArrowLeft />
          </button>
          <button className="nav-btn next" onClick={() => swiperRef.current?.slideNext()}>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;