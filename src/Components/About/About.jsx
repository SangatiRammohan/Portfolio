import React, { useState, useEffect } from 'react';
import { Code, User, Book, Briefcase, Award, ArrowRight } from 'lucide-react';
import './About.css';
import resume from '../../assets/resume.pdf'

const About = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const tabs = [
    { id: 'education', label: 'Education', icon: <Book size={20} /> },
    { id: 'awards', label: 'Awards', icon: <Award size={20} /> },
  ];

  const education = [
    {
      degree: "Bachelor's of Technology in Electronics and Communication Engineering ",
      institution: 'Narsimhareddy Engineering College',
      period: '2020 - 2024',
      description: 'Bachelor’s in Electronics and Communication Engineering equipped me with knowledge in circuits, embedded systems, and communication technologies for real-world applications.'
    }
  ];

  const awards = [
    {
      title: 'Certificate of Completion',
      organization: "10000Coders",
      year: '2023',
      link:"https://drive.google.com/file/d/10fEmqNEXaOHUeX-B7DCdltsP4QqXD7rz/view?usp=drivesdk",
      description: 'Recognized for expertise in modern MERN STACK and best practices.'
    },
    {
      title: 'Certificate of Recognition',
      organization: "Amazon Web Services Training and Certification",
      year: '2023',
      link:"https://www.credly.com/badges/8caa4882-b899-415f-bdca-66fe920e8856/linked_in_profile",
      description: 'Recognized for expertise in modern AWS and best practices.'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4>{edu.degree}</h4>
                  <div className="timeline-info">
                    <span className="institution">{edu.institution}</span>
                    <span className="period">{edu.period}</span>
                  </div>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'awards':
        return (
          <div className="awards-container">
            {awards.map((award, index) => (
              <div key={index} className="award-item">
                <h4>{award.title}</h4>
                <div className="award-info">
                  <span className="organization">{award.organization}</span>
                  <span className="year">{award.year}</span>
                </div>
                
                <p>{award.description}</p>
                <a href={award.link} id="show-credentials" target="_blank"
                  rel="noopener noreferrer">Show Credentials</a>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="about-header">
          <h2>About Me</h2>
          <div className="divider"></div>
          <p className="about-intro">
            I'm a passionate full-stack developer with expertise in building modern, 
            responsive web applications. With a strong foundation in both frontend and 
            backend technologies, I enjoy creating elegant solutions to complex problems.
          </p>
        </div>

        <div className="about-content">
          <div className="profile-card">
            <div className="profile-image">
              <User size={64} />
            </div>
            <h3>Rammohan Sangati</h3>
            <p className="title">Full Stack Developer</p>
            <a href={resume} className="download-resume" target="_blank" rel="noopener noreferrer">
              Download Resume <ArrowRight size={16} />
            </a>
          </div>

          <div className="tabs-container">
            <div className="tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={activeTab === tab.id ? 'active' : ''}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            <div className="tab-content">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;