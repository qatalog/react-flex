import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Flex from "react-flex";

function randomStyle() {
  const height = Math.max(Math.min(Math.floor(Math.random() * 200), 200), 20);
  const width = Math.max(Math.min(Math.floor(Math.random() * 200), 200), 100);

  return { height, width, backgroundColor: "red", color: "white" };
}

const baseStyle = {
  height: 150,
  width: 75,
  color: "white",
  backgroundColor: "blue",
};

function App() {
  return (
    <div className="App">
      {/* @ts-ignore */}
      <Flex direction="row" alignItems="center" wrap="wrap" gap={8}>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
        <div style={randomStyle()}>TEST</div>
      </Flex>
      <br />
      <Flex wrap="wrap" gap={16}>
        <div style={baseStyle}>TEST</div>
        <div style={baseStyle}>TEST</div>
        <div style={baseStyle}>TEST</div>
        <div style={baseStyle}>TEST</div>
        <div style={baseStyle}>TEST</div>
        <div style={baseStyle}>TEST</div>
        <div style={baseStyle}>TEST</div>
        <div style={baseStyle}>TEST</div>
        <div style={baseStyle}>TEST</div>
        <div style={baseStyle}>TEST</div>
        <div style={baseStyle}>TEST</div>
        <div style={baseStyle}>TEST</div>
        <div style={baseStyle}>TEST</div>
        <div style={baseStyle}>TEST</div>
      </Flex>
    </div>
  );
}

export default App;
