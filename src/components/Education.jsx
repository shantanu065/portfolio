import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const Education = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end 60%"]
  });

  // Timeline line scale tied exactly to scroll
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
      description: "Percentage: 71.87%. Foundational knowledge in biological sciences and technology applications.",
      icon: <GraduationCap size={20} />
    }
  ];

  // Create scroll-linked transforms for each card
  const CardItem = ({ item, index }) => {
    // Dynamic progress values based on index
    const totalCards = 4;
    const step = 1 / totalCards;
    const startProgress = index * step;
    const endProgress = startProgress + step;

    // The dot fills up when the line reaches this card
    const dotBorderColor = useTransform(
      scrollYProgress,
      [startProgress, endProgress],
      ['rgba(255, 255, 255, 0.2)', '#06b6d4'] // hex for --accent-cyan
    );
    const dotBoxShadow = useTransform(
      scrollYProgress,
      [startProgress, endProgress],
      ['0 0 0px rgba(6, 182, 212, 0)', '0 0 10px rgba(6, 182, 212, 0.8)']
    );

    // Fade and slide the card in
    const opacity = useTransform(
      scrollYProgress,
      [Math.max(0, startProgress - 0.1), startProgress + 0.1],
      [0.3, 1]
    );
    const x = useTransform(
      scrollYProgress,
      [Math.max(0, startProgress - 0.1), startProgress + 0.1],
      [30, 0]
    );

    return (
      <motion.div
        style={{ opacity, x, position: 'relative', marginBottom: '2rem', padding: '1.5rem', marginLeft: '2rem' }}
        className="glass-panel education-card"
      >
        {/* Timeline dot */}
        <motion.div
          className="timeline-dot"
          style={{
            position: 'absolute',
            left: '-51px',
            top: '24px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'var(--bg-color)',
            borderWidth: '4px',
            borderStyle: 'solid',
            borderColor: dotBorderColor,
            zIndex: 2,
            boxShadow: dotBoxShadow,
            transition: 'border-color 0.1s, box-shadow 0.1s'
          }}
        />

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
    );
  };

  return (
    <section id="education" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className="education-timeline" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', paddingLeft: '30px' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
            <motion.div
              style={{
                height: '100%',
                width: '100%',
                background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-purple))',
                scaleY: lineScale,
                transformOrigin: 'top'
              }}
            />
          </div>

          {journey.map((item, index) => (
            <CardItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
