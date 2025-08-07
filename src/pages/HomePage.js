// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Teks lengkap untuk efek mengetik, sekarang dengan <br />
  // Pastikan teks ini sudah diformat dengan <br /> di tempat yang Anda inginkan
  const fullDescriptionText = `MMerancang dan membangun pengalaman digital<br />dengan fokus pada pengembangan aplikasi dan website<br />yang interaktif, responsif, dan berorientasi pada User.`;

  const [displayedDescriptionText, setDisplayedDescriptionText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  // State untuk memicu restart pengetikan
  const [restartTypingTrigger, setRestartTypingTrigger] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let typingTimeoutId;
    let cursorIntervalId;
    let loopTimeoutId; // Timeout untuk memulai loop baru

    // Fungsi untuk menampilkan karakter satu per satu
    const typeCharacter = () => {
      if (charIndex < fullDescriptionText.length) {
        setDisplayedDescriptionText((prevText) => prevText + fullDescriptionText.charAt(charIndex));
        charIndex++;
        typingTimeoutId = setTimeout(typeCharacter, 150); // Kecepatan mengetik (50ms per karakter)
      } else {
        // Teks selesai diketik
        // Mulai kursor berkedip
        cursorIntervalId = setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 800); // Kecepatan kedip kursor

        // Setelah jeda, picu pengetikan ulang
        loopTimeoutId = setTimeout(() => {
          clearInterval(cursorIntervalId); // Hentikan kedip kursor
          setShowCursor(true); // Pastikan kursor terlihat saat memulai siklus baru
          setRestartTypingTrigger(prev => prev + 1); // Picu useEffect untuk berjalan lagi
        }, 3000); // Jeda sebelum mengetik ulang (3 detik)
      }
    };

    // Reset state dan mulai pengetikan saat useEffect dijalankan
    setDisplayedDescriptionText("");
    setShowCursor(true); // Pastikan kursor terlihat di awal siklus
    typeCharacter(); // Panggil fungsi untuk memulai pengetikan

    // Fungsi cleanup untuk membersihkan semua interval dan timeout
    // Ini akan dipanggil setiap kali `useEffect` akan dijalankan ulang (karena `restartTypingTrigger` berubah)
    // atau saat komponen di-unmount.
    return () => {
      clearTimeout(typingTimeoutId);
      clearInterval(cursorIntervalId);
      clearTimeout(loopTimeoutId);
    };
  }, [restartTypingTrigger, fullDescriptionText]); // Efek akan berjalan ulang ketika restartTypingTrigger berubah

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
      className="home-hero-section" // Kelas baru untuk bagian hero home
    >
      <div className="container home-hero-content">
        <div className="home-hero-text">
          {/* Teks "Hi, I'm" baru ditambahkan di sini */}
          <motion.p variants={itemVariants} className="greeting-text">
            Hi, I'm
          </motion.p>
          <motion.h1 variants={itemVariants} className="main-title">
            Frontend <br /> Developer
          </motion.h1>
          {/* Menggunakan dangerouslySetInnerHTML untuk merender <br /> */}
          <motion.p
            className="description"
            // Menggabungkan teks yang diketik dengan kursor berkedip
            dangerouslySetInnerHTML={{ __html: displayedDescriptionText + (showCursor ? '<span class="typing-cursor">|</span>' : '') }}
          >
          </motion.p>
          <motion.p>
            Dengan menggunakan
          </motion.p>
          <motion.div variants={itemVariants} className="tech-badges">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Flutter</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Laravel Fillament</span>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-buttons">
            <Link to="/portfolio" className="btn btn-hero-primary">
              Projects <span className="icon">&#x2192;</span>
            </Link>
            <Link to="/contact" className="btn btn-hero-secondary">
              Contact <span className="icon">&#x2709;</span>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
};

export default HomePage;
