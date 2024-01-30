import React, { useState, useEffect } from "react";
import credentials from "../credentials.dev.json";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import CreateReview from "./components/CreateReview";
import ReviewList from "./components/ReviewList";
import Games from "./components/Games";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/create-review/:gameName" element={<CreateReview />} />
        <Route path="/reviews" element={<ReviewList />} />
      </Routes>
    </div>
  );
};

export default App;
