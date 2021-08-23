import React from "react";
import styled from "styled-components";
import img from "../images/res.jpg";

const Page1 = () => {
  return (
    <>
    
      <StyledDiv>
        <div>
          <StyledH1>Azad Ali</StyledH1>
          <StyledH2>UX/UI / Front End Developer</StyledH2>
        </div>
        <StyledP>Portfolio</StyledP>
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 92vh;
  width: 100%;
  div {
    position: absolute;
    left: 15%;
    top: 32%;
  }
`;
const StyledH1 = styled.h1`
  font-size: 12vh;
  font-weight: 500;
  color: white;
`;
const StyledH2 = styled.h2`
  font-size: 3.2vh;
  font-weight: 200px;
  color: #dadada;
  opacity: 0.83;
`;
const StyledP = styled.h1`
  font-size: 12vh;
  font-weight: 200px;
  color: #dadada;
  opacity: 0.83;
  position: absolute;
  right: 10%;
  top: 32%;
`;



export default Page1;
