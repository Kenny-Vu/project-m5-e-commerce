import React from "react";
import styled from "styled-components";
import Spritesheet from "react-responsive-spritesheet";
import Player from "../assets/Player.png";

const Spinner = () => {
  return (
    <Wrapper>
      <Spritesheet
        className={"fox"}
        image={Player}
        widthFrame={64}
        heightFrame={64}
        startAt={0}
        endAt={5}
        steps={60}
        fps={10}
        loop={true}
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
