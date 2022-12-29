import './App.css';

import Navigation from './Navigation/Navigation';

import Hero from './Hero/Hero';

import Footer from './Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />
        <div className="app-body">
          <Hero />    
        </div>
      <Footer />
    </div>
  )
};

export default App;
