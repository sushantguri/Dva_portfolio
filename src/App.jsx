import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel" style={{
        position: 'fixed',
        top: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        padding: '0.75rem 2.5rem',
        borderRadius: '100px',
        display: 'flex',
        gap: '2.5rem',
        border: '1px solid rgba(6, 182, 212, 0.2)',
        boxShadow: '0 10px 30px -10px rgba(6, 182, 212, 0.2)'
      }}>
        <a href="#home" style={{ fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-main)'}>Home</a>
        <a href="#about" style={{ fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-main)'}>About</a>
        <a href="#case-studies" style={{ fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-main)'}>Case Studies</a>
        <a href="#contact" style={{ fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-main)'}>Contact</a>
      </motion.nav>

      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer style={{
        padding: '2rem 0',
        textAlign: 'center',
        borderTop: '1px solid var(--border-glass)',
        color: 'var(--text-muted)'
      }}>
        <p>© {new Date().getFullYear()} Sushant. Data Visualization & Analytics.</p>
      </footer>
    </div>
  );
}

export default App;
