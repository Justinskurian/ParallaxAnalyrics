import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParallaxDemo = () => {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "linear-gradient(#e66465, #9198e5)",
        }}
      />

      <Parallax pages={5} style={{ top: 0, left: 0 }}>
        {/* First Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>Scroll down</p>
        </ParallaxLayer>

        {/* Sticky Layer */}
        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.25rem",
              height: "10rem",
              width: "25%",
              textAlign: "center",
              borderRadius: "10px",
              marginLeft: "15%",
              backgroundColor: "#ff6d6d",
            }}
          >
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        {/* Floating Purple Card */}
        <ParallaxLayer
          offset={1.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.25rem",
              height: "10rem",
              width: "25%",
              textAlign: "center",
              borderRadius: "10px",
              marginRight: "15%",
              backgroundColor: "#9d65d0",
              color: "white",
            }}
          >
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        {/* Floating Blue Card */}
        <ParallaxLayer
          offset={2.5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.25rem",
              height: "10rem",
              width: "25%",
              textAlign: "center",
              borderRadius: "10px",
              marginRight: "15%",
              backgroundColor: "#5b65ad",
              color: "white",
            }}
          >
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxDemo;
