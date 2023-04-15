import React from "react";
import Navbar from "../../Components/Navigation/Navbar";
import LandingPage from "./LandingPage";
import About from "../About/About";
import Work from "../Work/Work";

function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <Work />
    </>
  );
}

export default Home;
