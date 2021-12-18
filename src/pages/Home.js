import React from 'react';
import CalltoAction from '../components/CalltoAction';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <CalltoAction />
      <Footer />
    </div>
  );
};

export default Home;
