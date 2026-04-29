import React from 'react';
import { motion } from 'framer-motion';
import { Database, LineChart, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ color: 'var(--cyan)', fontSize: '1.1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}
          >
            Data Visualization & Analytics
          </motion.div>
          <h1 className="hero-title">
            Hi, I'm <br/><span className="text-gradient">Sushant</span>
          </h1>
          <h3 style={{ fontSize: '1.75rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 400 }}>
            CS AI Student & Data Storyteller
          </h3>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '550px', lineHeight: 1.8 }}>
            I specialize in transforming raw datasets into structured, operational intelligence. From building Python ETL pipelines to deploying interactive Tableau BI suites.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'inline-block' }}
          >
            <a href="#case-studies" className="glass-panel" style={{ 
              padding: '1.25rem 2.5rem', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              fontWeight: 600,
              color: '#fff',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)',
              border: '1px solid var(--cyan)'
            }}>
              <LineChart size={22} />
              View Case Studies
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="glass-panel" style={{ 
            width: '300px', height: '300px', 
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 50px rgba(6, 182, 212, 0.2)'
          }}>
            <Database size={80} color="var(--cyan)" style={{ opacity: 0.9 }} />
          </div>
          
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="glass-panel" 
            style={{ position: 'absolute', top: '15%', left: '-10%', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(15, 23, 42, 0.8)' }}
          >
            <div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Processed</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--cyan)' }}>1M+ Rows</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'var(--text-muted)' }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
