import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const Education = () => {
  const journey = [
    {
      role: "Junior Scientist (Computational Biology)",
      institution: "Cellogen Therapeutics, India",
      year: "May 2025 - Present",
      description: "Core contributor to CelAbGen, an AI-driven antibody design pipeline. Perform MD simulations, MM-PBSA/GBSA calculations, and model antibody structures using AlphaFold3. Generate de novo protein binders using RFdiffusion and ProteinMPNN.",
      icon: <Briefcase size={20} />
    },
    {
      role: "Master's Thesis Research",
      institution: "THSTI, Faridabad (Supervisor: Dr. Shailendra Asthana)",
      year: "Jan 2024 - Jun 2024",
      description: "Dynamic Structural Insights to Decipher Critical Determinants of RORγt Binding. Performed molecular docking, Prime MM-GBSA calculations, and all-atom MD simulations using AMBER22.",
      icon: <Briefcase size={20} />
    },
    {
      role: "M.Sc. in Bioinformatics",
      institution: "Central University of South Bihar, Gaya",
      year: "2024",
      description: "CGPA: 7.83/10. Focused on computational approaches for biological analysis and structural bioinformatics.",
      icon: <GraduationCap size={20} />
    },
    {
      role: "B.Sc. in Biotechnology",
      institution: "Gaya College, Gaya",
      year: "2022",
      description: "Percentage: 71.87%. Foundational knowledge in biological sciences and technology applications. Filed patent for CelAbGen AI-driven antibody design pipeline.",
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="education-timeline" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', paddingLeft: '30px' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ width: '100%', background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-purple))' }}
            />
          </div>

          {journey.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="glass-panel education-card"
              style={{ position: 'relative', marginBottom: '2rem', padding: '1.5rem', marginLeft: '2rem' }}
            >
              {/* Timeline dot */}
              <div className="timeline-dot" style={{ position: 'absolute', left: '-51px', top: '24px', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--bg-color)', border: '4px solid var(--accent-cyan)', zIndex: 2, boxShadow: '0 0 10px var(--accent-cyan)' }} />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem', color: 'var(--accent-cyan)' }}>
                {item.icon}
                <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--text-primary)' }}>{item.role}</h3>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontWeight: 500, color: 'var(--accent-purple)' }}>{item.institution}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.year}</span>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
