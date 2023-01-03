import React, { useEffect, useState } from 'react';

// CSS Import
import './App.css';

// Component Import
import Navigation from './Navigation/Navigation';
import Hero from './Hero/Hero';
import QuicklinksMain from './QuicklinksMain/QuicklinksMain';
import RecentHighlights from './RecentHighlights/RecentHighlights';
import Experience from './Experience/Experience';
import TechnicalSkills from './TechnicalSkills/TechnicalSkills';
import Transition from './Transition/Transition';
import MusicSpotlight from './MusicSpotlight/MusicSpotlight';
import FeaturedContent from './FeaturedContent/FeaturedContent';
import Footer from './Footer/Footer';

// THINGS LEFT TO DO
// Mobilelinks & Deskptop Links: Need to add links to secitons of the page and add ID in those sections

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
      {/* <p style={{backgroundColor: "red"}}>{screenWidthSize}</p> */}
      <Hero screenWidthSize={screenWidthSize} />
      <QuicklinksMain />
      <RecentHighlights />
      <Experience />
      <TechnicalSkills />
      <Transition />
      <MusicSpotlight />
      <FeaturedContent />
      <Footer />
    </main>
  )
};

export default App;
