import React from "react";
import styled, { keyframes } from "styled-components";
import king from "../assets/king.png";
import NoTeeth from "../assets/NoTeeth.png";
import TBCarolBaskins from "../assets/TBCarolBaskins.png";
import theonlybadjeff from "../assets/theonlybadjeff.png";
import alienship from "../assets/alienship.png";
import background from "../assets/background.png";
import Magic from "../assets/Magic.mp3";
import lion from "../assets/lion.gif";

const FourOhFourPage = () => {
  let audio = new Audio(Magic);

  const start = () => {
    audio.play();
  };

  return (
    <>
      start()
      <Light>
        <LightCircle></LightCircle>
        <LightCone></LightCone>
      </Light>
      <BackGround src={background}></BackGround>
      <FourContainer>
        <Sprites>
          <King src={king}></King>
          <Carol src={TBCarolBaskins}></Carol>
          <NanTeeth src={NoTeeth}></NanTeeth>
          <BadJeff src={theonlybadjeff}></BadJeff>
          <Ship src={alienship}></Ship>
          <Lion src={lion}></Lion>
        </Sprites>
        <Fix>
          <FourNumber>404</FourNumber>
          <FourMessage>Oh no seems we got lost!</FourMessage>
          <Mbutton onClick={start}>Enjoy some Music</Mbutton>
          <FourButton>
            <a href="/items">return to Gallery</a>
          </FourButton>
        </Fix>
      </FourContainer>
    </>
  );
};

const Lion = styled.img`
  position: absolute;
  max-height: 100px;
  max-width: 180px;
  margin-top: 76vh;
  margin-left: 220px;
  z-index: 10;
  transition: transform 1000ms ease-in-out;
  &:hover {
    transform: translate(40px, 40px);
  }
`;

const Mbutton = styled.button`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  background-color: #efce43;
  margin-top: 50px;
  font-weight: 800;
  padding: 5px 50px;
  border-radius: 20px;
`;

const BackGround = styled.img`
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const Cabduction = keyframes`
  0% {
    top: 15px;
    left: 20px;
  }
  25% {
    top: 18px;
    left: 23px;
  }
  50% {
    top: 20px;
    left: 20px;
  }
  75% {
    top: 23px;
    left: 20px;
  }
  100% {
    top: 15px;
    left: 20px;
  }
`;

const Nabduction = keyframes`
  0% {
    top: 29px;
    left: 23px;
  }
  20% {
    top: 26px;
    left: 21px;
  }
  50% {
    top: 22px;
    left: 25px;
  }
  70% {
    top: 25px;
    left: 25px;
  }
  100% {
    top: 29px;
    left: 23px;
  }
`;

const Jabduction = keyframes`
  0% {
    top: 43px;
    left: 36px;
  }
  25% {
    top: 39px;
    left: 35px;
  }
  60% {
    top: 46px;
    left: 43px;
  }
  75% {
    top: 35px;
    left: 40px;
  }
  100% {
    top: 43px;
    left: 36px;
  }
`;

const Kabduction = keyframes`
  0% {
    top: 34px;
    left: 29px;
  }
  29% {
    top: 32px;
    left: 35px;
  }
  53% {
    top: 36px;
    left: 33px;
  }
  82% {
    top: 44px;
    left: 48px;
  }
  100% {
    top: 34px;
    left: 29px;
  }
`;

const Ship = styled.img`
  position: absolute;
  z-index: 9;
  width: 600px;
  margin-left: 68px;
  margin-top: -260px;
`;

const Carol = styled.img`
  position: absolute;
  max-height: 100px;
  max-width: 180px;
  margin-top: 40vh;
  margin-left: 370px;
  z-index: 10;
  transform: rotate(310deg);
  transition: transform 1000ms ease-in-out;
  animation: ${Cabduction} 4s infinite linear;
  &:hover {
    transform: translate(40px, 40px);
  }
`;

const NanTeeth = styled.img`
  position: absolute;
  max-height: 100px;
  max-width: 180px;
  margin-top: 50vh;
  margin-left: 270px;
  z-index: 10;
  transform: rotate(160deg);
  transition: transform 1000ms ease-in-out;
  animation: ${Nabduction} 4s infinite linear;
  &:hover {
    transform: translate(40px, 40px);
  }
`;

const BadJeff = styled.img`
  position: absolute;
  max-height: 100px;
  max-width: 180px;
  margin-top: 61vh;
  margin-left: 420px;
  z-index: 10;
  transform: rotate(10deg);
  transition: transform 1000ms ease-in-out;
  animation: ${Jabduction} 4s infinite linear;
  &:hover {
    transform: translate(40px, 40px);
  }
`;

const King = styled.img`
  position: absolute;
  max-height: 100px;
  max-width: 180px;
  margin-top: 25vh;
  margin-left: 290px;
  z-index: 10;
  transform: rotate(20deg);
  transition: transform 1000ms ease-in-out;
  animation: ${Kabduction} 4s infinite linear;
  &:hover {
    transform: translate(40px, 40px);
  }
`;

const Sprites = styled.div``;

const Fix = styled.div`
  margin-left: 60vh;
  margin-top: 20vh;
  text-align: center;
  position: absolute;
`;

const FourContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: #3d4258;
  font-family: "Encode Sans Condensed", sans-serif;
  display: inline-block;
  justify-content: center;
  align-items: center;
`;

const FourNumber = styled.div`
  font-size: 150px;
  font-weight: 900;
  letter-spacing: 10px;
  color: white;
`;

const FourMessage = styled.div`
  font-size: 35px;
  letter-spacing: 3px;
  font-weight: 500;
  color: white;
`;

const FourButton = styled.div`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  background-color: #efce43;
  margin-top: 50px;
  font-weight: 800;
  padding: 5px 50px;
  border-radius: 20px;
  a {
    text-decoration: none;
  }
`;

const LightCircle = styled.div`
  width: 450px;
  height: 200px;
  background-color: #f7ecbf;
  border-radius: 50%;
  position: absolute;
  top: 73%;
  left: 0%;
  z-index: 6;
`;

const LightCone = styled.div`
  position: absolute;
  border: 0 solid transparent;
  border-top-color: #efce43;
  bottom: 19vh;
  border-width: 155vh 225px;
  transform: rotate(180deg);
  z-index: 4;
`;

const Light = styled.div`
  margin-left: 140px;
  width: 45%;
  height: 100vh;
  position: absolute;
`;

export default FourOhFourPage;
