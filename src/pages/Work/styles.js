import styled from "styled-components";
import { white, green30, yellow20 } from "@carbon/colors";

export const WorkItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const WorkTitle = styled.h4`
  font-weight: bold;
  color: ${green30};
  font-style: italic;
`;

export const JobTitle = styled.p`
  font-weight: bold;
  display: inline-block;
  color: ${yellow20};
  font-style: italic;
`;

export const Paragraph = styled.p`
  display: inline-block;
  font-style: oblique;
  white-space: pre-wrap;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding-left: 2px;
`;
