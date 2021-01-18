import styled, { keyframes } from "styled-components";
import { green30 } from "@carbon/colors";
import { fadeIn } from "react-animations";

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`;
export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-style: italic;
  color: ${green30};
  font-weight: bold;
`;

export const Paragraph = styled.p`
  display: inline-block;
  font-style: oblique;
  white-space: pre-wrap;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding-left: 2px;
`;

export const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;
