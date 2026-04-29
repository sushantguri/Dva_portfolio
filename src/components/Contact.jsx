import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, Code } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section container" style={{ paddingBottom: '8rem' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-panel"
        style={{ padding: '4rem', textAlign: 'center', background: 'linear-gradient(180deg, rgba(18,25,30,0.7) 0%, rgba(10,15,18,0.9) 100%)' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Analyze Together</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.125rem' }}>
          Interested in extracting value from your data? Looking for a data-driven AI student? I'm currently open to new opportunities. Let's connect!
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <a href="mailto:sushantv355@gmail.com" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
            color: 'var(--text-muted)', transition: 'color 0.3s'
          }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-emerald)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={24} />
            </div>
            <span>Email</span>
          </a>
          
          <a href="https://github.com/sushantguri" target="_blank" rel="noreferrer" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
            color: 'var(--text-muted)', transition: 'color 0.3s'
          }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Code size={24} />
            </div>
            <span>GitHub</span>
          </a>
          
          <a href="https://www.linkedin.com/in/sushant-guri/" target="_blank" rel="noreferrer" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
            color: 'var(--text-muted)', transition: 'color 0.3s'
          }} onMouseOver={e => e.currentTarget.style.color = '#0a66c2'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Briefcase size={24} />
            </div>
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
