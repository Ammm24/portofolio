// src/pages/PortfolioPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PortfolioPage.css'; // Import file CSS khusus untuk halaman ini

// Data dummy untuk Projects, Certificates, dan Tech Stack
const projects = [
  {
    title: 'AYO-Realive',
    description: 'Website yang bertujuan untuk menghubungkan masyarakat yang ingin memberikan bantuan kepada mereka yang membutuhkan. Fokus utama dari "AYO Relieve" adalah membantu penyandang disabilitas dan masyarakat lain yang membutuhkan dukungan..',
    link: 'https://ayo-relieve-world.netlify.app/',
    image: '../../assets/e-complaint.jpg',
  },
  {
    title: 'E-Complaint Berbasis Mobile',
    description: 'sebuah sistem atau aplikasi berbasis teknologi yang dirancang untuk memfasilitasi proses penyampaian keluhan, saran, atau kritik secara online pada pemerintah di batam.',
    link: 'https://github.com/Capstone-Tim-15/e-complaint-mobile',
    image: '../../assets/mobile-e-complaint.JPG',
  },
  {
    title: 'Aplikasi E-Taylor Berbasis Mobile',
    description: 'sebuah platform digital yang berfungsi sebagai jembatan antara pelanggan dan penyedia jasa penjahit, mirip dengan konsep e-commerce atau marketplace untuk layanan menjahit..',
    link: 'https://github.com/reonaldi152/E-Tailor_FrontEnd',
    image: '../../assets/E-TAYLOR.JPG',
  },
  {
    title: 'Aplikasi Dana Usaha Berbasis Mobile',
    description: 'Sebuah aplikasi yang dirancang untuk membantu pengelolaan dan operasional dana usaha (danus) yang dilakukan oleh suatu himpunan, organisasi mahasiswa, atau komunitas.',
    link: 'https://github.com/Ammm24/DanusAPP',
    image: '../../assets/Dana Usaha.png',
  },
];

const certificates = [
  {
    name: 'WEB Development Without React JS',
    issuer: 'Skilvul',
    date: '16 agustus - 21 desember 2022',
    image: '../../assets/Skilvul-WebDevelopment.JPG',
  },
  {
    name: 'Juara 3 WEB Development Without React JS',
    issuer: 'Skilvul',
    date: '16 agustus - 21 desember 2022',
    image: '../../assets/Skilvul Achievment.JPG',
  },
  {
    name: 'Complete Mobile Engineer With Flutter',
    issuer: 'Skilvul',
    date: '14 agustus - 31 desember 2023',
    image: '../../assets/Sertif Alterra.JPG',
  },
];

// Data Tech Stack dengan path gambar langsung dari public/assets
const techStack = [
  { name: 'HTML', icon: '/assets/HTML.png' },
  { name: 'CSS', icon: '/assets/CSS.png' },
  { name: 'React JS', icon: '/assets/ReactJS.png' },
  { name: 'Fillament', icon: '/assets/Filament.png' },
  { name: 'Flutter', icon: '/assets/Flutter.png' },
  { name: 'Github', icon: '/assets/github.png' },
  { name: 'Node JS', icon: '/assets/NodeJS.png' },
  { name: 'Bootstrap', icon: '/assets/Bootstrap.jpg' },
  { name: 'Golang', icon: '/assets/Golang.png' },
  { name: 'Visual Studio Code', icon: '/assets/vscode.jpg' },
];

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return (
          <motion.div
            key="projects-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="projects-grid"
          >
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="project-card"
              >
                <img src={project.image} alt={project.title} className="project-card-image" />
                <div className="project-card-content">
                  <h3>{project.title}</h3>
                </div>
              </motion.a>
            ))}
          </motion.div>
        );
      case 'certificates':
        return (
          <motion.div
            key="certificates-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="certificates-grid"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="certificate-card"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="certificate-card-image"
                  style={{ cursor: 'pointer' }}
                  onClick={() => openModal(cert.image)}
                />
                <div className="certificate-card-content">
                  <h3>{cert.name}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="date">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'tech-stack':
        return (
          <motion.div
            key="tech-stack-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="tech-stack-cards-container"
          >
            {techStack.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="tech-stack-card"
              >
                <img src={item.icon} alt={item.name} className="tech-stack-icon" />
                <span>{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="portfolio-showcase-section section-padding text-center"
    >
      <div className="container">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="portfolio-showcase-title"
        >
          Portfolio Showcase
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="portfolio-showcase-subtitle"
        >
          Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="tab-navigation"
        >
          <button
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <span className="tab-icon">&lt;&gt;</span> Projects
          </button>
          <button
            className={`tab-button ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificates')}
          >
            <span className="tab-icon">&#x1F393;</span> Certificates
          </button>
          <button
            className={`tab-button ${activeTab === 'tech-stack' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech-stack')}
          >
            <span className="tab-icon">&#x2328;</span> Tech Stack
          </button>
        </motion.div>

        <div className="tab-content">
          {renderContent()}
        </div>

        {isModalOpen && (
          <div className="certificate-modal" onClick={closeModal}>
            <img src={modalImage} alt="Certificate Large" className="certificate-modal-image" />
            <button className="modal-close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default PortfolioPage;