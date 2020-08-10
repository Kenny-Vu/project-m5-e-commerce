import React from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { u1F4A3 as bomb } from "react-icons-kit/noto_emoji_regular/u1F4A3";

const FourOhFourPage = () => {
  return (
    <div>
      <Bomb>
        <Icon icon={bomb} size={200} />
      </Bomb>
      <p>It seems something has stopped working</p>
      <button>
        <a href="/items">return to Gallery</a>
      </button>
    </div>
  );
};

const Bomb = styled.div`
  svg {
    color: black;
  }
`;

export default FourOhFourPage;
