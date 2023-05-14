import React from "react";
import "./Work.css";
import { Container, Row, Col } from "react-bootstrap";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import SmallCard from "../../Components/Common/SmallCard/SmallCard";
import { ProjectData } from "./projectdata";

function Work() {
  return (
    <Container fluid id="work">
      <h2 className="number-heading">
        <span>02.</span> Work
      </h2>
      <ul className="feature__projects">
        <li className="project">
          <div className="project__content">
            <div>
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">
                <a
                  href="https://photo-gallery-b0459.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photo Gallery
                </a>
              </h3>
              <div className="project-description">
                <p>
                  Allow the user to upload their photo and display them in grid
                  view
                </p>
              </div>
              <ul className="project-tech-list">
                <li>Html</li>
                <li>CSS</li>
                <li>Js</li>
                <li>React</li>
              </ul>
              <div className="project-links">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a
                  href="https://photo-gallery-b0459.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiOutlineExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="project__image">
            <a
              href="https://photo-gallery-b0459.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project__image__wrapper">
                <div>
                  <img
                    src={require("../../Assets/Images/react-gallery.PNG")}
                    alt="project-img"
                  />
                </div>
              </div>
            </a>
          </div>
        </li>
        <li className="project">
          <div className="project__content">
            <div>
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">
                <a
                  href="https://photo-gallery-b0459.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photo Gallery
                </a>
              </h3>
              <div className="project-description">
                <p>
                  Allow the user to upload their photo and display them in grid
                  view
                </p>
              </div>
              <ul className="project-tech-list">
                <li>Html</li>
                <li>CSS</li>
                <li>Js</li>
                <li>React</li>
              </ul>
              <div className="project-links">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a
                  href="https://photo-gallery-b0459.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiOutlineExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="project__image">
            <a
              href="https://photo-gallery-b0459.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project__image__wrapper">
                <div>
                  <img
                    src={require("../../Assets/Images/react-gallery.PNG")}
                    alt="project-img"
                  />
                </div>
              </div>
            </a>
          </div>
        </li>
        <li className="project">
          <div className="project__content">
            <div>
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">
                <a
                  href="https://photo-gallery-b0459.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photo Gallery
                </a>
              </h3>
              <div className="project-description">
                <p>
                  Allow the user to upload their photo and display them in grid
                  view
                </p>
              </div>
              <ul className="project-tech-list">
                <li>Html</li>
                <li>CSS</li>
                <li>Js</li>
                <li>React</li>
              </ul>
              <div className="project-links">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a
                  href="https://photo-gallery-b0459.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiOutlineExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="project__image">
            <a
              href="https://photo-gallery-b0459.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project__image__wrapper">
                <div>
                  <img
                    src={require("../../Assets/Images/react-gallery.PNG")}
                    alt="project-img"
                  />
                </div>
              </div>
            </a>
          </div>
        </li>
      </ul>
      <h2 className="bolder__heading">Other NoteWorthy Projects</h2>
      <ul className="projects__list">
        {ProjectData.map((project, index) => (
          <SmallCard
            key={project.projectID}
            title={project.title}
            desc={project.description}
            link={project.link}
            isGithubLinkPresent={project.hasOwnProperty("githubLink")}
            github={project.githubLink}
          />
        ))}
      </ul>
    </Container>
  );
}

export default Work;
