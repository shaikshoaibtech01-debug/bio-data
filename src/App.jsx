import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Play, Star, Code, Database, TestTube, Wrench } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const skills = {
    frontend: [
      { name: 'React.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Next.js', level: 80 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 70 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Webpack', level: 75 },
      { name: 'Vite', level: 85 },
      { name: 'CI/CD', level: 70 }
    ]
  };

  const projects = [
    {
      title: 'AI Interview Generator',
      description: 'An intelligent interview preparation platform that generates customized interview questions using AI, with real-time feedback and performance analytics.',
      technologies: ['React.js', 'TypeScript', 'OpenAI API', 'Firebase', 'TailwindCSS'],
      achievements: [
        'AI-powered question generation',
        'Real-time performance tracking',
        'Personalized feedback system',
        'Integration with major job platforms'
      ],
      metrics: {
        accuracy: { value: '92%', label: 'question relevance' },
        completion: { value: '85%', label: 'completion rate' },
        rating: { value: '4.8/5', label: 'user rating' }
      },
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'S-Cart E-commerce Platform',
      description: 'A comprehensive e-commerce solution built with React.js and TypeScript, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      technologies: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe API'],
      achievements: [
        '30% improvement in API response times',
        'Implemented secure payment gateway',
        'Real-time inventory tracking',
        'Mobile-responsive design'
      ],
      metrics: {
        performance: { value: '30%', label: 'faster loading' },
        security: { value: '70%', label: 'enhanced security' },
        satisfaction: { value: '95%', label: 'user satisfaction' }
      },
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isLoading, setIsLoading] = useState(false);

 const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Using Formspree service
      const response = await fetch('https://formspree.io/f/xnngawoy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      });

      if (response.ok) {
        alert('✅ Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Fallback to mailto if Formspree fails
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:shaikshoaibreal@gmail?subject=${subject}&body=${body}`;
      window.open(mailtoLink);
      
      alert('📧 Opening your email client as backup. Please send the message from there.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsLoading(false);
    }
  };
      
      // Fallback to mailto if EmailJS fails
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      );
      
  

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
      <style>{`
        .portfolio {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding: 1rem 0;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #8B5CF6, #F59E0B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          background: none;
          border: none;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #8B5CF6;
        }

        .download-btn {
          background: linear-gradient(135deg, #F59E0B, #F97316);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-section {
          background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #F59E0B 100%);
          min-height: 100vh;
          width:100vw;
          display: flex;
          align-items: center;
          padding-top: 80px;
          color: white;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .developer {
          color: #FED7AA;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-badges {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 0.75rem 1rem;
          border-radius: 2rem;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
        }

        .get-started-btn {
          background: linear-gradient(135deg, #F59E0B, #F97316);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .watch-intro-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
        }

        .profile-container {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .profile-image {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 4px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          object-fit: cover;
          object-position: center;
        }

        .profile-image-fallback {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FED7AA, #FDBA74);
          border: 4px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .experience-badge {
          position: absolute;
          top: 20px;
          left: -20px;
          background: rgba(255, 255, 255, 0.9);
          color: #333;
          padding: 1rem;
          border-radius: 1rem;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .experience-number {
          font-size: 1.5rem;
          font-weight: bold;
          color: #8B5CF6;
        }

        .improvement-badge {
          position: absolute;
          bottom: 20px;
          right: -20px;
          background: rgba(255, 255, 255, 0.9);
          color: #333;
          padding: 1rem;
          border-radius: 1rem;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .improvement-number {
          font-size: 1.5rem;
          font-weight: bold;
          color: #F59E0B;
        }

        .about-section {
          padding: 6rem 0;
          background: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #8B5CF6;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #1F2937;
        }

        .highlight {
          color: #8B5CF6;
        }

        .section-description {
          font-size: 1.1rem;
          color: #6B7280;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1F2937;
          margin-bottom: 1rem;
        }

        .about-paragraph {
          font-size: 1rem;
          color: #4B5563;
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .achievements {
          margin-top: 2rem;
        }

        .achievement-list {
          display: grid;
          gap: 0.5rem;
        }

        .achievement-item {
          font-size: 1rem;
          color: #4B5563;
          display: flex;
          align-items: center;
        }

        .about-stats {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .stat-card {
          background: linear-gradient(135deg, #F3F4F6, #E5E7EB);
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          color: #8B5CF6;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1F2937;
          margin-bottom: 0.5rem;
        }

        .stat-description {
          font-size: 0.9rem;
          color: #6B7280;
        }

        .skills-section {
          padding: 6rem 0;
          background: #F9FAFB;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .skill-icon {
          margin-bottom: 1rem;
        }

        .skill-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1F2937;
          margin-bottom: 1.5rem;
        }

        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .skill-bar {
          background: #E5E7EB;
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .projects-section {
          padding: 6rem 0;
          background: white;
        }

        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .project-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          background: #F9FAFB;
          padding: 3rem;
          border-radius: 1rem;
        }

        .project-image {
          width: 100%;
          height: 300px;
          border-radius: 0.5rem;
          object-fit: cover;
          object-position: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .project-title {
          font-size: 1.8rem;
          font-weight: bold;
          color: #1F2937;
          margin-bottom: 1rem;
        }

        .project-description {
          font-size: 1rem;
          color: #4B5563;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-technologies {
          margin-bottom: 1.5rem;
        }

        .project-subtitle {
          font-size: 1rem;
          font-weight: 600;
          color: #1F2937;
          margin-bottom: 0.5rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: #E0E7FF;
          color: #5B21B6;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .project-achievements {
          margin-bottom: 1.5rem;
        }

        .achievements-list {
          list-style: none;
          padding: 0;
        }

        .achievements-list-item {
          font-size: 0.9rem;
          color: #4B5563;
          margin-bottom: 0.25rem;
        }

        .project-metrics {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .metric-item {
          text-align: center;
        }

        .metric-value {
          font-size: 1.5rem;
          font-weight: bold;
          color: #8B5CF6;
        }

        .metric-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: #1F2937;
        }

        .metric-description {
          font-size: 0.7rem;
          color: #6B7280;
        }

        .project-buttons {
          display: flex;
          gap: 1rem;
        }

        .view-project-btn {
          background: linear-gradient(135deg, #8B5CF6, #7C3AED);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .source-code-btn {
          background: white;
          color: #374151;
          border: 1px solid #D1D5DB;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
        }

        .contact-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #F59E0B 100%);
          color: white;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .contact-description {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .contact-info {
          margin-bottom: 3rem;
        }

        .contact-info-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .contact-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .contact-value {
          font-size: 1rem;
          font-weight: 500;
        }

        .why-work-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .why-work-list {
          list-style: none;
          padding: 0;
        }

        .why-work-item {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          opacity: 0.9;
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .form-input {
          width: 100%;
          padding: 1rem;
          margin-bottom: 1rem;
          border: none;
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          box-sizing: border-box;
        }

        .form-textarea {
          width: 100%;
          padding: 1rem;
          margin-bottom: 1.5rem;
          border: none;
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          min-height: 120px;
          resize: vertical;
          font-family: inherit;
          box-sizing: border-box;
        }

        .send-message-btn {
          width: 100%;
          background: linear-gradient(135deg, #F59E0B, #F97316);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .send-message-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .footer {
          background: #1F2937;
          color: white;
          padding: 3rem 0;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .footer-tagline {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .footer-right {
          text-align: right;
        }

        .footer-copyright {
          font-size: 0.9rem;
          opacity: 0.8;
          margin-bottom: 0.25rem;
        }

        .footer-built {
          font-size: 0.8rem;
          opacity: 0.6;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .about-content {
            grid-template-columns: 1fr;
          }
          
          .contact-content {
            grid-template-columns: 1fr;
          }
          
          .project-card {
            grid-template-columns: 1fr;
          }
          
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Portfolio</div>
          <div className="nav-menu">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="nav-link"
                style={{
                  color: activeSection === item ? '#8B5CF6' : '#6B7280'
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
                 <button 
            className="download-btn"
            onClick={() => window.open('https://docs.google.com/document/d/15_cEH44KQ20vLFfpuCUqZ4dtTQkM7jVm/export?format=pdf', '_blank')}
          >
            Download CV
          </button>
        </div>
      </nav>

  
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
                Hello, I'm React
                <br />
                <span className="developer">Developer</span>
              </h1>
              <p className="hero-subtitle">
                Specialized in React.js & TypeScript with proven track record
                <br />
                of 30% API improvements and 70% security enhancements.
              </p>
              <div className="hero-badges">
                <div className="badge">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <span>2+ Years Experience</span>
                </div>
                <div className="badge">Best Customer Reviews</div>
              </div>
              <div className="hero-buttons">
                <button className="get-started-btn">Get Started →</button>
                <button className="watch-intro-btn">
                  <Play size={20} /> Watch Intro
                </button>
              </div>
            </div>
            <div className="hero-right">
              <div className="profile-container">
                <img 
                  src="https://i.postimg.cc/FzFHWHms/Screenshot-2025-09-11-002339.png" 
                  alt="Profile" 
                  className="profile-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="profile-image-fallback" style={{display: 'none'}}></div>
                <div className="experience-badge">
                  <div className="experience-number">2+</div>
                  <div>Years Experience</div>
                </div>
                <div className="improvement-badge">
                  <div className="improvement-number">30%</div>
                  <div>API Improvements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">ABOUT ME</div>
            <h2 className="section-title">
              Designing Solutions, <span className="highlight">Not Just Visuals</span>
            </h2>
            <p className="section-description">
              I am a professional React.js and TypeScript specialist with a growth mindset, dedicated
              to creating efficient, scalable, and secure web applications that drive business success.
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <h3 className="about-subtitle">Professional Summary</h3>
              <p className="about-paragraph">
                With over 8 years of experience in web development, I specialize in building modern,
                scalable applications using React.js and TypeScript. My proven track record includes
                significant performance improvements and security enhancements across various projects.
              </p>
              <p className="about-paragraph">
                I believe in continuous learning and staying updated with the latest technologies and best
                practices. My growth mindset drives me to constantly improve and deliver exceptional
                results for every project I work on.
              </p>
              
              <div className="achievements">
                <h3 className="about-subtitle">Key Achievements</h3>
                <div className="achievement-list">
                  <div className="achievement-item">✓ 30% API performance improvements</div>
                  <div className="achievement-item">✓ 70% security enhancements</div>
                  <div className="achievement-item">✓ 50+ Complete Projects</div>
                  <div className="achievement-item">✓ 2+ Years of Experience</div>
                  <div className="achievement-item">✓ Expertise in React, TypeScript, Node.js</div>
                  <div className="achievement-item">✓ Proven growth mindset and adaptability</div>
                </div>
              </div>
            </div>
            
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">30%</div>
                <div className="stat-label">API Improvements</div>
                <div className="stat-description">Performance optimization achievements</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">70%</div>
                <div className="stat-label">Security Enhancements</div>
                <div className="stat-description">Strengthened application security</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">TECHNICAL SKILLS</div>
            <h2 className="section-title">
              Complete <span className="highlight">Technical Stack</span>
            </h2>
            <p className="section-description">
              Organized expertise across frontend, backend, testing, and development tools with
              measurable proficiency levels.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-icon">
                <Code size={32} color="#8B5CF6" />
              </div>
              <h3 className="skill-title">Frontend Development</h3>
              <div className="skill-list">
                {skills.frontend.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: '#8B5CF6'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-icon">
                <Database size={32} color="#F59E0B" />
              </div>
              <h3 className="skill-title">Backend & Database</h3>
              <div className="skill-list">
                {skills.backend.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: '#F59E0B'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-icon">
                <Wrench size={32} color="#8B5CF6" />
              </div>
              <h3 className="skill-title">Tools & DevOps</h3>
              <div className="skill-list">
                {skills.tools.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: '#8B5CF6'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">FEATURED WORK</div>
            <h2 className="section-title">
              Project <span className="highlight">Showcases</span>
            </h2>
            <p className="section-description">
              Detailed highlights of S-Cart and AI Interview Generator with quantifiable
              achievements and technical implementations.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #8B5CF6, #F59E0B)';
                    e.target.style.display = 'block';
                  }}
                />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    <h4 className="project-subtitle">Technologies Used</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-achievements">
                    <h4 className="project-subtitle">Key Achievements</h4>
                    <ul className="achievements-list">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="achievements-list-item">→ {achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-metrics">
                    {Object.entries(project.metrics).map(([key, metric]) => (
                      <div key={key} className="metric-item">
                        <div className="metric-value">{metric.value}</div>
                        <div className="metric-label">{metric.label}</div>
                        <div className="metric-description">
                          {key === 'accuracy' ? 'Accuracy' : 
                           key === 'completion' ? 'Engagement' :
                           key === 'rating' ? 'Feedback' :
                           key === 'performance' ? 'Performance' :
                           key === 'security' ? 'Security' :
                           'User Exp'}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <button className="view-project-btn">View Project ↗</button>
                    <button className="source-code-btn">
                      <Github size={16} /> Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-left">
              <h2 className="contact-title">Let's Work Together</h2>
              <p className="contact-description">
                Ready to bring your project to life? I'm always excited to discuss new opportunities and
                challenges in React.js and TypeScript development.
              </p>

              <div className="contact-info">
                <h3 className="contact-info-title">Contact Information</h3>
                <div className="contact-item">
                  <Mail size={20} color="#8B5CF6" />
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">shaikshoaibreal@gmail.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={20} color="#8B5CF6" />
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">+91 9985625409</div>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin size={20} color="#8B5CF6" />
                  <div>
                    <div className="contact-label">Location</div>
                    <div className="contact-value">Hyderabad</div>
                  </div>
                </div>
              </div>

              <div className="why-work-section">
                <h3 className="why-work-title">Why Work With Me?</h3>
                <ul className="why-work-list">
                  <li className="why-work-item">• 2+ years of professional React.js experience</li>
                  <li className="why-work-item">• Proven track record of performance improvements</li>
                  <li className="why-work-item">• Growth mindset and continuous learning approach</li>
                  <li className="why-work-item">• End-to-end project delivery capabilities</li>
                </ul>
              </div>
            </div>

            <div className="contact-right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send a Message</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  required
                ></textarea>
                <button type="submit" className="send-message-btn" disabled={isLoading}>
                  {isLoading ? 'Sending... ⏳' : 'Send Message ✈'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">React Developer</div>
              <div className="footer-tagline">Building amazing web experiences with React.js & TypeScript</div>
            </div>
            <div className="footer-right">
              <div className="footer-copyright">© 2025 React Developer. All rights reserved.</div>
              <div className="footer-built">Built with React.js & TypeScript</div>
            </div>
          </div>
          <div className="social-links">
            <Github size={20} color="#6B7280" />
            <Linkedin size={20} color="#6B7280" />
            <Twitter size={20} color="#6B7280" />
            <Mail size={20} color="#6B7280" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;