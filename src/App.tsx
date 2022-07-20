import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Styling.scss";
import search from "./actions/search";
import AlphabeticList from "./AlphabeticList";
import Countdown from "./Countdown";

function App() {
  return (
    <>
      {/* <AlphabeticList /> */}
      <Countdown />
    </>
  );
}

export default App;
