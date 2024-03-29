"use client";
import { styled } from "styled-components";

export const ProjectsContainer = styled.div`
  position: relative;
  display: grid;
  width: 100%;

  grid-template-columns: 1fr 1fr 1fr;

  padding: 32px;

  justify-content: space-around;
  gap: 28px;

  @media (max-width: 1525px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    padding: 12px;
    grid-template-columns: 1fr;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  border-bottom-right-radius: 50px;
  border: 1px solid
    ${(props) => (props.theme.isDark ? props.theme.textSecondary : "black")};

  padding: 24px;
`;

export const ProjectName = styled.p`
  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: 600;

  /* margin-bottom: 12px; */
  color: ${(props) => props.theme.textPrimary};

  margin: 8px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const ProjectDetails = styled.p`
  font-size: 16px;
  font-weight: 400;

  text-align: justify;

  width: 100%;

  margin: 12px 0;

  color: ${(props) => props.theme.textSecondary};

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 0px;
  }

  @media (max-width: 450px) {
    font-size: 14px;
  }

  .highlight {
    font-weight: 600;
    font-style: italic;
  }
`;

export const ProjectLinks = styled.div`
  margin-top: auto;
  padding: 8px 0;

  & > * {
    margin: 4px;
    margin-left: 0;
    margin-right: 12px;
  }

  & img {
    height: 36px;
    width: 36px;
  }

  @media (max-width: 768px) {
    padding: 8px 0px;
  }

  @media (max-width: 550px) {
    & img {
      height: 24px;
      width: 24px;
    }
  }
`;
