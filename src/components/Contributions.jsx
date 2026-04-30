import React from 'react';

const Contributions = () => {
  // Generate a mock contribution graph
  const weeks = Array.from({ length: 52 });
  
  return (
    <div className="contribution-section">
      <h3 className="contribution-title">1,248 contributions in the last year</h3>
      
      <div className="contribution-graph">
        {weeks.map((_, wIndex) => (
          <div key={wIndex} className="contribution-week">
            {Array.from({ length: 7 }).map((_, dIndex) => {
              // Randomly generate contribution levels (mostly 0s and 1s, some 2s, 3s, 4s)
              const rand = Math.random();
              let level = 0;
              if (rand > 0.6) level = 1;
              if (rand > 0.8) level = 2;
              if (rand > 0.9) level = 3;
              if (rand > 0.95) level = 4;
              
              return <div key={dIndex} className="contribution-cell" data-level={level}></div>;
            })}
          </div>
        ))}
      </div>
      
      <div className="contribution-legend">
        <span className="contribution-legend-label">Less</span>
        <div className="contribution-cell" data-level="0"></div>
        <div className="contribution-cell" data-level="1"></div>
        <div className="contribution-cell" data-level="2"></div>
        <div className="contribution-cell" data-level="3"></div>
        <div className="contribution-cell" data-level="4"></div>
        <span className="contribution-legend-label">More</span>
      </div>
    </div>
  );
};

export default Contributions;
