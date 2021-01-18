import styled, { keyframes } from "styled-components";
import { white, green30 } from "@carbon/colors";
import { fadeIn } from "react-animations";

export const EducationItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0 10px;
  width: 50%;
`;

export const Institution = styled.h4`
  font-weight: bold;
  color: ${green30};
  font-style: italic;
`;

export const Degree = styled.p`
  font-weight: bold;
  display: inline-block;
  font-style: oblique;
`;

export const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;
