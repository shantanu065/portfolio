import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Publications = () => {
  const pubs = [
    {
      title: "Novel Inhibitor Design for Viral Protease via Deep Learning",
      journal: "Journal of Structural Bioinformatics",
      year: "2023",
      authors: "Doe, J., Smith, A., et al."
    },
    {
      title: "Molecular Dynamics Reveals Conformational Shifts in Receptors",
      journal: "Computational Structural Biology",
      year: "2022",
      authors: "Smith, A., Doe, J., Williams, R."
    },
    {
      title: "Accelerating Protein Output Analysis with Cloud Computing",
      journal: "Bioinformatics Advances",
      year: "2021",
      authors: "Doe, J., Johnson, M."
    }
  ];

  return (
    <section id="publications">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {pubs.map((pub, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel"
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}
            >
              <div style={{ padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-purple)', flexShrink: 0 }}>
                <BookOpen size={24} />
              </div>
              <div style={{ width: '100%' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>{pub.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.8rem' }}>{pub.authors}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 500, fontSize: '0.9rem' }}>{pub.journal}</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', padding: '0.2rem 0.6rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}>{pub.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
