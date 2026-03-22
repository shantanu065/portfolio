import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      text: "Shantanu's computational biology expertise was instrumental in accelerating our antibody design pipeline. His deep understanding of molecular dynamics and protein modeling consistently delivered results beyond expectations.",
      name: "Dr. Research Lead",
      role: "Cellogen Therapeutics",
      color: 'var(--accent-cyan)'
    },
    {
      text: "An exceptionally talented researcher who bridges the gap between biology and computation effortlessly. His work on structural bioinformatics has been a valuable asset to our team.",
      name: "Academic Supervisor",
      role: "THSTI, Faridabad",
      color: 'var(--accent-purple)'
    },
    {
      text: "Outstanding analytical skills combined with a genuine passion for drug discovery. Shantanu's contributions to our AI-driven protein design efforts have been remarkable.",
      name: "Senior Colleague",
      role: "Computational Biology Team",
      color: 'var(--accent-blue)'
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials">
      <div className="container">
        <h2 className="section-title">What People Say</h2>

        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-panel"
              style={{ textAlign: 'center', padding: '2.5rem 2rem' }}
            >
              <Quote size={36} style={{ color: testimonials[current].color, marginBottom: '1.5rem', opacity: 0.6 }} />
              
              <p style={{ 
                fontSize: '1.1rem', 
                color: 'var(--text-secondary)', 
                lineHeight: 1.8, 
                marginBottom: '2rem',
                fontStyle: 'italic'
              }}>
                "{testimonials[current].text}"
              </p>
              
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                  {testimonials[current].name}
                </p>
                <p style={{ color: testimonials[current].color, fontSize: '0.9rem', marginTop: '0.3rem' }}>
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', alignItems: 'center' }}>
            <button
              onClick={prev}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? 'var(--accent-cyan)' : 'var(--card-border)',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
