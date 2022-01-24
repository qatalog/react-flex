import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Flex from "react-flex";

function randomStyle() {
  const height = Math.max(Math.min(Math.floor(Math.random() * 200), 200), 20);
  const width = Math.max(Math.min(Math.floor(Math.random() * 200), 200), 100);

  return { height, width, backgroundColor: "red", color: "white" };
}

function App() {
  return (
    <div className="App">
      {/* @ts-ignore */}
      <Flex direction="a" alignItems="center" gap={8}>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
      </Flex>
    </div>
  );
}

export default App;
