import React from "react";
import "./Work.css";
import { Container } from "react-bootstrap";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import SmallCard from "../../Components/Common/SmallCard/SmallCard";
import useProjects from "../../hooks/useProjects";
import MySpinner from "../../Components/Spinner/Spinner";

function Work() {
  const { isLoading, projects } = useProjects();
  return (
    <Container fluid id="work">
      <h2 className="number-heading">
        <span>02.</span> Work
      </h2>
      <ul className="feature__projects">
        {isLoading ? (
          <div style={{ textAlign: "center" }}>
            <MySpinner spinnerSize="lg" />
          </div>
        ) : projects?.length > 0 ? (
          projects
            ?.filter((p) => p?.feature_project === true)
            ?.map((p) => {
              return (
                <li key={p?._id} className="project">
                  <div className="project__content">
                    <div>
                      <p className="project-overline">Featured Project</p>
                      <h3 className="project-title">
                        <a
                          href={p?.deployedLink || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {p?.title}
                        </a>
                      </h3>
                      <div className="project-description">
                        <p>{p?.description}</p>
                      </div>
                      <ul className="project-tech-list">
                        {p?.techList.map((tech, i) => {
                          return <li key={i}>{tech}</li>;
                        })}
                      </ul>
                      <div className="project-links">
                        <a
                          href={p?.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiGithub />
                        </a>
                        <a
                          href={p?.deployedLink}
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
                            src={`http://localhost:8000/${p?.imageUrl.replace(
                              "\\",
                              "/"
                            )}`}
                            alt="project-img"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </li>
              );
            })
        ) : (
          <p style={{ textAlign: "center" }}>No Projects Found!</p>
        )}
      </ul>
      <h2 className="bolder__heading">Other NoteWorthy Projects</h2>
      <ul className="projects__list">
        {isLoading ? (
          <div style={{ textAlign: "right" }}>
            <MySpinner spinnerSize="lg" />
          </div>
        ) : projects?.length > 0 ? (
          projects
            ?.filter((p) => p?.feature_project === false)
            ?.map((project) => (
              <SmallCard
                key={project?._id}
                title={project?.title}
                desc={project?.description}
                deployedLink={project?.deployedLink}
                githubLink={project?.githubLink}
                techList={project?.techList}
              />
            ))
        ) : (
          <p style={{ textAlign: "center" }}>No projects Found!</p>
        )}
      </ul>
    </Container>
  );
}

export default Work;
