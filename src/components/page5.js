import React from "react";
import styled from "styled-components";
import img from "../images/cssweb.jpg";
import {motion} from "framer-motion"
import {useScroll} from "./useScroll"
import {fade,titleAnim,lineAnim} from "../animation"
const Page5 = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <StyledDiv>
        <img src={img} alt="" />
        <Box
        variants={fade}
        ref={element}
       animate={controls}
       initial="hidden">
        <Hide><motion.h1 variants={titleAnim}>CSE Soc.</motion.h1></Hide>
          <Hide><motion.h3 variants={titleAnim}>Official Website of CSE,NITS.</motion.h3></Hide>
          <Line1 variants={lineAnim}></Line1>
          <Line2 variants={lineAnim}></Line2>
          <a href="/CSS"><motion.button>Show more</motion.button></a>
        </Box>
        <Number>04</Number>
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled.div`
  scroll-snap-align: start;
  position: relative;
  height: 100vh;
  width: 100%;
  img {
    height: 65vh;
    width:50vw;
    border-radius: 16px;
    position: absolute;
    right: 12%;
    top: 20%;
  }
`;
const Box = styled(motion.div)`
  position: absolute;
  top: 30%;
  left: 16%;
  h1 {
    font-weight:600;
    font-size: 20vh;
    color: #e1dede;
    opacity: 73%;
  }
  h3 {
    font-weight:200;
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
const Line1 = styled(motion.div)`
  height: 6px;
  border-radius: 10px;
  background-color: #009dcb;
  margin-bottom: 3vh;
`;
const Line2 = styled(motion.div)`
  height: 6px;
  background-color: #009dcb;
  border-radius: 10px;
  margin-bottom: 4vh;
  margin-left: 150px;
`;
const Number = styled.h1`
font-weight:500;
  font-size: 30vh;
  position: absolute;
  bottom: 0%;
  right: 3%;
  color: white;
`;
const Hide = styled.div`
overflow: hidden;
`;
export default Page5;