import React from 'react';

const Footer = () => {
  return (
    <footer className="footer"> {/* Gunakan kelas 'footer' */}
      <div className="container">
        <p> Develop By Muhammad Ilham {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;