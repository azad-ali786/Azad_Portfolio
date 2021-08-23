import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import img from "../images/pic4.png";
const Page4 = () => {
  return (
    <>
      <StyledDiv>
        <img src={img} alt="" />
        <Box>
          <h1>About me</h1>
          <h3>I love to Design and develop.</h3>
          <h3>A constant learner.</h3>
          <Line1></Line1>
          <Line2></Line2>
          <a href="/About"><button>Show more</button></a>
        </Box>
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  img {
    position: absolute;
    right: 12%;
    top: 20%;
  }
`;
const Box = styled.div`
  z-index: 1000;
  position: absolute;
  top: 25%;
  left: 7.5%;
  h1 {
    font-size: 20vh;
    color: #e1dede;
    opacity: 73%;
  }
  h3 {
    font-size: 4vh;
    color: #9e9b9b;
  }
  button {
    color:white;
    font-size: 3vh;
    background: transparent;
    border: solid white 1px;
    padding: 1.5vh;
    margin-left: 65px;
    cursor:pointer;
    transition:0.5s;
    &:hover {
      padding: 1.7vh;
    }
  }
`;
const Line1 = styled.div`
  height: 6px;
  width: 150px;
  border-radius: 10px;
  background-color: #009dcb;
  margin-bottom: 3vh;
  margin-top: 2vh;
`;
const Line2 = styled.div`
  height: 6px;
  width: 150px;
  background-color: #009dcb;
  border-radius: 10px;
  margin-bottom: 4vh;
  margin-left: 150px;
`;
export default Page4;
