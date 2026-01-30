import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import '../assets/styles/Portfolio.css';

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 'smart-store',
      title: 'Smart Store',
      category: 'Mobile App',
      description: 'E-commerce mobile application with real-time inventory, secure payments, and personalized recommendations.',
      image: '🛍️',
      gradient: 'linear-gradient(135deg, #10B981, #059669)',
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
      stats: { downloads: '10K+', rating: '4.8', users: '5K+' }
    },
    {
      id: 'miss-klla',
      title: 'Miss Klla Website',
      category: 'Web',
      description: 'Modern, responsive business website with elegant design, smooth animations, and optimized performance.',
      image: '💻',
      gradient: 'linear-gradient(135deg, #34D399, #10B981)',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      stats: { pageviews: '50K+', speed: '98/100', uptime: '99.9%' }
    },
    {
      id: 'fintech-dashboard',
      title: 'FinTech Dashboard',
      category: 'Web App',
      description: 'Real-time financial analytics dashboard with advanced charting, data visualization, and reporting.',
      image: '📊',
      gradient: 'linear-gradient(135deg, #059669, #047857)',
      technologies: ['Next.js', 'TypeScript', 'D3.js', 'PostgreSQL'],
      stats: { transactions: '1M+', accuracy: '99.9%', users: '2K+' }
    },
    {
      id: 'health-tracker',
      title: 'Health Tracker App',
      category: 'Mobile App',
      description: 'Comprehensive health and fitness tracking app with workout plans, nutrition tracking, and progress analytics.',
      image: '💪',
      gradient: 'linear-gradient(135deg, #10B981, #34D399)',
      technologies: ['Flutter', 'Dart', 'Firebase', 'HealthKit'],
      stats: { workouts: '100K+', rating: '4.9', active: '8K+' }
    },
    {
      id: 'crm-system',
      title: 'Enterprise CRM',
      category: 'Software',
      description: 'Custom CRM solution with lead management, sales pipeline, automation, and advanced reporting.',
      image: '🏢',
      gradient: 'linear-gradient(135deg, #059669, #10B981)',
      technologies: ['React', 'Node.js', 'GraphQL', 'MySQL'],
      stats: { clients: '500+', efficiency: '+45%', revenue: '+60%' }
    },
    {
      id: 'food-delivery',
      title: 'Food Delivery Platform',
      category: 'Web + Mobile',
      description: 'Complete food delivery ecosystem with customer app, restaurant panel, and delivery management.',
      image: '🍔',
      gradient: 'linear-gradient(135deg, #34D399, #059669)',
      technologies: ['React Native', 'React', 'Express', 'Socket.io'],
      stats: { orders: '50K+', restaurants: '200+', rating: '4.7' }
    }
  ];

  const categories = ['All', 'Mobile App', 'Web', 'Web App', 'Software', 'Web + Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Our Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Showcasing our best work and successful client collaborations
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
              
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="portfolio-grid"
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Project Image/Icon */}
                <div 
                  className="project-image"
                  style={{ background: project.gradient }}
                >
                  <motion.div 
                    className="project-emoji"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.image}
                  </motion.div>
                  
                  {/* Overlay */}
                  <motion.div 
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button
                      className="view-project-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      View Details <FiArrowRight />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <div className="project-header">
                    <span className="project-category">{project.category}</span>
                    <FiExternalLink className="external-icon" />
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Technologies */}
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-badge">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  {/* Stats */}
                  {/* <div className="project-stats">
                    {Object.entries(project.stats).map(([key, value], idx) => (
                      <div key={idx} className="stat">
                        <span className="stat-value">{value}</span>
                        <span className="stat-label">{key}</span>
                      </div>
                    ))}
                  </div> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects CTA */}
        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>Interested in seeing more of our work?</p>
          <motion.button 
            className="view-all-btn"
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;