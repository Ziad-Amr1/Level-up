// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { 
  useAnimateCounter, 
  useScrollAnimation, 
  initWishlist, 
  initNewsletter, 
  setCurrentYear 
} from "./hook/useFeatures";
import { useLoadingScreen } from "./hook/loading";

import Homepage from './pages/Homepage';
import Store from './pages/Store';
import Community from './pages/Community';
import GameDetails from './pages/GameDetails';
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";



function App() {
  useLoadingScreen();
  useAnimateCounter("liveCounter", 1257);
  useAnimateCounter("playersOnline", 2243);
  useScrollAnimation(".game-card, .team-card, .stats-card");

  useEffect(() => {
    initWishlist();
    initNewsletter();
    setCurrentYear();
  }, []);


  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/community" element={<Community />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<p className="text-white text-center mt-10">Page not found</p>} />
      </Routes>
  );
}

export default App;