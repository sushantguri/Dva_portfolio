import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Activity, Database, LayoutDashboard, Target } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "WildChat Analytics Platform",
      subtitle: "End-to-End NLP Pipeline & BI Suite",
      description: "An end-to-end analytics system built on the AllenAI WildChat-1M dataset (1M+ real ChatGPT conversations). Designed a 6-stage Python ETL pipeline with NLP enrichment — including sentiment analysis, language detection, and toxicity scoring — feeding into a 3-module Tableau BI suite with 26 interactive visualizations.",
      outcomes: [
        "Identified 47% session drop-off rate, enabling turn-2 retention strategy",
        "Detected 2.8x nocturnal toxicity risk via Z-score anomaly detection",
        "Segmented top 8% of users driving 59% of platform engagement",
        "Surfaced 5.3x toxicity gap between high-volume geographies"
      ],
      tags: ["Python", "pandas", "scikit-learn", "NLTK", "Tableau", "NLP", "ETL"],
      github: "https://github.com/Taj-2005/SectionA_Group6_WildChat",
      live: "https://public.tableau.com/views/WildChat_Analytics_Platform/ExecutiveSummary",
      icon: <Activity size={32} />
    },
    {
      title: "Retail Store Sales Dashboard",
      subtitle: "Data Transformation & Decision Support",
      description: "Transformed 11,362 messy retail transactions into a structured analytics layer and interactive decision-support dashboard. Cleaned and standardized raw sales data, engineered key performance indicators, and conducted comprehensive analysis covering category profitability, in-store vs. online channel performance, discount impact, and revenue concentration risk.",
      outcomes: [
        "Identified revenue concentration ratio of 0.51 — flagging category dependency risk",
        "Analyzed 62,889 units across product categories with MoM growth tracking",
        "Uncovered discount-to-margin trade-offs informing promotional strategy",
        "Delivered interactive dashboard for store, product, and regional decision-making"
      ],
      tags: ["Google Sheets", "Pivot Tables", "KPI Engineering", "EDA", "Statistical Analysis"],
      github: "https://github.com/ArchitCodes1204/SectionA_Group9-_retail_store_sales",
      live: "#",
      icon: <LayoutDashboard size={32} />
    }
  ];

  return (
    <section id="projects" className="section container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Analytics</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-panel"
              style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', padding: '2rem', overflow: 'hidden', position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, var(--accent-emerald), var(--accent-purple))' }}></div>
              
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: 'var(--accent-emerald)', marginBottom: '1rem' }}>
                    {project.icon}
                  </div>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                  <div style={{ color: 'var(--text-muted)', fontWeight: 500, marginBottom: '1.5rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {project.subtitle}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.tags.map((tag, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.75rem', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '100px', 
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--accent-emerald)'} onMouseOut={e => e.target.style.color='inherit'}>
                    <Code size={18} /> View Code
                  </a>
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--accent-purple)', transition: 'opacity 0.2s' }} onMouseOver={e => e.target.style.opacity='0.8'} onMouseOut={e => e.target.style.opacity='1'}>
                      <ExternalLink size={18} /> Live Dashboard
                    </a>
                  )}
                </div>
              </div>
              
              <div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                  {project.description}
                </p>
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.03)' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                    <Target size={18} color="var(--accent-emerald)" /> Key Outcomes
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                        <span style={{ color: 'var(--accent-emerald)', marginTop: '2px' }}>▹</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
