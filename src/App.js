import React, { useEffect, useState } from 'react';

// CSS Import
import './App.css';

// Component Import
import Navigation from './Navigation/Navigation';
import Hero from './Hero/Hero';
import About from './About/About';
import Expertise from './Expertise/Expertise';
import Highlights from './Highlights/Highlights';

import Experience from './Experience/Experience';
import SkillsEducation from './SkillsEducation/SkillsEducation';
import Transition from './Transition/Transition';
import MusicSpotlight from './MusicSpotlight/MusicSpotlight';
import FeaturedContent from './FeaturedContent/FeaturedContent';
import Footer from './Footer/Footer';

// THINGS LEFT TO DO
// Mobilelinks & Deskptop Links: Need to add links to secitons of the page and add ID in those sections

// IN TEXT LINK FORMAT
// <a className="text-link" target="_blank" href="https://www.bynder.com/en/" rel="noopener noreferrer">Bynder</a>

function App() {

  const [screenWidthSize, setScreenWidthSize] = useState(window.innerWidth)

  useEffect(() => {
      const resizeScreenWidthSize = () => setScreenWidthSize(window.innerWidth);
      window.addEventListener("resize", resizeScreenWidthSize); 
      return () => window.removeEventListener("resize", resizeScreenWidthSize);
  });

  return (
    <main className="app">
      <Navigation screenWidthSize={screenWidthSize} />
      <Hero screenWidthSize={screenWidthSize} />
      <About />
      <Expertise />
      <Highlights />
      <p style={{backgroundColor: "red"}}>{screenWidthSize}</p>
      <Experience />
      <p style={{backgroundColor: "red"}}>{screenWidthSize}</p>
      <SkillsEducation />
      <Transition />
      <MusicSpotlight screenWidthSize={screenWidthSize} />
      <FeaturedContent />
      <Footer />
    </main>
  )
};

export default App;
