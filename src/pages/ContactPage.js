// src/pages/ContactPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const recipientEmail = 'muh.iam2404@gmail.com'; // Ganti dengan alamat email Anda
    const emailSubject = encodeURIComponent(subject); // Gunakan subjek dari input
    // Perbarui body agar menyertakan nama dan email pengirim
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);

    // Buat link mailto
    const mailtoLink = `mailto:${recipientEmail}?subject=${emailSubject}&body=${body}`;

    // Buka link mailto di tab/jendela baru
    window.open(mailtoLink, '_blank');

    // Tampilkan pesan sukses kustom
    const messageBox = document.createElement('div');
    messageBox.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #2d3748;
        color: #e2e8f0;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 9999;
        text-align: center;
        max-width: 300px;
      ">
        <p>Email Anda siap dikirim!</p>
        <p style="font-size: 0.9em; color: #a0aec0;">Klien email Anda akan terbuka.</p>
        <button onclick="this.parentNode.parentNode.remove()" style="
          background-color: #673ab7;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 15px;
        ">OK</button>
      </div>
    `;
    document.body.appendChild(messageBox);

    setFormData({ name: '', email: '', subject: '', message: '' }); // Bersihkan formulir setelah pengiriman
  };

  // Social media links with icons
  const socialLinks = [
    {
      name: 'LinkedIn',
      type: 'image',
      src: '/assets/Linkedin.png',
      alt: 'LinkedIn Icon',
      link: 'https://www.linkedin.com/in/muhammad-ilham-a28a88223/',
      mainText: "Linked in",
      username: "Muhammad Ilham",
      isLarge: true
    },
    {
      name: 'Instagram',
      type: 'image',
      src: '/assets/instagram2.jpg',
      alt: 'Instagram Icon',
      link: 'https://www.instagram.com/imissachi_/',
      mainText: "Instagram",
      username: "@imissachi_"
    },
    {
      name: 'GitHub',
      type: 'image',
      src: '/assets/github.png',
      alt: 'GitHub Icon',
      link: 'https://github.com/Ammm24',
      mainText: "Github",
      username: "@Ammm24"
    },
    {
      name: 'TikTok',
      type: 'image',
      src: '/assets/tiktok.png',
      alt: 'TikTok Icon',
      link: 'https://www.tiktok.com/@missachiii_',
      mainText: "Tiktok",
      username: "Missachiiii"
    },
  ];

  const whatsappNumber = '6287871710480';

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="contact-page-section section-padding"
      id="contact"
    >
      <div className="container">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="contact-page-header"
        >
          <h2 className="contact-title">Connect With Me</h2>
          <p className="contact-subtitle">
            Explore my social presence and connect with me across various platforms.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-card connect-card"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link-item ${social.isLarge ? 'social-link-item-large' : ''}`}
              >
                {social.type === 'image' ? (
                  <img src={social.src} alt={social.alt} className="social-icon-image" />
                ) : (
                  <span dangerouslySetInnerHTML={{ __html: social.iconHtml }}></span>
                )}
                <div className="social-info">
                  <span className="social-main-text">{social.mainText}</span>
                  <span className="social-username">{social.username}</span>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-card contact-form-card"
          >
            <div className="contact-card-header">
              <h3>Hubungi</h3>
              <p>Ada yang ingin didiskusikan mengenai project? Kirim saya pesan melalui gmail atau wa dan mari kita berdiskusi seputar project.</p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span className="input-icon">&#x1F464;</span>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Anda"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span className="input-icon">&#x1F4E7;</span>
              </div>
              {/* Kolom Subjek Baru */}
              <div className="form-group">
                <input
                  type="text"
                  name="subject" // Nama harus 'subject' sesuai state
                  placeholder="Tujuan Anda ingin mengirim pesan ke gmail" // Placeholder untuk subjek
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <span className="input-icon">&#x1F4DD;</span> {/* Ikon untuk subjek (misal: memo) */}
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Pesan Anda"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-contact-submit">
                Kirim Pesan
              </button>

              {/* Tambahkan teks "atau" dan link WhatsApp di sini */}
              <p style={{ textAlign: 'center', margin: '1.5rem 0', color: '#a0aec0' }}>atau</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo, saya ingin mendiskusikan proyek dengan anda.')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  marginTop: '1rem',
                  transition: 'transform 0.3s ease',
                }}
                className="whatsapp-link" // Tambahkan kelas untuk styling
              >
                <img
                  src="/assets/WhatsappLogo.jpg" // Pastikan Anda memiliki gambar ini di folder public/assets/
                  alt="WhatsApp Icon"
                  style={{ width: '50px', height: '50px', borderRadius: '50%', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
                  className="whatsapp-icon-image" // Tambahkan kelas untuk styling
                />
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
