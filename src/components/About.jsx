import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, LayoutTemplate, PieChart } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Data Engineering', items: ['Python ETL', 'pandas', 'NumPy', 'Data Cleaning'], icon: <Database /> },
    { category: 'Data Science & AI', items: ['NLP', 'scikit-learn (K-Means)', 'NLTK', 'HuggingFace'], icon: <Code /> },
    { category: 'Data Visualization', items: ['Tableau', 'Matplotlib', 'Seaborn', 'Interactive Dashboards'], icon: <PieChart /> },
    { category: 'Business Intelligence', items: ['KPI Engineering', 'Statistical Analysis', 'Behavioral Segmentation'], icon: <LayoutTemplate /> },
  ];

  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              Turning Complexity into <span className="text-gradient">Clarity</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>
              As a Computer Science student specializing in Artificial Intelligence, I bridge the gap between raw datasets and actionable business intelligence. My focus is on Data Visualization and Analytics (DVA).
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
              I don't just create charts; I build end-to-end analytical pipelines. From scraping and structuring messy transactional data to engineering NLP features and deploying interactive Tableau dashboards, I uncover the hidden stories that drive strategic decisions.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="glass-panel"
                style={{ padding: '1.5rem' }}
                whileHover={{ y: -5, borderColor: 'var(--accent-emerald)' }}
              >
                <div style={{ color: 'var(--accent-emerald)', marginBottom: '1rem' }}>
                  {skill.icon}
                </div>
                <h4 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>{skill.category}</h4>
                <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {skill.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-purple)' }}></div>
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
