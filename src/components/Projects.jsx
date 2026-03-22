import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CelAbGen: AI-Driven Antibody Design',
      description: 'Core contributor to an in-house pipeline for AI-driven antibody design. Modeled antibody structures using AlphaFold3, and generated de novo protein binders using RFdiffusion and ProteinMPNN.',
      tags: ['AlphaFold3', 'RFdiffusion', 'ProteinMPNN', 'Deep Learning'],
      color: 'var(--accent-cyan)',
      image: '/Screenshot 2025-05-09 231107.png'
    },
    {
      title: 'Dynamic Structural Insights of RORγt',
      description: 'Master\'s Thesis: Investigated ligand binding mechanisms of RORγt. Performed molecular docking, Prime MM-GBSA calculations, and all-atom molecular dynamics using AMBER22 to decipher critical determinants.',
      tags: ['AMBER22', 'MD Simulations', 'MM-GBSA', 'Docking'],
      color: 'var(--accent-purple)',
      image: '/Screenshot 2025-05-09 224915.png',
      links: [
        { label: 'Read Thesis', href: '/shantanu_thesis.pdf' }
      ]
    },
    {
      title: 'Cimmexa: AI-Driven Immunogenicity Prediction',
      description: 'An AI-driven computational pipeline designed to accurately predict and evaluate the immunogenic potential of therapeutic and antibody candidates.',
      tags: ['Machine Learning', 'Immunoinformatics', 'Python'],
      color: 'var(--accent-blue)',
      image: '/Screenshot 2025-05-09 225019.png'
    },
    {
      title: 'In-silico Inhibition of Adhesion Protein P110',
      description: 'Modeled the 3D structure of the P110 adhesion protein, screened phytochemical compounds, performed molecular docking and evaluated pharmacokinetic properties.',
      tags: ['Protein Modeling', 'Molecular Docking', 'SwissADME'],
      color: 'var(--accent-cyan)',
      image: '/Screenshot 2025-05-07 175823.png',
      links: []
    },
    {
      title: 'Binding Potential of LTX312 Peptide',
      description: 'Performed protein-peptide docking studies, molecular dynamics simulations using Desmond, and MM-PBSA per-residue energy decomposition against Aminoglycoside-Modifying Enzymes.',
      tags: ['MD Simulations', 'Desmond', 'MM-PBSA'],
      color: 'var(--accent-purple)',
      image: '/Screenshot 2025-05-08 171630.png',
      links: []
    },
    {
      title: 'AlphaFold Pipeline Automation',
      description: 'An automated high-throughput pipeline for predicting protein structures across entire viral genomes using AlphaFold2.',
      tags: ['Python', 'Docker', 'SLURM', 'Bash'],
      color: 'var(--accent-blue)',
      comingSoon: true
    },
    {
      title: 'LigandDock Pro',
      description: 'A web-based visualization tool for identifying potential binding pockets and simulating protein-ligand interactions.',
      tags: ['React', 'Three.js', 'WebGL', 'Node.js'],
      color: 'var(--accent-cyan)',
      comingSoon: true
    },
    {
      title: 'MD Trajectory Toolkit',
      description: 'Open-source toolkit for rapid analysis of molecular dynamics trajectories, featuring PCA and structural clustering.',
      tags: ['Python', 'MDAnalysis', 'NumPy'],
      color: 'var(--accent-purple)',
      comingSoon: true
    }
  ];

  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  };

  const handleMouseLeave = (cardRef) => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    
    return (
      <motion.div 
        ref={cardRef}
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-panel"
        onMouseMove={(e) => handleMouseMove(e, cardRef)}
        onMouseLeave={() => handleMouseLeave(cardRef)}
        style={{ 
          display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', overflow: 'hidden',
          transition: 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease',
          willChange: 'transform'
        }}
      >
        <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: project.color, filter: 'blur(80px)', opacity: 0.2, zIndex: -1 }} />
        
        {project.image && (
          <div style={{ width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
            <img src={project.image} alt={project.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
        
        {project.comingSoon && (
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.4rem 1rem', background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#fff', zIndex: 2 }}>
            🚧 Coming Soon
          </div>
        )}
        
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', opacity: project.comingSoon ? 0.6 : 1 }}>{project.title}</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1, opacity: project.comingSoon ? 0.5 : 1 }}>{project.description}</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', color: project.color, border: `1px solid rgba(255,255,255,0.1)` }}>
              {tag}
            </span>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto' }}>
          {project.links ? (
            project.links.map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="hover-underline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                <ExternalLink size={18} /> {link.label}
              </a>
            ))
          ) : (
            <>
              <a href="#" className="hover-underline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                <Github size={18} /> Code
              </a>
              <a href="#" className="hover-underline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                <ExternalLink size={18} /> Demo
              </a>
            </>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Research Projects</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
