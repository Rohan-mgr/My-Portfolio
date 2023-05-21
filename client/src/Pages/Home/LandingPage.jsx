import React from "react";
import "./LandingPage.css";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import Button from "../../Components/Button/Button";

function LandingPage() {
  const handleProjectBtnClick = () => {
    document.getElementById("work").scrollIntoView();
  };

  return (
    <div className="landing-page">
      <div>
        <h1>Hi, my name is</h1>
      </div>
      <div>
        <h2 className="big-heading">Rohan Rana Magar.</h2>
      </div>
      <div>
        <h3 className="big-heading">I build things for the web.</h3>
      </div>
      <div>
        <p className="mt-2">
          I'm a full stack developer and UI/UX Designer with a passion for
          creating dynamic and engaging web applications. I specialize in both
          front-end and back-end development, and am comfortable working with a
          wide range of technologies and frameworks.
        </p>
      </div>
      <div>
        <Button Padding="1.25rem 1.75rem" Func={handleProjectBtnClick}>
          Check out my projects!
        </Button>
      </div>
      <div className="email-wrapper">
        <a href="mailto:rohan.magar.415@gmail.com" rel="noreferer">
          rohan.magar.415@gmail.com
        </a>
      </div>
      <div className="social-media-wrapper">
        <a href="https://github.com/Rohan-mgr" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a
          href="https://www.instagram.com/rohan_magar_07/?hl=en"
          rel="noreferrer"
          target="_blank"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.facebook.com/rohan.ranamagar.12/"
          rel="noreferrer"
          target="_blank"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/rohan-rana-magar-7931a923b/"
          rel="noreferrer"
          target="_blank"
        >
          <FiLinkedin />
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
