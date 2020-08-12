import React from "react";
import Tyson from "../assets/Tyson.jpg";
import styled, { keyframes } from "styled-components";

export default function VisualHomePage() {
  return (
    <div>
      <BackDrop src={Tyson}></BackDrop>
      <Motto>
        <Words>NaN Athletiphs</Words>
        <Wordstwo>Only the beth</Wordstwo>
        <GalleryButton>
          <a href="/items">View Gallery</a>
        </GalleryButton>
      </Motto>
    </div>
  );
}

const BackDrop = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const WordsFade = keyframes`
  0% {
    opacity: 0%
  }
  }
  100% {
opacity:100%
  }
`;

const Words = styled.div`
  font-size: 4em;
  padding-bottom: 15px;
  animation: ${WordsFade} 1.5s;
`;

const TwoFade = keyframes`
  0% {
    opacity: 0%
  }
  60% {
    opacity: 0%
  }
  }
  100% {
opacity:100%
  }
`;

const Wordstwo = styled.div`
  font-size: 4em;
  padding-bottom: 15px;
  animation: ${TwoFade} 2.5s;
`;

const Motto = styled.div`
  position: absolute;
  font-family: "Mistral";
  margin-top: 21vh;
  margin-left: 15vw;
  z-index: 1;
  color: white;
  display: flex;
  display: table-column;
  justify-content: center;
  text-align: center;
`;

const GalleryFade = keyframes`
  0% {
    opacity: 0%
  }
  70% {
    opacity: 0%
  }
  }
  100% {
opacity:100%
  }
`;

const GalleryButton = styled.button`
  font-size: 1.5em;
  padding: 20px;
  border-radius: 40px;
  z-index: 1;
  background-color: white;
  animation: ${GalleryFade} 3.5s;
  color: purple;
  a {
    text-decoration: none;
  }
`;
