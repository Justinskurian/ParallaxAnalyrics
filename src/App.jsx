import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MultilayerParallax from "./Components/MultilayerParallax";
import SimpleParallax from "simple-parallax-js";
import ScrollParallax from "./Components/ScrollParallax";
import ParallaxWebsite from "./Components/NewScroll";
import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./Components/About";
import ReactGA from "react-ga4";
import AnalyticsTracker from "./Components/AnalyticsTracker";
ReactGA.initialize("G-Z9VGTRRGMY");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

("./Components/NewScroll");

function App() {
  const location = useLocation();

  // Initialize GA once when the app loads
  useEffect(() => {
    ReactGA.initialize("G-Z9VGTRRGMY"); // 🔹 Replace with your Measurement ID
  }, []);

  // Send a pageview event whenever the route changes
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return (
    <div className="app-container">
      {/* <div className="w-full h-screen">
        <MultilayerParallax />
      </div> */}
      <Navbar />
      <AnalyticsTracker />
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
