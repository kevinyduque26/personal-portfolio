import './App.css';

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

function App() {
  return (
    <body className="app">
      <Navigation />
      <Hero />
      <QuicklinksMain />
      <RecentHighlights />
      <Experience />
      <TechnicalSkills />
      <Transition />
      <MusicSpotlight />
      <FeaturedContent />
      <Footer />
    </body>
  )
};

export default App;
