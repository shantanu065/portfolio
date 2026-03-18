import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Get In Touch</h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            I am always open to discussing new projects, creative ideas, or opportunities in structural bioinformatics and computational biology. Feel free to reach out!
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
            <a href="mailto:shantanukumar065@gmail.com" className="hover-underline" style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={20} /> shantanukumar065@gmail.com
            </a>
            <a href="tel:+918797063557" className="hover-underline" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={20} /> +91-8797063557
            </a>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
            {[
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/shantanu-kumar-05b397221/" },
              { icon: <Github size={24} />, href: "https://github.com/shantanu065" },
            ].map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'all 0.3s', padding: '0.5rem', display: 'inline-block' }} 
                 className="hover-cyan"
                 onMouseEnter={(e)=>{e.currentTarget.style.color='var(--accent-cyan)'; e.currentTarget.style.transform='translateY(-3px)'}}
                 onMouseLeave={(e)=>{e.currentTarget.style.color='var(--text-secondary)'; e.currentTarget.style.transform='translateY(0)'}}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Shantanu Kumar. Gaya, Bihar, India.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
