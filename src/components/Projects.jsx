import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Activity, Database, LayoutDashboard, Target } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "WildChat Analytics Platform",
      subtitle: "End-to-End NLP Pipeline & BI Suite",
      description: "Turning 1M+ real-world AI conversations into operational intelligence. A comprehensive analytics system tracking user retention, toxicity, and model performance.",
      problem: "Conversational AI platforms generate millions of interactions, but operators lack visibility into user drop-off, geographic toxicity trends, and engagement concentration, leading to instinct-driven safety and product decisions.",
      dataset: "AllenAI WildChat-1M dataset. Over 1,000,000 real-world ChatGPT interactions across 148 countries.",
      cleaning: "Built a 6-stage Python ETL pipeline. Extracted and structured JSON logs, enriched text using NLP (VADER sentiment, Langdetect), generated feature sets via K-Means clustering, and outputted 6 analysis-ready CSVs.",
      kpis: "Tracked 12 production metrics including Turn-Count Retention, Toxicity Rate, Geographic Concentration, and Prompt Categories.",
      insights: [
        "Identified a 47% session drop-off rate at Turn 2, highlighting the highest-leverage intervention point.",
        "Discovered geography and toxicity are decoupled: Germany (4th by volume) showed a 16.97% toxicity rate (5.3× average), while China (24.5% volume) sat at 1.10%.",
        "Found GPT-4 sessions score 31.7% higher on quality but attract 63.7% more toxic interactions.",
        "Segmented a power-user cohort where 8% of users drive 59% of all platform engagement."
      ],
      recommendations: "Shift safety resources away from pure volume markets to high-toxicity vectors. Implement active retention prompts at Turn 2 to reduce the 47% immediate abandonment rate.",
      tags: ["Python", "pandas", "scikit-learn", "NLTK", "Tableau", "NLP", "ETL"],
      github: "https://github.com/Taj-2005/SectionA_Group6_WildChat",
      live: "https://public.tableau.com/views/WildChat_Analytics_Platform/ExecutiveSummary",
      icon: <Activity size={32} />
    },
    {
      title: "Retail Store Sales Dashboard",
      subtitle: "Data Transformation & Decision Support",
      description: "Transformed messy retail transactions into a structured analytics layer to identify high-performing stores, profitable products, and improvement areas.",
      problem: "Management struggled to track revenue trends clearly, measure discount impact on profitability, and identify top-performing stores due to messy and unstructured raw sales data.",
      dataset: "Retail Store Sales Data comprising 11,362 transactions and 62,889 units sold.",
      cleaning: "Cleaned and standardized using Google Sheets. Fixed missing values, removed duplicates, standardized date formats, and engineered key calculated fields.",
      kpis: "Total Revenue (1.47M), Total Transactions (11k), MoM Growth (-0.97%), Revenue Concentration Ratio (0.51).",
      insights: [
        "Calculated a Revenue Concentration Ratio of 0.51, flagging a heavy dependency on a few specific product categories.",
        "Uncovered that while discounts boost raw sales volume, they frequently result in a net reduction of category profitability.",
        "Identified distinct behavioral and revenue patterns between in-store and online sales channels."
      ],
      recommendations: "Optimize discount strategies to protect margins, promote high-performing but under-represented categories to reduce revenue concentration risk, and improve operational support for low-performing stores.",
      tags: ["Google Sheets", "Pivot Tables", "KPI Engineering", "EDA", "Statistical Analysis"],
      github: "https://github.com/ArchitCodes1204/SectionA_Group9-_retail_store_sales",
      live: "https://docs.google.com/spreadsheets/d/112HhLBUQNRM1SgkNvdGLBjG2Wk2nk5YADVmCigKOx2Q/edit?gid=343567973#gid=343567973",
      icon: <LayoutDashboard size={32} />
    }
  ];

  return (
    <section id="case-studies" className="section container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Case Studies</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-panel case-study-section"
              style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}
              whileHover={{ borderColor: 'rgba(99, 102, 241, 0.5)' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, var(--cyan), var(--indigo))' }}></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ color: 'var(--cyan)' }}>{project.icon}</div>
                    <h3 style={{ fontSize: '2.25rem', lineHeight: 1.1 }}>{project.title}</h3>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {project.subtitle}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.github} target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', color: 'var(--text-main)' }} onMouseOver={e => {e.currentTarget.style.borderColor='var(--cyan)'; e.currentTarget.style.color='var(--cyan)'}} onMouseOut={e => {e.currentTarget.style.borderColor='var(--border-glass)'; e.currentTarget.style.color='var(--text-main)'}}>
                    <Code size={20} />
                  </a>
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="glass-panel" style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)', borderColor: 'var(--indigo)' }} onMouseOver={e => e.currentTarget.style.boxShadow='0 0 20px rgba(99, 102, 241, 0.4)'} onMouseOut={e => e.currentTarget.style.boxShadow='none'}>
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '3rem', borderLeft: '2px solid var(--border-glass)', paddingLeft: '1.5rem' }}>
                {project.description}
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
                <div>
                  <h4>Problem & Stakeholder Context</h4>
                  <p>{project.problem}</p>
                  
                  <h4>Dataset Source & Scope</h4>
                  <p>{project.dataset}</p>
                  
                  <h4>Cleaning & Transformation</h4>
                  <p>{project.cleaning}</p>
                  
                  <h4>KPI Framework</h4>
                  <p>{project.kpis}</p>
                </div>
                
                <div>
                  <h4>Key Insights</h4>
                  <ul>
                    {project.insights.map((insight, i) => (
                      <li key={i}>{insight}</li>
                    ))}
                  </ul>
                  
                  <h4>Recommendations & Impact</h4>
                  <p>{project.recommendations}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '2rem', borderTop: '1px solid var(--border-glass)' }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{ 
                    fontSize: '0.85rem', 
                    padding: '0.4rem 1rem', 
                    borderRadius: '100px', 
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-glass)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
