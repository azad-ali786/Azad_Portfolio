import React from "react";
import styled from "styled-components";
import img from "../images/res.jpg";
import { motion } from "framer-motion";
const Page1 = () => {
  return (
    <>
      <StyledDiv>
        <div>
          <StyledH1>Azad Ali</StyledH1>
          <StyledH2>UX/UI Designer</StyledH2>
        </div>
        <StyledP>Portfolio</StyledP>
      </StyledDiv>
      <Slider
        animate={{ y: -800, transition: { ease: "easeOut", duration: 3 } }}
      ></Slider>
    </>
  );
};
const Slider = styled(motion.div)`
  position: absolute;
  background-color: #030303;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
`;
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
    top: 39%;
  }
`;
const StyledH1 = styled.h1`
  font-size: 12vh;
  font-weight: 500;
  color: white;
`;
const StyledH2 = styled.h2`
  font-size: 6vh;
  font-weight: 200px;
  color: #dadada;
  opacity: 0.73;
`;
const StyledP = styled.h1`
  font-size: 12vh;
  font-weight: 200px;
  color: #dadada;
  opacity: 0.83;
  position: absolute;
  right: 10%;
  top: 39%;
`;

export default Page1;
