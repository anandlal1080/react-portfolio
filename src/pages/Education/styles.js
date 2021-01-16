import styled from "styled-components";
import { white, magenta50 } from "@carbon/colors";

export const EducationItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`;

export const Institution = styled.h4`
  font-weight: bold;
  color: ${magenta50};
  font-style: italic;
`;

export const Degree = styled.p`
  font-weight: bold;
  display: inline-block;
  font-style: oblique;
`;
