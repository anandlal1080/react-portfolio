import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle } from "../../styles";
import { WorkItem, WorkTitle, JobTitle, Paragraph, FadeIn } from "./styles";

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <FadeIn>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <WorkTitle>{work.position}</WorkTitle>
              <div>
                <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
                <span> &sdot; </span>
                <span>
                  {work.start.year} to {work.end.year}
                </span>
              </div>
              <Paragraph>{work.summary}</Paragraph>
            </WorkItem>
          ))}
        </ul>
      </FadeIn>
    </Layout>
  );
};

export default Work;
