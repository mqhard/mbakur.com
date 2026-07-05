import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ExpertisePage from './ExpertisePage';

const Home = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <ExpertisePage isEmbedded={true} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
