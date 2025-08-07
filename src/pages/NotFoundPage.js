// src/pages/NotFoundPage.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; // Anda bisa membuat file CSS ini untuk styling

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="not-found-container"
    >
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Halaman tidak ditemukan.</p>
      <p className="not-found-description">
        Maaf, halaman yang Anda cari tidak ada. Mungkin Anda salah mengetik alamatnya?
      </p>
      <Link to="/" className="not-found-home-button">
        Kembali ke Beranda
      </Link>
    </motion.div>
  );
};

export default NotFoundPage;
