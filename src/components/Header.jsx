import React from 'react';
import { Menu, Code } from 'lucide-react';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <button className="header-hamburger">
          <Menu size={20} />
        </button>
        <div className="header-logo">
          <Code size={32} />
        </div>
        <div className="header-breadcrumb">
          <span className="header-username">sushantguri</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
