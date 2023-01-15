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
      <Experience />
      <SkillsEducation />
      <Transition />
      <MusicSpotlight screenWidthSize={screenWidthSize} />
      <FeaturedContent />
      <Footer />
    </main>
  )
};

export default App;
