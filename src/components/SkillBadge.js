import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ name }) => {
  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="skill-badge" // Gunakan kelas 'skill-badge'
    >
      {name}
    </motion.span>
  );
};

export default SkillBadge;