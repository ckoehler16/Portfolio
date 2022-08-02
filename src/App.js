// import './App.css';
import React, { UseState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  const [pages] = UseState([
    'About Me',
    'Portfolio',
    'Contact',
    'Resume'
  ])

  const [currentPage, setCurrentPage] = UseState(pages[0]);

  return (
    <html>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <body>
        {currentPage === 'About Me' && <About />}
        {currentPage === 'Portfolio' && <Projects />}
        {currentPage === 'Contact' && <Contact />}
        {currentPage === 'Resume' && <Resume />}
      </body>
    </html>
  );
}



export default App;
