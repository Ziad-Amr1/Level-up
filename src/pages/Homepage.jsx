import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import FeaturedGames from '../components/Home/FeaturedGames';
import StoreSection from '../components/Unused/StoreSection';
import PreviewSection from '../components/Store/PreviewGames';
import LiveStats from "../components/Home/LiveStats";
import About from '../components/Home/about';
import TeamSection from '../components/Home/TeamSection';

const Homepage = () => {
  return (
    <Layout>
      <Hero fullWidth />
      <LiveStats games={1257} players={2243} />
      <FeaturedGames />
      <About fullWidth />
      <TeamSection />
      {/* <StoreSection /> */}
      {/* <PreviewSection /> */}
    </Layout>
  );
};

export default Homepage;