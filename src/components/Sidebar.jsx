import React from 'react';
import { Users, MapPin, Link as LinkIcon, Mail } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Random aesthetic placeholder avatar */}
      <img 
        src="/avatar.png" 
        alt="Sushant Avatar" 
        className="sidebar-avatar"
        onError={(e) => { e.target.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' }}
      />
      
      <h1 className="sidebar-name">Sushant</h1>
      <h2 className="sidebar-username">sushantguri</h2>
      
      <p className="sidebar-bio">
        CS AI Student & Data Storyteller. Building end-to-end data pipelines, NLP models, and Tableau dashboards.
      </p>
      
      <button className="sidebar-follow-btn">Follow</button>
      
      <div className="sidebar-info">
        <div className="sidebar-info-item">
          <Users size={16} />
          <span><b>24</b> followers</span>
          <span>·</span>
          <span><b>10</b> following</span>
        </div>
        <div className="sidebar-info-item" style={{ marginTop: '8px' }}>
          <MapPin size={16} />
          <span>India</span>
        </div>
        <div className="sidebar-info-item">
          <Mail size={16} />
          <a href="mailto:sushantv355@gmail.com">sushantv355@gmail.com</a>
        </div>
        <div className="sidebar-info-item">
          <LinkIcon size={16} />
          <a href="https://linkedin.com/in/sushant-guri" target="_blank" rel="noreferrer">linkedin.com/in/sushant-guri</a>
        </div>
      </div>
      
      <div className="sidebar-orgs">
        <h3 className="sidebar-orgs-title">Skills</h3>
        <div className="sidebar-orgs-list">
          <span className="org-pill">Python</span>
          <span className="org-pill">pandas</span>
          <span className="org-pill">scikit-learn</span>
          <span className="org-pill">NLP</span>
          <span className="org-pill">Tableau</span>
          <span className="org-pill">SQL</span>
          <span className="org-pill">ETL</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
