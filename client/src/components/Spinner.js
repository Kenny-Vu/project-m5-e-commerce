import React from "react";
import styled from "styled-components";
import Spritesheet from "react-responsive-spritesheet"; //api to make dealing with sprites easier
import Player from "../assets/Player.png";

//Component for loading screen
const Spinner = () => {
  return (
    <Wrapper>
      <Spritesheet
        className={"fox"}
        image={Player}
        widthFrame={64}
        heightFrame={64}
        startAt={0} //starting frame
        endAt={5} //end frame
        steps={60} // total number of frames on the spritesheet
        fps={10}
        loop={true} // make the sprite animation loop so the sprite character runs forever
        backgroundSize={"cover"}
      />
      <span>Exercising...</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  span {
    font-size: 5rem;
  }
  .fox {
    width: 20%;
  }
`;

export default Spinner;
