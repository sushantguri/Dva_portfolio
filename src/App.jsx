import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RepoGrid from './components/RepoGrid';
import Contributions from './components/Contributions';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <div className="app-layout">
        <Sidebar />
        <main className="app-main">
          <RepoGrid />
          <Contributions />
        </main>
      </div>
    </>
  );
}

export default App;
