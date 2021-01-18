import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { EducationItem, Institution, Degree, FadeIn } from "./styles";

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <FadeIn>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>{education.institution}</Institution>
              <div>
                <Degree>
                  {education.studyType}, {education.area}
                </Degree>{" "}
                <span> &sdot; </span>
                <span>
                  {education.start.year} to {education.end.year}
                </span>
              </div>
              <Paragraph>
                {education.description.replace("\n\n", "\n")}
              </Paragraph>
            </EducationItem>
          ))}
        </ul>
      </FadeIn>
    </Layout>
  );
};

export default Education;
