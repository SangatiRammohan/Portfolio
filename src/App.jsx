import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
// import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
// import './App.css';
import portfolioData from './data/portfolioData';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Hero userData={portfolioData.user} />
      <About />
      <Skills skills ={portfolioData.skills}/>
      <Projects projects={portfolioData.projects}/>
      {/* <Services /> */}
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;