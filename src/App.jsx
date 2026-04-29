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
      <nav className="glass-panel" style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        padding: '0.75rem 2rem',
        borderRadius: '100px',
        display: 'flex',
        gap: '2rem'
      }}>
        <a href="#home" style={{ fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-emerald)'} onMouseOut={e => e.target.style.color = 'var(--text-main)'}>Home</a>
        <a href="#about" style={{ fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-emerald)'} onMouseOut={e => e.target.style.color = 'var(--text-main)'}>About</a>
        <a href="#projects" style={{ fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-emerald)'} onMouseOut={e => e.target.style.color = 'var(--text-main)'}>Projects</a>
        <a href="#contact" style={{ fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-emerald)'} onMouseOut={e => e.target.style.color = 'var(--text-main)'}>Contact</a>
      </nav>

      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer style={{
        padding: '2rem 0',
        textAlign: 'center',
        borderTop: '1px solid var(--border-subtle)',
        color: 'var(--text-muted)'
      }}>
        <p>© {new Date().getFullYear()} Sushant. Data Visualization & Analytics Portfolio.</p>
      </footer>
    </div>
  );
}

export default App;
