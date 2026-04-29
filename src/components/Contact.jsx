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
        transition={{ duration: 0.6 }}
        className="glass-panel"
        style={{ 
          padding: '5rem 3rem', 
          textAlign: 'center', 
          background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, rgba(30, 41, 59, 0.8) 70%)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          boxShadow: '0 20px 40px -20px rgba(99, 102, 241, 0.3)'
        }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>Let's Build <span className="text-gradient">Data Pipelines</span></h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 4rem auto', fontSize: '1.2rem', lineHeight: 1.8 }}>
          I'm currently seeking roles where I can leverage my skills in Data Visualization, Analytics, and AI to solve real business problems. Let's connect!
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
          <motion.a 
            whileHover={{ y: -5 }}
            href="mailto:sushantv355@gmail.com" 
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}
          >
            <div className="glass-panel" style={{ width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--cyan)', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--cyan)' }}>
              <Mail size={28} />
            </div>
            <span style={{ fontWeight: 500 }}>Email</span>
          </motion.a>
          
          <motion.a 
            whileHover={{ y: -5 }}
            href="https://github.com/sushantguri" 
            target="_blank" rel="noreferrer" 
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}
          >
            <div className="glass-panel" style={{ width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}>
              <Code size={28} />
            </div>
            <span style={{ fontWeight: 500 }}>GitHub</span>
          </motion.a>
          
          <motion.a 
            whileHover={{ y: -5 }}
            href="https://www.linkedin.com/in/sushant-guri/" 
            target="_blank" rel="noreferrer" 
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}
          >
            <div className="glass-panel" style={{ width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--indigo)', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--indigo)' }}>
              <Briefcase size={28} />
            </div>
            <span style={{ fontWeight: 500 }}>LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
