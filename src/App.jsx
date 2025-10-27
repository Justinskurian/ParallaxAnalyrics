import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MultilayerParallax from "./Components/MultilayerParallax";
import SimpleParallax from "simple-parallax-js";
import ScrollParallax from "./Components/ScrollParallax";
import ParallaxWebsite from "./Components/NewScroll";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/About";

("./Components/NewScroll");

function App() {
  return (
    <div className="app-container">
      {/* <div className="w-full h-screen">
        <MultilayerParallax />
      </div> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<ParallaxWebsite />} />

        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
      {/* <SimpleParallax maxTransition={0} orientation="right">
        <img src={"/P1.png"} alt={"image"} />
      </SimpleParallax> */}
      {/* <ScrollParallax /> */}
    </div>
  );
}

export default App;
