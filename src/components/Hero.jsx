import React from 'react';
import { motion } from 'framer-motion';
import { Database, LineChart, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ color: 'var(--accent-emerald)', fontSize: '1.25rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Data Visualization & Analytics
          </h2>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Hi, I'm <span className="text-gradient">Sushant</span>
          </h1>
          <h3 style={{ fontSize: '2rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 400 }}>
            CS AI Student & Data Storyteller
          </h3>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '500px' }}>
            I transform raw, messy data into structured operational intelligence. Specializing in ETL pipelines, NLP, and interactive dashboards that drive decision-making.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" className="glass-panel" style={{ 
              padding: '1rem 2rem', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontWeight: 600,
              color: '#fff',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
              border: '1px solid var(--accent-emerald)'
            }}>
              <LineChart size={20} />
              View Analytics Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative', height: '500px' }}
        >
          {/* Abstract Data Visualization Representation */}
          <div className="glass-panel" style={{ 
            position: 'absolute', 
            top: '10%', right: '10%', 
            width: '80%', height: '80%', 
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, var(--accent-emerald-glow) 0%, transparent 70%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Database size={64} color="var(--accent-emerald)" style={{ opacity: 0.8 }} />
          </div>
          
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="glass-panel" 
            style={{ position: 'absolute', top: '20%', left: '0', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}
          >
            <Activity color="var(--accent-purple)" />
            <div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Analyzed Records</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>1M+ Rows</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="glass-panel" 
            style={{ position: 'absolute', bottom: '15%', right: '0', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}
          >
            <LineChart color="var(--accent-emerald)" />
            <div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>BI Dashboards</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>26+ Visuals</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
