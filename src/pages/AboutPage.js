// src/pages/AboutPage.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Karena gambar berada di folder 'public/assets', kita tidak perlu mengimpornya.
// Cukup gunakan jalur absolut dari root (`/assets/...`).
const profileImages = [
  '/assets/FOTO-1.JPG',
  '/assets/FOTO-2.JPG',
  '/assets/FOTO-3.JPG'
];

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State untuk indeks gambar saat ini

  // useEffect untuk mengubah gambar setiap beberapa detik
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % profileImages.length // Loop kembali ke awal setelah gambar terakhir
      );
    }, 2000); // Ganti gambar setiap 5 detik (5000 milidetik)

    // Cleanup function: Hentikan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []); 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="about-me-section section-padding"
    >
      <div className="container">
        <motion.h2 variants={itemVariants} className="about-me-title">
          About Me
        </motion.h2>
        <div className="about-me-content">
          <div className="about-me-text">
            <motion.h3 variants={itemVariants} className="greeting">
              Hello, I'm
            </motion.h3>
            <motion.h1 variants={itemVariants} className="name">
              Muhammad Ilham
            </motion.h1>
            <motion.p variants={itemVariants} className="description">
              Sebagai lulusan S1 Teknik Informatika pada pengembangan web dan mobile, saya terus mengikuti perkembangan teknologi terkini untuk menghadirkan solusi yang relevan dan kompetitif. Dengan keahlian yang solid dalam beberapa framework dan bahasa pemrograman pada front-end dan back-end, saya siap berkontribusi dalam menciptakan produk digital yang inovatif dan sesuai dengan kebutuhan pasar.
            </motion.p>
            <motion.blockquote variants={itemVariants} className="quote">
              "Coffee is fuel, deadlines are alarms, and bugs are challenges. That's the life of a modern programmer."
            </motion.blockquote>

            <motion.div variants={itemVariants} className="about-me-buttons">
              <a href="/assets/CV ATS MUHAMMAD ILHAM (1).pdf" download className="btn btn-primary">
                Download CV
              </a>
              <a href="/portfolio" className="btn btn-secondary">
                View Projects
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="about-me-image-wrapper">
            <img 
              src={profileImages[currentImageIndex]} 
              alt="Muhammad Ilham" 
              className="profile-image" 
              key={currentImageIndex} // Key untuk memaksa re-render dan transisi jika diperlukan
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
