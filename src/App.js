import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  const [pages] = useState([
    'About Me',
    'Portfolio',
    'Contact',
    'Resume'
  ])

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main className="main-content">
        {currentPage === 'About Me' && <About />}
        {currentPage === 'Portfolio' && <Projects />}
        {currentPage === 'Contact' && <Contact />}
        {currentPage === 'Resume' && <Resume />}
      </main>
    </div>
  );
}

export default App;
