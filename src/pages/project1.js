import React,{useState,useEffect} from "react";
import {motion} from "framer-motion";
import { fade } from "../animation";
import img from "../images/vaccine.jpg";
import imgMob from "../images/mob_vaccine.jpg";
import styled from "styled-components";
import html from "../images/html.svg";
import css from "../images/css.svg";
import bs from "../images/bs.svg";
import js from "../images/js.svg";
import express from "../images/express.svg";
import mongo from "../images/mongodb.svg";
import git from "../images/git.svg";
import node from "../images/node.svg";
const Project1 = () => {
  const [width, setWidth]   = useState(window.innerWidth);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <>
      <StyledDiv>
        <motion.img src={width>600?img : imgMob} alt="Vaccine" 
        variants={fade}
        initial="hidden"
        animate="show"
        />
        <Box>
          <h1>CovInfo</h1>
          <h3>Easing vaccination verification.</h3>
          <Line1></Line1>
          <Line2></Line2>
          <a href="https://github.com/azad-ali786/404_forces.git">
            <button>Code</button>
          </a>
        </Box>
      </StyledDiv>
      <StyledSection>
        <StyledDescription>
          <FlexDiv>
            <Pointer></Pointer>
            <h1>
              <span>01</span>&nbsp; &nbsp; Description
            </h1>
          </FlexDiv>
          <h3>
          This project was build for Srijan Technerd, NITS Hackathon in 2 days.
          Verification process are quite time consuming and energy draining.
          To ease the verification and track process of students for institutions and organizations.
           To provide a platform simple still efficient implementation for colleges and institutions to
            track exact number of students in an institution. The verified
            status in the students portal can be used in time of re-entering the
            college.
          </h3>
        </StyledDescription>

        <StyledTech>
          <FlexDiv>
            <Pointer></Pointer>
            <h1>
              <span>02</span>&nbsp; &nbsp;Tech Utilized
            </h1>
          </FlexDiv>
          <TechLogoStyle>
            <img src={html} alt="HTML" />
            <img
              src={css}
              alt="CSS"
            />
            <img src={bs} alt="BS" />
            <img src={js} alt="JS" />
            <img src={node} alt="Node" />
            <img src={express} alt="Express" />
            <img src={mongo} alt="MONGO" />
            <img src="https://jwt.io/img/pic_logo.svg" alt="jwt" />
            <img src={git} alt="Github" />
          </TechLogoStyle>
        </StyledTech>
        <StyledAchievements>
          <FlexDiv>
            <Pointer></Pointer>
            <h1>
              <span>03</span>&nbsp; &nbsp;Achievements
            </h1>
          </FlexDiv>
          <h3>
            Winners of Srijan Technerd, NITS Hackathon.
          </h3>
        </StyledAchievements>
      </StyledSection>
    </>
  );
};
const StyledDescription = styled.div`
  padding: 3vh 0;
  h3 {
    font-size: clamp(0.75rem,2vw,1.25rem);
    color: #2164CF;
    font-weight: 400;
    padding: 0 40px;
    text-align: justify;
    line-height: 1.75;
  }
`;
const FlexDiv = styled.div`
  display: flex;
  h1 {
    font-size: clamp(1rem,5vw,2.4rem);
    font-weight: bold;
    span {
      color: #ff4d5a;
    }
  }
`;
const StyledTech = styled.div`
 padding: 3vh 0;
`;
const TechLogoStyle = styled.div`
  img {
    margin-left: 40px;
    height: 50px;
    @media only screen and (max-width: 600px) {
      height: 30px;
   }
  }
`;
const StyledAchievements = styled.div`
  padding: 3vh 0;
  h3 {
    font-size: clamp(0.85rem,2vw,1.25rem);
    color: #2164CF;
    font-weight: 400;
    padding: 0 40px;
    text-align: justify;
    line-height: 1.75;
  }
`;
const StyledSection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #ebe8e7;
  padding-top: 10vh;
`;
const Pointer = styled.div`
  margin-bottom: 50px;
  height: 3px !important;
  margin-right: 10px;
  margin-top: 16px;
  width: 30px;
  background-color: black;
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
    margin-bottom: 15px;
 }
`;

const StyledDiv = styled.div`
  position: relative;
  height: 92vh;
  width: 100%;
  @media only screen and (max-width: 600px) {
    height: 50vh;
 }
  img {
    width: 64%;
    height: 100vh;
    position: absolute;
    object-fit: center;
    right: 0%;
    top: -10%;
    @media only screen and (max-width: 600px) {
      top: -18%;
      height: 58vh;
   }
  }
`;
const Box = styled.div`
  z-index: 998;
  position: absolute;
  top: 20%;
  left: 10%;
  h1 {
    font-size: clamp(4rem,15vw,9rem);
    color: #e1dede;
    opacity: 73%;
    font-weight:600;
  }
  h3 {
    font-size: clamp(1rem,5vw,2.4rem);
    color: #9e9b9b;
    padding-bottom: 2vw;
    font-weight:200;
  }
  button {
    font-size: clamp(0.5rem,3vw,1.25rem);
    background: transparent;
    border: solid 1px white;
    color: white;
    padding: 1vh 3vh 1vh 3vh;
    margin-left: 4.5vw;
    transition: 0.25s;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
const Line1 = styled.div`
  height: 0.4vw;
  width: 10vw;
  border-radius: 10px;
  background-color: #009dcb;
  margin-bottom: 3vh;
  @media only screen and (max-width: 600px) {
    margin-bottom: 2vw; 
 }
`;
const Line2 = styled.div`
  height: 0.4vw;
  width: 10vw;
  background-color: #009dcb;
  border-radius: 10px;
  margin-bottom: 2vw;
  margin-left: 10vw;
  @media only screen and (max-width: 600px) {
    margin-bottom: 3vw; 
 }
`;

export default Project1;
