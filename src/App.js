import './App.css';

import Navigation from './Navigation/Navigation';

import Hero from './Hero/Hero';
import QuicklinksMain from './QuicklinksMain/QuicklinksMain';
// import MusicSpotlight from './MusicSpotlight/MusicSpotlight';
import LanguageTicker from './LanguageTicker/LanguageTicker';
// import Testing from './Testing/Testing';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />
        <div className="app-body">
          <Hero />    
          <QuicklinksMain />
          {/* <MusicSpotlight /> */}
          <LanguageTicker />
          {/* <Testing /> */}
        </div>

      <Footer />
    </div>
  )
};

export default App;
