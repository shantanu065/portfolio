import React from 'react';
import { motion } from 'framer-motion';
import { Database, Dna, Activity, Code, Layers, Beaker } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      category: 'Molecular Dynamics', 
      tools: ['AMBER (22/24)', 'GROMACS', 'Desmond', 'MM-PBSA', 'MM-GBSA', 'RMSD', 'RMSF', 'Rg', 'SASA'],
      icon: <Activity size={24} color="var(--accent-cyan)" />
    },
    { 
      category: 'Structural Bioinformatics', 
      tools: ['AutoDock', 'AutoDock Vina', 'HADDOCK', 'MODELLER', 'AlphaFold-Multimer', 'ColabFold', 'SiteMap', 'CHARMM-GUI'],
      icon: <Dna size={24} color="var(--accent-purple)" />
    },
    { 
      category: 'AI & Antibody Engineering', 
      tools: ['RFdiffusion', 'ProteinMPNN', 'RFAntibody', 'BioPhi'],
      icon: <Layers size={24} color="var(--accent-cyan)" />
    },
    { 
      category: 'Analysis & Visualization', 
      tools: ['CPPTRAJ', 'VMD', 'MDAnalysis', 'PyMOL', 'Chimera'],
      icon: <Database size={24} color="var(--accent-blue)" />
    },
    { 
      category: 'Cheminformatics', 
      tools: ['Open Babel', 'RDKit', 'SwissADME'],
      icon: <Beaker size={24} color="var(--accent-purple)" />
    },
    { 
      category: 'Programming', 
      tools: ['Python', 'Bash', 'basic R', 'Linux', 'GPU/HPC environments'],
      icon: <Code size={24} color="var(--accent-blue)" />
    },
  ];

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">Profile & Expertise</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>My Research Focus</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.05rem' }}>
              I am currently working as a Junior Scientist in Computational Biology at Cellogen Therapeutics, where I contribute to CelAbGen, an AI-driven antibody design pipeline. My core focus involves in silico studies of antibody-antigen interactions using molecular docking, molecular dynamics simulations, and free energy calculations.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              From modeling structures with AlphaFold3 to generating de novo protein binders using RFdiffusion and ProteinMPNN, my passion lies in bridging the gap between biology and computation to accelerate therapeutics and solve complex structural challenges.
            </p>
          </motion.div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.6rem', borderBottom: '2px solid var(--card-border)', paddingBottom: '0.5rem', display: 'inline-block' }}>Technical Skills & Tools</h3>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="glass-panel" 
                  style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                      {skill.icon}
                    </div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{skill.category}</h4>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                    {skill.tools.map(tool => (
                      <span key={tool} style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
