import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
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
            <span className="gradient-text">Shantanu</span>
            <span className="nav-subtitle" style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400, letterSpacing: '0.5px', marginLeft: '0.2rem' }}>(Computational Biologist)</span>
          </a>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
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

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: '1px solid var(--card-border)',
              borderRadius: '8px',
              padding: '0.4rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s'
            }}
            aria-label="Toggle theme"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </button>

          {/* Hamburger Button - hidden on desktop via CSS */}
          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.5rem',
              zIndex: 1001
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              background: 'color-mix(in srgb, var(--bg-color) 95%, transparent)',
              borderTop: '1px solid var(--card-border)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 2rem 1.5rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const targetId = link.href.replace('#', '');
                    setTimeout(() => {
                      const el = document.getElementById(targetId);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 300);
                  }}
                  style={{
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    fontSize: '1.1rem',
                    padding: '0.8rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
