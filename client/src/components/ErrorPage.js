import React from "react";
import styled from "styled-components";
import Spritesheet from "react-responsive-spritesheet"; //api to make dealing with sprites easier
import Player from "../assets/Player.png";
import PinkDonut from "../assets/pink-donut.png";
import ChocolateDonut from "../assets/chocolate-donut.png";

//This error page is a clicker game kinda like the cookie clicker.
const ErrorPage = () => {
  const [caloriesBurned, setCaloriesBurned] = React.useState(0); //we'll store the points here
  return (
    <>
      <Wrapper>
        <p>
          Oh no! Something crashed on our end. In the meantime you can help
          SuperFox lose some calories so he won't feel guilty eating donuts!
        </p>
        <p>Click on SuperFox to make him slash those calories! </p>
        <p>Calories burned: {caloriesBurned}</p>
        <SpriteWrapper>
          <Spritesheet
            className={"fox"}
            image={Player}
            widthFrame={64}
            heightFrame={64}
            steps={60} // total number of frames on the spritesheet
            fps={10}
            loop={false}
            autoplay={false}
            backgroundSize={"cover"}
            onClick={(Spritesheet) => {
              //when clicked the sprite will swing his sword
              Spritesheet.goToAndPlay(24); //starting sprite frame
              Spritesheet.setEndAt(28); //end frame
              setCaloriesBurned(caloriesBurned + 10);
            }}
          />
          <Donuts>
            <img src={PinkDonut} />
            <Chocolate src={ChocolateDonut} />
          </Donuts>
        </SpriteWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #999;
  p:first-child {
    text-align: center;
    color: white;
    font-size: 1.5rem;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    color: white;
    margin: 0.5rem 0;
  }
`;
const SpriteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  span {
    font-size: 5rem;
  }
  .fox {
    width: 30%;
  }
`;
const Donuts = styled.div``;
const Chocolate = styled.img`
  transform: translateX(-350px) rotate(45deg) scale(0.9);
  z-index: 2;
`;
const Pink = styled.img`
  z-index: 1;
`;

export default ErrorPage;
