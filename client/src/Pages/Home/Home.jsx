import React from "react";
import Navbar from "../../Components/Navigation/Navbar";
import LandingPage from "./LandingPage";
import About from "../About/About";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
