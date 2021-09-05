import React,{useState,useEffect} from "react";
import styled from "styled-components";
import img from "../images/pic4.png";
import imgMob from "../images/mob_pic4.jpg";
import {motion} from "framer-motion"
import {useScroll} from "./useScroll"
import { fade, titleAnim, lineAnim, imgAnim, imgAnim2,imgAnim1} from "../animation";
const Page6 = () => {
  const [width, setWidth]   = useState(window.innerWidth);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const [element, controls] = useScroll();
  return (
    <>
      <StyledDiv ref={element} animate={controls} initial="hidden">
        <ImgBg variants={imgAnim}></ImgBg>
        <ImgBg1 variants={imgAnim1}></ImgBg1>
        <motion.img src={width>600?img : imgMob} alt="about" variants={imgAnim2}/>
        <Box variants={fade}>
        <Hide><motion.h1 variants={titleAnim}>About.</motion.h1></Hide>
          <Hide><motion.h3 variants={titleAnim}>I love to explore my imagination.</motion.h3></Hide>
          <Line1 variants={lineAnim}></Line1>
          <Line2 variants={lineAnim}></Line2>
          <a href="/About"><motion.button>Show more</motion.button></a>
        </Box>
      </StyledDiv>
    </>
  );
};
const StyledDiv = styled(motion.div)`
  overflow: hidden;
  scroll-snap-align: start;
  position: relative;
  height: 100vh;
  width: 100%;
  img {
    height: 65vh;
    border-radius: 16px;
    position: absolute;
    right: 12%;
    top: 20%;
    @media only screen and (max-width: 600px) {
       height: 45vh;
       right: 21%;
       top: 15%
    }
  }
`;
const Box = styled(motion.div)`
  position: absolute;
  top: 30%;
  left: 16%;
  @media only screen and (max-width: 600px) {
    left: 16%;
    top: 60%
 }
  h1 {
    font-weight: 600;
    font-size: clamp(4rem,15vw,9rem);
    color: #e1dede;
    opacity: 73%;
  }
  h3 {
    font-weight: 200;
    font-size: clamp(1rem,5vw,2.4rem);
    color: #9e9b9b;
    padding-bottom: 4vh;
  }
  button {
    color: white;
    font-size: clamp(0.5rem,3vw,1.25rem);
    background: transparent;
    border: solid white 1px;
    padding: 1.5vh;
    margin-left: 85px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      padding: 1.7vh;
    }
  }
`;
const ImgBg = styled(motion.div)`{
  height: 65vh;
  border-radius: 16px;
  position: absolute;
  right: 12%;
  top: 20%;
  background:#009dcb;
  z-index: -2;
  @media only screen and (max-width: 600px) {
    height: 45vh;
    right: 31%;
    top: 14%
 }
}`;
const ImgBg1 = styled(motion.div)`{
  height: 65vh;
  border-radius: 16px;
  position: absolute;
  right: 12%;
  top: 20%;
  background:#ff4d5a;
  z-index: -1;
  @media only screen and (max-width: 600px) {
    height: 45vh;
    right: 31%;
    top: 14%
 }
}`;
const Line1 = styled(motion.div)`
  height: 6px;
  border-radius: 10px;
  background-color: #009dcb;
  margin-bottom: 3vh;
  @media only screen and (max-width: 600px) {
    margin-bottom: 1vh;
 }
`;
const Line2 = styled(motion.div)`
  height: 6px;
  background-color: #009dcb;
  border-radius: 10px;
  margin-bottom: 4vh;
  margin-left: 150px;
  @media only screen and (max-width: 600px) {
    margin-bottom: 2vh;
    margin-left: 100px;
 }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default Page6;