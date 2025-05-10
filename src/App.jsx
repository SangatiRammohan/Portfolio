import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';

import portfolioData from './data/portfolioData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setTimeout(() => {
          setData(portfolioData);
          setIsLoading(false);
        }, 2000); // 2 second delay to simulate loading
      } catch (error) {
        console.error("Error loading portfolio data:", error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      
      {!isLoading && data && (
        <div className="portfolio-app">
          <Navbar />
          <Hero userData={data.user} />
          <About />
          <Skills skills={data.skills} />
          <Projects projects={data.projects} />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;