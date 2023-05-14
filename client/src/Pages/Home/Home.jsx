import React from "react";
import Navbar from "../../Components/Navigation/Navbar";
import LandingPage from "./LandingPage";
import About from "../About/About";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default Home;
