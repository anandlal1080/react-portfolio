import styled from "styled-components";
import { white, green30, red60 } from "@carbon/colors";

export const WorkItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const WorkTitle = styled.h4`
  font-weight: bold;
  color: ${green30};
`;

export const JobTitle = styled.p`
  font-weight: bold;
  display: inline-block;
  color: ${red60};
`;
