import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeaturedGames from '../components/FeaturedGames';
import StoreSection from '../components/StoreSection';
import PreviewSection from '../components/PreviewSection';

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedGames />
      <StoreSection />
      <PreviewSection />
    </Layout>
  );
};

export default Homepage;