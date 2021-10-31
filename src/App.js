/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { Component } from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import WhyUs from './pages/WhyUs';
import About from './pages/About';
import Service from './pages/Service';
import Value from './pages/Value';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

class App extends Component{
  render(){
    return(
      <>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <Header />
      <Hero />
      <main id="main">
      <WhyUs />
      <About />
      <Service />
      <Value />
      <Portfolio />
      <Pricing />
      <Faq />
      <Contact />
      </main>{/* End #main */}
      <Footer />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
      </>
    );
  }
}

export default App;
