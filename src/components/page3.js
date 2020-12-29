import React from "react";
import styled from "styled-components";
import img from "../images/pic2.png";
const Page3 = () => {
  return (
    <>
      <StyledDiv>
        <img src={img} alt="" />
        <Box>
          <h1>Leafbeats</h1>
          <h3>Music webapp.</h3>
          <Line1></Line1>
          <Line2></Line2>
          <button>Show more!</button>
        </Box>
        <Number>02</Number>
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
    right: 13%;
    top: 20%;
  }
`;
const Box = styled.div`
  z-index: 1000;
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
    font-size: 3vh;
    background: #696969;
    border: none;
    padding: 2vh;
    border-radius: 18px;
    margin-left: 65px;
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
  color: #242424;
`;

export default Page3;
