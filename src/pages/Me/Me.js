import React from "react";
import Layout from "../../components/Layout";
import { Pill } from "../../styles";
import { SectionTitle, Paragraph, ProfileLink, FadeIn } from "./styles";

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <FadeIn>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </FadeIn>
      <FadeIn>
        <SectionTitle>Skills</SectionTitle>
        <FadeIn>
          {user.skills.map((skill) => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </FadeIn>
      </FadeIn>
      <FadeIn>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && " | "}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </FadeIn>
    </Layout>
  );
};

export default Me;
