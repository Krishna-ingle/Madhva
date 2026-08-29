import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Services = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  const services = [
    {
      id: 'mobile-app',
      subtitle: 'MULTICHANNEL PLATFORM',
      title: 'Mobile Application',
      description: 'Build cross-platform mobile apps with smooth performance and a single codebase for Android and iOS. Skip the learning curve with intuitive tools.',
      linkText: 'Learn more',
      imageUrl: "https://res.cloudinary.com/yzd1fogr/image/upload/v1787944542/madhavaglobalMobilefeature_4.png",
    },
    {
      id: 'web-app',
      subtitle: 'SCALABLE ARCHITECTURE',
      title: 'Website App',
      description: 'Create responsive and interactive web apps with clean UI and scalable architecture. Work smarter and faster with optimized layouts.',
      linkText: 'Learn more',
      imageUrl: "https://res.cloudinary.com/yzd1fogr/image/upload/v1787905464/websitefeature_for_madhva_global.png",
    },
    {
      id: 'desktop-app',
      subtitle: 'ALL-IN-ONE-SOLUTION',
      title: 'Desktop Application',
      description: 'Build secure and powerful desktop applications for Windows and Mac with modern interfaces. Manage the entire user journey from one platform.',
      linkText: 'Learn more',
      imageUrl: "https://res.cloudinary.com/yzd1fogr/image/upload/v1787940975/DesktopApp.png",
    },
    
    {
      id: 'custom-software',
      subtitle: 'ENTERPRISE-GRADE',
      title: 'Custom Software',
      description: 'Create custom software solutions tailored to business needs using React, Spring Boot, and MongoDB. Built to scale with you as your business expands.',
      linkText: 'Sign up free',
      imageUrl: "https://res.cloudinary.com/yzd1fogr/image/upload/v1787944031/Custome_App.png",
    },
  ];

  const handleCardClick = (id) => {
    window.scrollTo(0, 0);
    if (id === 'custom-software') {
      navigate('/userform');
    } else {
      navigate(`/services/${id}`);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="services" className="bg-white font-sans relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <h2 className="text-3xl md:text-4xl font-medium text-center text-gray-900 mb-10">
          Our Services & Expertise
        </h2>
        
        <div className="flex flex-col lg:flex-row items-start relative">

          {/* LEFT: image stays fixed in view, just the image itself changes on scroll */}
          <div className="hidden lg:flex sticky top-32 w-1/2 h-[600px] justify-center items-center pb-24">
          
            <div className="w-full max-w-lg aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center relative shadow-sm">
              {services.map((service, idx) => (
                <img
                  key={`img-${service.id}`}
                  src={service.imageUrl}
                  alt={service.title}
                  /* CHANGED: object-cover is now object-contain */
                  className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-700 ease-in-out ${
                    activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: text scrolls normally, each block drives which image shows */}
          <div className="w-full lg:w-1/2 flex flex-col py-10 lg:py-0 lg:pl-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="flex flex-col items-start text-left min-h-[60vh] lg:min-h-[80vh] justify-center py-16"
              >
                <div className="w-full lg:hidden aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden mb-8 shadow-sm p-4">
                  {/* CHANGED: object-cover is now object-contain */}
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-contain" />
                </div>

                <h4 className="text-[13px] font-normal tracking-widest text-[#2f3030] uppercase mb-4">
                  {service.subtitle}
                </h4>
                <h2 className="text-4xl lg:text-[2.75rem] font-medium text-[#091F2C] mb-6 leading-[1.15]">
                  {service.title}
                </h2>
                <p className="text-lg text-[#40525C] mb-8 leading-relaxed max-w-md">
                  {service.description}
                </p>
                <button
                  onClick={() => handleCardClick(service.id)}
                  className="group inline-flex items-center gap-2 text-[#009250] font-bold text-base hover:underline underline-offset-4 decoration-2 transition-all cursor-pointer"
                >
                  {service.linkText}
                  <FiArrowRight className="text-xl transform transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;