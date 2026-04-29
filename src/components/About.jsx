import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, LayoutTemplate, PieChart } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Data Engineering', items: ['Python ETL', 'pandas', 'NumPy', 'Data Cleaning'], icon: <Database size={28} /> },
    { category: 'Data Science & AI', items: ['NLP', 'scikit-learn', 'NLTK', 'HuggingFace'], icon: <Code size={28} /> },
    { category: 'Data Visualization', items: ['Tableau', 'Matplotlib', 'Seaborn', 'Interactive Dashboards'], icon: <PieChart size={28} /> },
    { category: 'Business Intelligence', items: ['KPI Engineering', 'Statistical Analysis', 'Behavioral Segmentation'], icon: <LayoutTemplate size={28} /> },
  ];

  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Technical Expertise</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>
              Bridging the gap between raw datasets and <span className="text-gradient">actionable intelligence</span>.
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.15rem', lineHeight: 1.8 }}>
              As an AI student, I don't just build models—I build end-to-end analytical solutions. My expertise lies in designing robust ETL pipelines, enriching data through Natural Language Processing, and distilling complex metrics into intuitive Tableau visualizations.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="glass-panel"
                style={{ padding: '2rem', background: 'rgba(30, 41, 59, 0.4)', border: '1px solid rgba(255,255,255,0.05)' }}
                whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.4)', boxShadow: '0 10px 30px rgba(6, 182, 212, 0.1)' }}
              >
                <div style={{ color: 'var(--cyan)', marginBottom: '1.5rem', background: 'rgba(6, 182, 212, 0.1)', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
                  {skill.icon}
                </div>
                <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{skill.category}</h4>
                <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {skill.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--indigo)' }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
