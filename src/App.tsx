import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Styling.scss";
import search from "./actions/search";
import AlphabeticList from "./AlphabeticList";
import Countdown from "./Countdown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="YourFriends" element={<AlphabeticList />} />
          <Route path="/" element={<Countdown />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
