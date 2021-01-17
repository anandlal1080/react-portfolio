import styled from "styled-components";
import { white, green30 } from "@carbon/colors";

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const ProjectTitle = styled.h4`
  font-weight: bold;
  color: ${green30};
  font-style: italic;
`;

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`;

export const LinkContainer = styled.div`
  margin-top: 1.2rem;
`;
