import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`glass-nav`} style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000, transition: 'all 0.3s',
      padding: scrolled ? '0.5rem 0' : '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'baseline', gap: '0.5rem', textDecoration: 'none' }}>
            <span className="gradient-text">Shantanu.</span>
            <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400, letterSpacing: '0.5px', marginLeft: '0.2rem' }}>(Computational Biologist)</span>
          </a>
        
        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2rem' }} className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover-underline" style={{ fontWeight: 500, color: 'var(--text-primary)', transition: 'color 0.2s', fontSize: '0.95rem' }}
               onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
               onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
