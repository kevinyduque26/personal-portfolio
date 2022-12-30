import './App.css';

import Navigation from './Navigation/Navigation';

import Hero from './Hero/Hero';
import QuicklinksMain from './QuicklinksMain/QuicklinksMain';
import Testing from './Testing/Testing';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />
        <div className="app-body">
          <Hero />    
          <QuicklinksMain />
          {/* <Testing /> */}
        </div>
      <Footer />
    </div>
  )
};

export default App;
