import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const ParallaxWebsite = () => {
  const parallax = useRef(null);

  return (
    <div className="w-full h-screen bg-[#253237] overflow-hidden">
      <Parallax ref={parallax} pages={3}>

        {/* ---------------- Background Stars (persistent) ---------------- */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        {/* ---------------- HERO SECTION ---------------- */}
        <ParallaxLayer
          offset={0}
          speed={0.3}
          className="flex flex-col items-center justify-center text-white text-center"
        >
          <h1 className="text-6xl font-bold">Welcome to My Website</h1>
          <p className="text-2xl mt-4">
            Beautiful parallax effects powered by React Spring
          </p>
          <button
            className="mt-8 px-8 py-3 text-lg rounded-lg bg-blue-400 hover:bg-blue-500 transition text-white font-semibold"
          >
            Learn More ↓
          </button>
        </ParallaxLayer>

        {/* Decorative floating object */}
        <ParallaxLayer offset={0.3} speed={-0.2} style={{ pointerEvents: "none" }}>
          <img src={url("satellite4")} alt="satellite" className="w-[15%] ml-[70%]" />
        </ParallaxLayer>

        {/* ---------------- ABOUT US SECTION ---------------- */}
        <ParallaxLayer
          offset={1}
          speed={0.3}
          factor={1.5}
          className="bg-[#805E73]"
        />

        <ParallaxLayer
          offset={1}
          speed={0.6}
          className="flex flex-col items-center justify-center text-white text-center p-8"
        >
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-4 max-w-xl text-lg">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
          <button
            onClick={() => parallax.current.scrollTo(2)}
            className="mt-8 px-8 py-3 text-lg rounded-lg bg-purple-500 hover:bg-purple-600 transition text-white font-semibold"
          >
            Contact Us ↓
          </button>
        </ParallaxLayer>

        {/* Floating decorative card */}
        <ParallaxLayer offset={1.3} speed={-0.2} style={{ pointerEvents: "none" }}>
          <img src={url("cloud")} alt="cloud" className="w-[20%] ml-[10%]" />
        </ParallaxLayer>

        {/* ---------------- CONTACT SECTION ---------------- */}
        <ParallaxLayer
          offset={2}
          speed={0.3}
          className="bg-[#87BCDE]"
        />

        <ParallaxLayer
          offset={2}
          speed={0.6}
          className="flex flex-col items-center justify-center text-center p-8"
        >
          <h2 className="text-4xl font-bold text-[#253237]">Get in Touch</h2>
          <p className="mt-4 max-w-xl text-lg text-[#253237]">
            Have a project in mind? Let's work together!
          </p>

          <form className="mt-8 flex flex-col gap-4 w-72">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#253237]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#253237]"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#253237]"
            />
            <button
              type="submit"
              className="p-3 rounded-md bg-[#253237] hover:bg-[#1a1f24] transition text-white font-bold"
            >
              Send Message
            </button>
          </form>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
};

export default ParallaxWebsite;
