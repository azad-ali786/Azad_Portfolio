import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import img from "../images/pic3.png";
const Page4 = () => {
  return (
    <>
      <StyledDiv>
        <img src={img} alt="" />
        <Box>
          <h1>Gameopedia</h1>
          <h3>Game updates webapp.</h3>
          <Line1></Line1>
          <Line2></Line2>
          <a href="/Gameopedia"><button>Show more</button></a>
        </Box>
        <Number>03</Number>
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
  z-index: 998;
  position: absolute;
  top: 30%;
  left: 16%;
  h1 {
    font-size: 20vh;
    color: #e1dede;
    opacity: 73%;
  }
  h3 {
    font-size: 5vh;
    color: #9e9b9b;
    padding-bottom: 4vh;
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
`;
const Line2 = styled.div`
  height: 6px;
  width: 150px;
  background-color: #009dcb;
  border-radius: 10px;
  margin-bottom: 4vh;
  margin-left: 150px;
`;
const Number = styled.h1`
  font-size: 30vh;
  position: absolute;
  bottom: 0%;
  right: 3%;
  color: white;
`;

export default Page4;
