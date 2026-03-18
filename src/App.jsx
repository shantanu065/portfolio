import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="app-container">
      <BackgroundAnimation />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
