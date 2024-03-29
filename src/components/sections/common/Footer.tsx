"use client";

import React from "react";
import Twemoji from "../../Twemoji";

import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 10%;
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: rgba(244, 248, 251, 0.2); */
  /* backdrop-filter: blur(40px); */

  /* border-top-left-radius: 50px; */

  color: ${(props) => props.theme.textPrimary};

  padding: 0 5vw;

  @media (min-width: 768px) {
    & > a {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      margin-right: 32px;
    }
  }

  @media (max-width: 550px) {
    height: 15%;
  }

  & img.up {
    height: 48px;
    width: 48px;
  }
`;

const heartBeat = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`;

export const DesignedBy = styled.p`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 600;
  font-style: italic;

  padding: 24px 16px;
  padding-bottom: 8px;

  text-align: center;

  span.emoji {
    margin-left: 0.75rem;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding-top: 8px;
  }

  @media (max-width: 385px) {
    flex-direction: column;
  }

  & span {
    display: inline-block;
    font-style: normal;

    animation: ${heartBeat} alternate 0.5s ease-in-out infinite;
  }
`;

export const Icons8 = styled.p`
  font-size: 14px;
  font-weight: 300;
  font-style: italic;

  padding-bottom: 16px;

  & > a {
    color: ${(props) => props.theme.textPrimary};
    text-decoration: underline;
  }

  & > a:active {
    color: ${(props) => props.theme.textPrimary};
  }

  & > a:visited {
    color: ${(props) => props.theme.textPrimary};
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <a href="#HeroSection">
        <img
          className="up"
          src="https://img.icons8.com/clouds/100/000000/up.png"
          alt="back to top"
        />
      </a>
      <DesignedBy>
        designed with <Twemoji emoji="❤️" /> by @0xSaurabh
      </DesignedBy>
      <Icons8>
        icons by{" "}
        <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
          icons8
        </a>
      </Icons8>
    </Container>
  );
};

export default Footer;
