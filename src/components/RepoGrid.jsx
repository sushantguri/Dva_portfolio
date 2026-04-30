import React, { useState } from 'react';
import { Book, Star, ExternalLink, Code } from 'lucide-react';

const RepoGrid = () => {
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ["All", "Python", "NLP", "Tableau", "Analytics", "Google Sheets", "KPI Design", "Dashboarding", "Workforce Analytics"];

  const repos = [
    {
      title: "WildChat-Analytics",
      visibility: "Public",
      desc: "End-to-End NLP Pipeline & BI Suite processing 1M+ ChatGPT conversations.",
      lang: "Python",
      langColor: "#3572A5",
      stars: 12,
      topics: ["Python", "NLP", "Tableau", "Analytics", "Workforce Analytics"],
      problem: "Operators lack visibility into user drop-off, geographic toxicity trends, and engagement concentration, leading to instinct-driven safety decisions.",
      dataset: "AllenAI WildChat-1M dataset. Over 1,000,000 real-world ChatGPT interactions across 148 countries.",
      cleaning: "6-stage Python ETL pipeline. Extracted JSON logs, enriched text using NLP (VADER, Langdetect), generated K-Means clusters.",
      kpis: "Tracked 12 production metrics including Turn-Count Retention, Toxicity Rate, and Prompt Categories.",
      insights: [
        "Identified a 47% session drop-off rate at Turn 2.",
        "Germany showed a 16.97% toxicity rate (5.3× average), while China sat at 1.10%.",
        "Segmented a power-user cohort where 8% of users drive 59% of engagement."
      ],
      recommendations: "Shift safety resources away from pure volume markets to high-toxicity vectors. Implement active retention prompts at Turn 2.",
      github: "https://github.com/Taj-2005/SectionA_Group6_WildChat",
      live: "https://public.tableau.com/views/WildChat_Analytics_Platform/ExecutiveSummary"
    },
    {
      title: "Retail-Sales-Dashboard",
      visibility: "Public",
      desc: "Data transformation and interactive dashboard for retail decision-support.",
      lang: "Jupyter Notebook",
      langColor: "#DA5B0B",
      stars: 8,
      topics: ["Analytics", "Google Sheets", "KPI Design", "Dashboarding"],
      problem: "Management struggled to track revenue trends clearly and measure discount impact due to messy unstructured data.",
      dataset: "Retail Store Sales Data comprising 11,362 transactions and 62,889 units sold.",
      cleaning: "Standardized missing values, removed duplicates, standardized date formats, and engineered calculated fields.",
      kpis: "Total Revenue (1.47M), Total Transactions (11k), MoM Growth (-0.97%), Revenue Concentration Ratio (0.51).",
      insights: [
        "Revenue Concentration Ratio of 0.51 flags heavy dependency on a few categories.",
        "Discounts boost volume but frequently reduce net profitability.",
        "Distinct behavioral patterns between in-store and online channels."
      ],
      recommendations: "Optimize discount strategies to protect margins, promote under-represented categories.",
      github: "https://github.com/ArchitCodes1204/SectionA_Group9-_retail_store_sales",
      live: "https://docs.google.com/spreadsheets/d/112HhLBUQNRM1SgkNvdGLBjG2Wk2nk5YADVmCigKOx2Q"
    }
  ];

  const filteredRepos = activeFilter === 'All' 
    ? repos 
    : repos.filter(repo => repo.topics.includes(activeFilter));

  return (
    <div>
      <div className="repo-list-header">
        <h2 className="repo-list-title">Repositories</h2>
        <span className="repo-list-count">{filteredRepos.length}</span>
      </div>
      
      <div className="repo-topic-filters">
        {filters.map(filter => (
          <button 
            key={filter} 
            className={`topic-pill ${activeFilter === filter ? 'topic-pill-active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="repo-grid">
        {filteredRepos.length > 0 ? (
          filteredRepos.map((repo, idx) => (
            <div key={idx} className="repo-card" onClick={() => setSelectedRepo(repo)}>
              <div className="repo-card-header">
                <Book size={16} color="#8b949e" />
                <span className="repo-card-name">{repo.title}</span>
                <span className="repo-card-badge">{repo.visibility}</span>
              </div>
              <p className="repo-card-desc">{repo.desc}</p>
              <div className="repo-card-tags">
                <span className="repo-card-tag">
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: repo.langColor }}></span>
                  {repo.lang}
                </span>
                <span className="repo-card-tag">
                  <Star size={14} /> {repo.stars}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '16px' }}>No repositories match this filter.</p>
        )}
      </div>

      {/* Case Study Modal */}
      {selectedRepo && (
        <div className="modal-overlay" onClick={() => setSelectedRepo(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{selectedRepo.title}</h3>
              <button className="modal-close" onClick={() => setSelectedRepo(null)}>✕</button>
            </div>
            
            <div className="modal-body">
              <p className="modal-desc">{selectedRepo.desc}</p>
              
              <div className="modal-section">
                <h4>Problem & Context</h4>
                <p>{selectedRepo.problem}</p>
              </div>
              <div className="modal-section">
                <h4>Dataset</h4>
                <p>{selectedRepo.dataset}</p>
              </div>
              <div className="modal-section">
                <h4>Cleaning & Transforms</h4>
                <p>{selectedRepo.cleaning}</p>
              </div>
              <div className="modal-section">
                <h4>KPIs</h4>
                <p>{selectedRepo.kpis}</p>
              </div>
              <div className="modal-section">
                <h4>Insights</h4>
                <ul>
                  {selectedRepo.insights.map((ins, i) => <li key={i}>{ins}</li>)}
                </ul>
              </div>
              <div className="modal-section">
                <h4>Recommendations</h4>
                <p>{selectedRepo.recommendations}</p>
              </div>
            </div>
            
            <div className="modal-actions">
              <a href={selectedRepo.github} target="_blank" rel="noreferrer" className="modal-btn-github">
                <Code size={16} style={{ marginRight: '6px' }} /> View Code
              </a>
              <a href={selectedRepo.live} target="_blank" rel="noreferrer" className="modal-btn-live">
                <ExternalLink size={16} style={{ marginRight: '6px' }} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RepoGrid;
