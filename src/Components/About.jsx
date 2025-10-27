import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const img = (name, wrap = false) =>
  `${wrap ? "url(" : ""}https://assets.codepen.io/721952/${name}.svg${
    wrap ? ")" : ""
  }`;

const AboutUs = () => {
  const parallax = useRef(null);

  return (
    <div className="w-full h-screen bg-[#0f172a] overflow-hidden">
      <Parallax ref={parallax} pages={3}>
        {/* ---------------- BACKGROUND (stars or gradient) ---------------- */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #0f172a, #1e293b, #334155)",
          }}
        />

        {/* ---------------- HERO / INTRO SECTION ---------------- */}
        <ParallaxLayer
          offset={0}
          speed={0.3}
          className="flex flex-col items-center justify-center text-white text-center"
        >
          <h1 className="text-6xl font-extrabold tracking-wide">
            About Our Company
          </h1>
          <p className="text-2xl mt-4 max-w-2xl">
            We craft innovative digital experiences powered by modern web
            technologies and creative design.
          </p>
          <button
            onClick={() => parallax.current.scrollTo(1)}
            className="mt-8 px-8 py-3 text-lg rounded-lg bg-teal-500 hover:bg-teal-600 transition text-white font-semibold"
          >
            Discover More ↓
          </button>
        </ParallaxLayer>

        {/* Floating decorative elements */}
        <ParallaxLayer offset={0.25} speed={-0.2} style={{ pointerEvents: "none" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3940/3940056.png"
            alt="floating planet"
            className="w-[15%] ml-[70%] opacity-80"
          />
        </ParallaxLayer>

        {/* ---------------- OUR STORY SECTION ---------------- */}
        <ParallaxLayer offset={1} speed={0.3} factor={1.5} className="bg-[#1e293b]" />

        <ParallaxLayer
          offset={1}
          speed={0.6}
          className="flex flex-col items-center justify-center text-white text-center p-8"
        >
          <h2 className="text-4xl font-bold">Our Story</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            Founded with a passion for innovation, our team brings ideas to
            life through technology and design. We specialize in creating
            user-focused digital solutions that connect brands with people.
            From startups to enterprises, we help businesses thrive in a
            rapidly evolving world.
          </p>
          <button
            onClick={() => parallax.current.scrollTo(2)}
            className="mt-8 px-8 py-3 text-lg rounded-lg bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold"
          >
            Meet the Team ↓
          </button>
        </ParallaxLayer>

        {/* Decorative image */}
        <ParallaxLayer offset={1.3} speed={-0.2} style={{ pointerEvents: "none" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5436/5436700.png"
            alt="decorative cloud"
            className="w-[20%] ml-[10%] opacity-90"
          />
        </ParallaxLayer>

        {/* ---------------- TEAM SECTION ---------------- */}
        <ParallaxLayer offset={2} speed={0.3} className="bg-[#334155]" />

        <ParallaxLayer
          offset={2}
          speed={0.6}
          className="flex flex-col items-center justify-center text-center text-white p-8"
        >
          <h2 className="text-4xl font-bold">Meet Our Team</h2>
          <p className="mt-4 max-w-xl text-lg">
            A diverse group of developers, designers, and dreamers working
            together to make digital magic happen.
          </p>

          {/* Simple team cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Carter",
                role: "Frontend Developer",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Sophia Patel",
                role: "UI/UX Designer",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
              {
                name: "Ryan Lee",
                role: "Backend Engineer",
                img: "https://randomuser.me/api/portraits/men/84.jpg",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-[#475569] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto border-4 border-teal-400"
                />
                <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default AboutUs;
