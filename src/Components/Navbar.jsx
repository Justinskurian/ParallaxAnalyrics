import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = ({ parallaxRef }) => {
  const handleScroll = (page) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(page);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: "rgba(20, 0, 40, 0.15)", // translucent dark violet
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Logo */}
      <Link to={"/"}>
        <motion.h1
          className="text-2xl font-bold text-violet-400"
          whileHover={{ scale: 1.05 }}
        >
          MySite
        </motion.h1>
      </Link>
      {/* Links */}
      <ul className="flex gap-8 text-lg font-medium">
        <Link to={"/"}>
          <li
            className="cursor-pointer text-violet-300 hover:text-pink-400 transition"
            onClick={() => handleScroll(0)}
          >
            Home
          </li>
        </Link>
        <Link to={"/about"}>
          <li
            className="cursor-pointer text-violet-300 hover:text-pink-400 transition"
            onClick={() => handleScroll(1)}
          >
            About
          </li>
        </Link>
        <li
          className="cursor-pointer text-violet-300 hover:text-pink-400 transition"
          onClick={() => handleScroll(2)}
        >
          Contact
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
