import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Play } from 'lucide-react';
import heroVideo from '../assets/cd20-19_hmz.mp4';

const MolecularShowcase = () => {
  return (
    <section className="molecular-showcase" id="molecular-showcase">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '50px',
            background: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.2)',
            marginBottom: '1.2rem',
            fontSize: '0.85rem',
            color: 'var(--accent-cyan)',
            fontWeight: 500
          }}>
            <Atom size={14} />
            Molecular Dynamics
          </div>
          <h2 style={{
            fontSize: '1.6rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '0.8rem',
            lineHeight: 1.3
          }}>
            Bispecific Anti-CD19/CD20 <span className="gradient-text">scFv</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            maxWidth: '400px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Bispecific scFv targeting CD19 and CD20 antigens connected with linker
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="showcase-video-wrapper"
        >
          <div className="showcase-video-glow" />
          <div className="showcase-video-container">
            <video
              autoPlay
              loop
              muted
              playsInline
              src={heroVideo}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MolecularShowcase;
