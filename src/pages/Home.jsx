import React from 'react';
import Hero from '../components/Hero';
import SciFiHub from '../components/SciFiHub';
import Expertise from '../components/Expertise';
import Portfolio from '../components/Portfolio';
import Community from '../components/Community';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <SciFiHub />
      <Expertise />
      <Community />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
