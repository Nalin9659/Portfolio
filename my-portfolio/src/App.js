import Intro from './components/intro';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';


const App = () => {
  
  return (
    <div className='app'>
      <Home/>
      <Intro/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      
    </div>
  );
};

export default App;
