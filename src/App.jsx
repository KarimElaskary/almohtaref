import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import OurGoals from './components/OurGoals';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Hero />
      <AboutUs/>
      <OurServices/>
      <OurGoals/>
      <ContactUs/>
    </div>
  );
}

export default App;
