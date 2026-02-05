import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiArrowLeft, FiPlus, FiShoppingBag, FiFileText } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import hoverPattern from '../assets/images/hover-pattern1.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/styles/Portfolio.css';

const Portfolio = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const projects = [
    { 
      id: 'smart-store', 
      title: 'Smart Store', 
      description: 'Capture everything that is, was, or could be important.', 
      icon: <FiShoppingBag />, 
      iconColor: '#2db8f9' 
    },
    { 
      id: 'miss-kla', 
      title: 'MissKla', 
      description: 'Get further faster with ready-made note structures.', 
      icon: <FiFileText />, 
      iconColor: '#6c7fff' 
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Make the most of your ideas—and your time</h2>
          <p className="section-description" style={{marginTop:10}}>
            Capture everything that is, was, or could be important and access it whenever and wherever.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, 
          }}
          className="portfolio-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="modern-card" onClick={() => {
                navigate(`/project/${project.id}`);
                window.scrollTo(0, 0);
              }}>
                <div className="hover-img-container">
                  <img src={hoverPattern} alt="" className="bg-hover-img" />
                </div>
                
                <div className="card-top-content">
                  <div className="evernote-icon" style={{ color: project.iconColor }}>
                    {project.icon}
                  </div>
                  <h3 className="card-heading">{project.title}</h3>
                  <p className="card-para">{project.description}</p>
                </div>

                <div className="card-footer-arrow">
                  <FiArrowRight />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <div className="modern-card create-card" onClick={() => {
              navigate('/processdealpage');
              window.scrollTo(0, 0);
            }}>
              <div className="hover-img-container">
                <img src={hoverPattern} alt="" className="bg-hover-img" />
              </div>
              
              <div className="card-top-content">
                <div className="evernote-icon create-icon-style">
                  <FiPlus />
                </div>
                <h3 className="card-heading">Create Project</h3>
                <p className="card-para">Start your own journey and build something amazing with us.</p>
              </div>

              <div className="card-footer-arrow">
                <FiArrowRight />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="slider-controls">
          <button className="nav-btn" onClick={() => swiperRef.current?.slidePrev()}>
            <FiArrowLeft />
          </button>
          <button className="nav-btn" onClick={() => swiperRef.current?.slideNext()}>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;