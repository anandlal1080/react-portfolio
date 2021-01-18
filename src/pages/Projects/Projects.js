import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Pill } from "../../styles";
import {
  ProjectItem,
  ProjectTitle,
  SkillContainer,
  LinkContainer,
  FadeIn,
} from "./styles";

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <FadeIn>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <img
                src={project.images[0].resolutions.thumbnail.url}
                alt="Project Demo"
              />
              <p
                style={{
                  fontStyle: "oblique",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "4px",
                  paddingLeft: "2px",
                  width: "fit-content",
                }}
              >
                {project.summary}
              </p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>

              <LinkContainer>
                <a href={project.githubUrl} rel="noreferrer" target="_blank">
                  Github Repo
                </a>
              </LinkContainer>
            </ProjectItem>
          ))}
        </ul>
      </FadeIn>
    </Layout>
  );
};

export default Projects;
