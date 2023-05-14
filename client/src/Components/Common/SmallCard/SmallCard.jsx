import React from "react";
import "./SmallCard.css";
import { FiFolder, FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

function SmallCard(props) {
  const { title, desc, link, github, isGithubLinkPresent } = props;
  return (
    <li className="project__inner">
      <header>
        <div className="project__top">
          <div className="folder">
            <FiFolder />
          </div>
          <div className="project__links">
            {isGithubLinkPresent && (
              <a href={github} rel="noopener noreferrer" target="_blank">
                <FiGithub />
              </a>
            )}
            <a href={link} rel="noopener noreferrer" target="_blank">
              <HiOutlineExternalLink
                aria-label="External Link"
                style={{ width: "25px", height: "25px" }}
              />
            </a>
          </div>
        </div>
        <h3 className="project__title">
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
        <div style={{ fontSize: "17px" }} className="project__description">
          <p style={{ margin: "0 0 15px" }}>{desc}</p>
        </div>
      </header>
      <div>
        <ul className="project__tech__list">
          <li>HTML</li>
          <li>CSS</li>
          <li>Js</li>
          <li>React</li>
        </ul>
      </div>
    </li>
  );
}

export default SmallCard;
