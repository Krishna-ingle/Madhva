import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiCpu, FiLayout, FiTarget } from 'react-icons/fi';
import { projectInfo } from '../assets/jsonData/ProjectData'; 
import '../assets/styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams(); 
  const navigate = useNavigate();

  const handleBack = () => {
  navigate('/#portfolio');
  
  setTimeout(() => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};

  const data = projectInfo[projectId] || projectInfo['smart-store'];
  console.log("Current Project ID from URL:", projectId);
  console.log("Imported Project Data:", projectInfo);


  if (!data) {
    return (
      <div className="container" style={{padding: '100px 0'}}>
        <h2>Project not found</h2>
        <button onClick={() => navigate('/portfolio')}>Back to Portfolio</button>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        <button className="back-link" onClick={handleBack}>
          <FiArrowLeft /> Back to Portfolio
        </button>

        <header className="project-header">
          <span className="project-badge" style={{ color: data.color }}>{data.category}</span>
          <h1 className="project-main-title">{data.title}</h1>
          <p className="project-subtitle">{data.subtitle}</p>
        </header>

        <div className="project-content-grid">
          <main className="project-main">
            <section className="project-section-block">
              <div className="section-label"><FiLayout /> Overview</div>
              <p className="overview-text">{data.overview}</p>
            </section>

            {data.sections?.map((section, idx) => (
              <section key={idx} className="project-section-block">
                <div className="section-label">
                   {section.heading}
                </div>
                <ul className="project-feature-list">
                  {section.items?.map((item, i) => (
                    <li key={i}><FiCheck className="check-icon" style={{color: data.colortik}} /> {item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </main>

          <aside className="project-sidebar">
            <div className="outcome-card">
              <h4>Outcome</h4>
              <p>{data.outcome}</p>
              <button className="contact-trigger-btn" onClick={() => navigate('/userform')}>
                Start similar project
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;