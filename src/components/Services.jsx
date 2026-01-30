import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiMonitor, FiShoppingCart, FiCode, FiLayout, FiDatabase } from 'react-icons/fi';
import '../assets/styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <FiSmartphone />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps built with React Native, Flutter, and Swift. Optimized for performance and user experience.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      color: '#10B981'
    },
    {
      icon: <FiMonitor />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications using cutting-edge technologies. Fast, scalable, and SEO-optimized.',
      technologies: ['React', 'Node.js', 'Next.js', 'TypeScript'],
      color: '#059669'
    },
    {
      icon: <FiShoppingCart />,
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions with payment integration, inventory management, and analytics dashboard.',
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
      color: '#34D399'
    },
    {
      icon: <FiCode />,
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your business needs. From CRM to automation tools.',
      technologies: ['Python', 'Java', 'PostgreSQL', 'AWS'],
      color: '#10B981'
    },
    {
      icon: <FiLayout />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that delight users. From wireframes to high-fidelity prototypes.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      color: '#059669'
    },
    {
      icon: <FiDatabase />,
      title: 'Backend Development',
      description: 'Robust, scalable backend systems with RESTful APIs, GraphQL, and microservices architecture.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis'],
      color: '#34D399'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Card Glow Effect */}
              <div className="card-glow" style={{ background: `radial-gradient(circle at top, ${service.color}20, transparent)` }}></div>
              
              {/* Icon */}
              <motion.div 
                className="service-icon"
                style={{ background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ color: service.color }}>
                  {service.icon}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              {/* Technologies */}
              <div className="service-tech">
                {service.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <motion.a 
                href="#contact" 
                className="service-link"
              >
                Learn More →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Need a custom solution?</h3>
          <p>Let's discuss your project and create something amazing together</p>
          <motion.button 
            className="cta-button"
            whileTap={{}}
          >
            Schedule a Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;