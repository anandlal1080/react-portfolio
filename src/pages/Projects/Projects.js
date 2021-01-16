import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Pill } from "../../styles";
import { ProjectItem, ProjectTitle, SkillContainer } from "./styles";

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <img
                src={project.images[0].resolutions.thumbnail.url}
                alt="Project Image"
              />
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
              <a href={project.githubUrl} target="_blank">
                Github Repo
              </a>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
