import React from 'react';
import Layout from './Layout';
import Hero from './Hero';
import FeaturedGames from './FeaturedGames';
import StoreSection from './StoreSection';
import PreviewSection from './PreviewSection';

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