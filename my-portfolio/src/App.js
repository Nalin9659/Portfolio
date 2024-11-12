import React from 'react';
import NavigationBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';


const App = () => (
  <div>
  {/* <NavigationBar/> */}
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer/>
    
  </div>
);

export default App;
