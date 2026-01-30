import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowLeft, 
  FiExternalLink, 
  FiGithub, 
  FiCode, 
  FiServer, 
  FiDatabase,
  FiLayers,
  FiZap,
  FiShield,
  FiUsers,
  FiTrendingUp
} from 'react-icons/fi';
import '../assets/styles/ProjectDetail.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('frontend');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project Data
  const projectsData = {
    'smart-store': {
      title: 'Smart Store',
      tagline: 'Modern E-commerce Mobile Application',
      category: 'Mobile App',
      image: '🛍️',
      gradient: 'linear-gradient(135deg, #10B981, #059669)',
      description: 'A comprehensive e-commerce mobile application built with React Native, featuring real-time inventory management, secure payment integration, personalized product recommendations, and a seamless shopping experience.',
      challenge: 'The client needed a scalable e-commerce solution that could handle high traffic during sales events while providing a smooth user experience and real-time inventory updates across multiple warehouses.',
      solution: 'We developed a robust mobile application using React Native for cross-platform compatibility, implemented Firebase for real-time database synchronization, and integrated Stripe for secure payments. The app uses Redux for state management and includes features like push notifications, order tracking, and AR product preview.',
      results: [
        { metric: '10,000+', label: 'Downloads', icon: <FiUsers /> },
        { metric: '4.8/5', label: 'User Rating', icon: <FiTrendingUp /> },
        { metric: '5,000+', label: 'Active Users', icon: <FiZap /> },
        { metric: '99.9%', label: 'Uptime', icon: <FiShield /> }
      ],
      technologies: {
        frontend: [
          { name: 'React Native', description: 'Cross-platform mobile framework for iOS and Android', icon: '⚛️' },
          { name: 'Redux Toolkit', description: 'State management for complex app state', icon: '🔄' },
          { name: 'React Navigation', description: 'Routing and navigation library', icon: '🧭' },
          { name: 'Axios', description: 'HTTP client for API requests', icon: '📡' },
          { name: 'Styled Components', description: 'CSS-in-JS styling solution', icon: '💅' },
          { name: 'React Native Maps', description: 'Interactive maps for store locations', icon: '🗺️' }
        ],
        backend: [
          { name: 'Node.js', description: 'JavaScript runtime for server-side', icon: '🟢' },
          { name: 'Express.js', description: 'Web application framework', icon: '🚂' },
          { name: 'MongoDB', description: 'NoSQL database for product data', icon: '🍃' },
          { name: 'Firebase', description: 'Real-time database and authentication', icon: '🔥' },
          { name: 'Stripe API', description: 'Payment processing integration', icon: '💳' },
          { name: 'Redis', description: 'Caching layer for performance', icon: '⚡' },
          { name: 'AWS S3', description: 'Cloud storage for product images', icon: '☁️' },
          { name: 'Socket.io', description: 'Real-time order updates', icon: '🔌' }
        ]
      },
      features: [
        'User authentication with social login (Google, Facebook)',
        'Product browsing with advanced filters and search',
        'Shopping cart with real-time price updates',
        'Secure checkout with multiple payment options',
        'Order tracking with live status updates',
        'Push notifications for offers and order updates',
        'Wishlist and favorites management',
        'Product reviews and ratings system',
        'AR product preview (beta feature)',
        'Multi-language support (English, Hindi, Marathi)'
      ],
      architecture: {
        frontend: 'The frontend follows a modular component architecture with reusable UI components. We implemented Redux for centralized state management, ensuring consistent data flow across the app. React Navigation handles the routing with a stack-based navigation pattern.',
        backend: 'The backend uses a microservices architecture with separate services for authentication, products, orders, and payments. API Gateway routes requests to appropriate services. MongoDB stores product catalog and user data, while Redis caches frequently accessed data for optimal performance.',
        deployment: 'The app is deployed on Google Play Store and Apple App Store. Backend services run on AWS EC2 with auto-scaling enabled. CDN (CloudFront) delivers static assets globally. CI/CD pipeline using GitHub Actions automates testing and deployment.'
      },
      timeline: '3 months',
      client: 'RetailTech Solutions Pvt. Ltd.',
      liveUrl: 'https://play.google.com/store',
      githubUrl: 'https://github.com/Krishna-ingle/SmartStore'
    },
    'miss-klla': {
      title: 'Miss Klla Website',
      tagline: 'Modern Business Website',
      category: 'Web Development',
      image: '💻',
      gradient: 'linear-gradient(135deg, #34D399, #10B981)',
      description: 'A sleek, modern business website built with React and Tailwind CSS, featuring smooth animations, responsive design, and optimized performance for maximum engagement.',
      challenge: 'The client needed a professional web presence that would stand out in a competitive market while maintaining fast load times and excellent SEO performance.',
      solution: 'We crafted a custom React application with Framer Motion animations, implemented lazy loading for optimal performance, and integrated a headless CMS for easy content management. The site achieves a 98+ Lighthouse performance score.',
      results: [
        { metric: '50,000+', label: 'Monthly Visitors', icon: <FiUsers /> },
        { metric: '98/100', label: 'Performance Score', icon: <FiZap /> },
        { metric: '99.9%', label: 'Uptime', icon: <FiShield /> },
        { metric: '3.2s', label: 'Avg. Load Time', icon: <FiTrendingUp /> }
      ],
      technologies: {
        frontend: [
          { name: 'React.js', description: 'Modern UI library for building interactive interfaces', icon: '⚛️' },
          { name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: '🎨' },
          { name: 'Framer Motion', description: 'Production-ready animation library', icon: '✨' },
          { name: 'React Router', description: 'Client-side routing solution', icon: '🛣️' },
          { name: 'React Query', description: 'Data fetching and caching', icon: '🔍' },
          { name: 'TypeScript', description: 'Type-safe JavaScript', icon: '📘' }
        ],
        backend: [
          { name: 'Strapi CMS', description: 'Headless CMS for content management', icon: '📝' },
          { name: 'Node.js', description: 'JavaScript runtime environment', icon: '🟢' },
          { name: 'PostgreSQL', description: 'Relational database', icon: '🐘' },
          { name: 'Vercel', description: 'Deployment and hosting platform', icon: '▲' },
          { name: 'Cloudinary', description: 'Image optimization and delivery', icon: '🖼️' },
          { name: 'SendGrid', description: 'Email service for contact forms', icon: '📧' }
        ]
      },
      features: [
        'Responsive design optimized for all devices',
        'Smooth scroll animations and page transitions',
        'Dynamic content management via headless CMS',
        'Contact form with email notifications',
        'Blog section with rich text editor',
        'SEO optimized with meta tags and sitemap',
        'Google Analytics integration',
        'Social media integration',
        'Newsletter subscription',
        'Multi-page architecture with smooth routing'
      ],
      architecture: {
        frontend: 'Component-based architecture with React hooks for state management. Tailwind CSS provides utility classes for rapid UI development. Framer Motion handles all animations with GPU acceleration for smooth performance.',
        backend: 'Strapi headless CMS manages all content through a user-friendly admin panel. PostgreSQL database stores structured data. RESTful API endpoints serve data to the frontend with proper caching headers.',
        deployment: 'Hosted on Vercel with automatic deployments from GitHub. CDN edge network ensures fast global delivery. Images optimized and served through Cloudinary CDN.'
      },
      timeline: '2 months',
      client: 'Miss Klla Beauty & Wellness',
      liveUrl: 'https://missklla.vercel.app',
      githubUrl: '#'
    },
    // Add more projects following the same structure...
  };

  const project = projectsData[id];

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found</h1>
        <button onClick={() => navigate('/')}>Go Back Home</button>
      </div>
    );
  }

  const tabs = [
    { id: 'frontend', label: 'Frontend', icon: <FiCode /> },
    { id: 'backend', label: 'Backend', icon: <FiServer /> },
    { id: 'architecture', label: 'Architecture', icon: <FiLayers /> }
  ];

  return (
    <div className="project-detail-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="project-hero" style={{ background: project.gradient }}>
        <div className="container">
          <motion.button
            className="back-button"
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
          >
            <FiArrowLeft /> Back to Projects
          </motion.button>

          <motion.div
            className="project-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="project-category-badge">{project.category}</span>
            <h1 className="project-main-title">{project.title}</h1>
            <p className="project-tagline">{project.tagline}</p>
            
            <div className="project-hero-actions">
              <motion.a
                href={project.liveUrl}
                className="hero-btn primary"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink /> View Live
              </motion.a>
              <motion.a
                href={project.githubUrl}
                className="hero-btn secondary"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub /> View Code
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="project-hero-emoji"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.image}
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="project-info">
        <div className="container">
          <div className="info-grid">
            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Overview</h3>
              <p>{project.description}</p>
            </motion.div>

            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>Challenge</h3>
              <p>{project.challenge}</p>
            </motion.div>

            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="project-results">
        <div className="container">
          <h2 className="section-title">Results & Impact</h2>
          <div className="results-grid">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                className="result-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="result-icon">{result.icon}</div>
                <h3>{result.metric}</h3>
                <p>{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Tabbed Interface */}
      <section className="project-tech-stack">
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          
          {/* Tabs */}
          <div className="tech-tabs">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                className={`tech-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            className="tech-content"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'architecture' ? (
              <div className="architecture-content">
                <div className="arch-section">
                  <h3><FiCode /> Frontend Architecture</h3>
                  <p>{project.architecture.frontend}</p>
                </div>
                <div className="arch-section">
                  <h3><FiServer /> Backend Architecture</h3>
                  <p>{project.architecture.backend}</p>
                </div>
                <div className="arch-section">
                  <h3><FiDatabase /> Deployment Strategy</h3>
                  <p>{project.architecture.deployment}</p>
                </div>
              </div>
            ) : (
              <div className="tech-grid">
                {project.technologies[activeTab]?.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="tech-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(16, 185, 129, 0.15)' }}
                  >
                    <div className="tech-icon">{tech.icon}</div>
                    <h4>{tech.name}</h4>
                    <p>{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="project-features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="feature-bullet">✓</span>
                <p>{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="project-meta">
        <div className="container">
          <div className="meta-grid">
            <div className="meta-item">
              <h4>Timeline</h4>
              <p>{project.timeline}</p>
            </div>
            <div className="meta-item">
              <h4>Client</h4>
              <p>{project.client}</p>
            </div>
            <div className="meta-item">
              <h4>Category</h4>
              <p>{project.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="project-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to start your project?</h2>
            <p>Let's discuss how we can help bring your ideas to life</p>
            <motion.button
              className="cta-button"
              onClick={() => navigate('/#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;