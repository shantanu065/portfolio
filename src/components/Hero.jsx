import React from 'react';
import { motion } from 'framer-motion';
import { Dna, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px', paddingBottom: '40px', position: 'relative', overflow: 'hidden' }}>

      {/* 
        The massive right-side section bridging dark theme into the pure white simulation space.
        Slightly inset from top, bottom, and right side with rounded corners to make it float perfectly!
      */}
      <motion.div
        className="hero-video-panel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ position: 'absolute', top: '12%', right: '4%', bottom: '10%', width: '45%', zIndex: 0 }}
      >
        <div style={{
          width: '100%', height: '100%',
          background: '#ffffff',
          borderRadius: '30px', /* Beautiful rounded floating edges! */
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
          display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
        }}>
          <video
            src="/cd20-19_hmz.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '110%',
              maxWidth: '1200px',
              display: 'block',
              pointerEvents: 'none'
            }}
          />
        </div>
        {/* Soft glowing shadow around the new floating canvas edge */}
        <div style={{ position: 'absolute', top: '0%', left: '10%', right: '0%', bottom: '0%', borderRadius: '30px', boxShadow: '0 10px 50px rgba(6, 182, 212, 0.15)', zIndex: -1 }} />
      </motion.div>

      {/* Subtle bottom fade transition for the whole section so the white beautifully merges into the About section below */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to top, var(--bg-color), transparent)', zIndex: 1, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>

          <motion.div
            className="hero-text-wrapper"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: '1 1 500px', maxWidth: '600px' }}
          >
            <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Hi, I'm <br /><span className="gradient-text">Shantanu Kumar</span>.
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '550px', lineHeight: 1.6 }}>
              A dedicated computational biologist with expertise in structural bioinformatics, molecular dynamics simulations, and machine learning. Passionate about applying computational tools to solve biological problems in drug discovery.
            </p>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '1rem' }}>
              <a href="/Shantanu_cv.pdf" target="_blank" rel="noopener noreferrer" className="hover-underline" style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '1.1rem' }}>
                Download CV
              </a>
              <a href="#projects" className="hover-underline" style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '1.1rem' }}>
                View Projects<ArrowRight size={18} style={{ verticalAlign: 'middle', marginLeft: '0.3rem' }} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
