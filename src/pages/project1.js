import React from "react";
import img from "../images/p1.png";
import styled from "styled-components";
import flutter from "../images/flutter.svg";
import firebase from "../images/firebase.svg";
const Project1 = () => {
  return (
    <>
      <StyledDiv>
        <img src={img} alt="" />
        <Box>
          <h1>Prakriti</h1>
          <h3>Recognisation app.</h3>
          <Line1></Line1>
          <Line2></Line2>
          <a href="https://github.com/azad-ali786/PRAKRITI.git"><button>Code</button></a>
        </Box>
      </StyledDiv>
      <StyledSection>
          <StyledDescription>
              <FlexDiv>
              <Pointer></Pointer>
              <h1><span>01</span>&nbsp; &nbsp; Description</h1>
              </FlexDiv>
              <h3>
                This project was build for NASA Space App Hackathon in 2
                days,Every small thing we do has an impact directly on the
                planet and life on it. Trees provide oxygen for us to breathe,
                and they are being cut down each day. We have a very little idea
                of what a single Tree can do, how much does a single Tree has an
                impact on us. We are looking forward to making the future, as
                well as the present generation aware of how can a single tree
                have a direct impact on us by comparing the benefits with
                materialistic things that most people can understand nowadays.
                Due to lack of time and experience, we couldn't implement it the
                way we wanted in terms of beautification and AR thing, however,
                it does serve it's basic purpose and shall be able to spread
                awareness
              </h3>
            
            <img src="" alt="" />
            <img src="" alt="" />
          </StyledDescription>

          <StyledTech>
          <FlexDiv>
              <Pointer></Pointer>
              <h1><span>02</span>&nbsp; &nbsp;Tech Utilized</h1>
              </FlexDiv>
              <TechLogoStyle>
              <img src={flutter} alt="Flutter" />
              <img src="https://1.bp.blogspot.com/-B3K1G5D9sPQ/WvDZJGvkqVI/AAAAAAAAFSc/zx6VYIc0IXQmB8oR4c0i7SKjSNL-2xiTQCLcBGAs/s1600/ml-kit-logo.png" alt="ML Kit" />
              <img src={firebase} alt="Firebase" />
              </TechLogoStyle>
         </StyledTech>
         <StyledAchievements>
         <FlexDiv>
              <Pointer></Pointer>
              <h1><span>03</span>&nbsp; &nbsp;Achievements</h1>
              </FlexDiv>
              <h3>
               Ranked under top 1000 teams from 18,000 teams competing with no age barrier but on skills and experience.</h3>
             
         </StyledAchievements>
      </StyledSection>
    </>
  );
};
const StyledDescription = styled.div`
  height: 40vh;
  h3{
    font-weight: normal;
    padding: 0 40px;
    text-align: justify;
    line-height: 1.75;
  }
`;
const FlexDiv = styled.div`
  display:flex;
  h1{
    font-weight: normal;
    font-size: 2vw;
    span{
      color:#FF4D5A;
    }
  }
`;
const StyledTech = styled.div`
  height: 20vh;
`;
const TechLogoStyle = styled.div`
   img{
     margin-left: 40px;
     height: 50px;
   }
`;
const StyledAchievements = styled.div`
  height: 30vh;
  padding-top: 5vh;
  h3{
    font-weight: normal;
    padding: 0 40px;
    text-align: justify;
    line-height: 1.75;
  }
`;
const StyledSection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #EBE8E7;
  padding-top: 10vh;
`;
const Pointer = styled.div`
  margin-bottom: 50px;
  height: 3px !important;
  margin-right: 10px;
  margin-top: 14px;
  width: 2vw;
  background-color: black;
`;

const StyledDiv = styled.div`
  position: relative;
  height: 92vh;
  width: 100%;
  img {
    width: 64%;
    position: absolute;
    right: 0%;
    top: -10%;
  }
`;
const Box = styled.div`
  z-index: 998;
  position: absolute;
  top: 20%;
  left: 10%;
  h1 {
    font-size: 10vw;
    color: #e1dede;
    opacity: 73%;
  }
  h3 {
    font-size: 2.5vw;
    color: #9e9b9b;
    padding-bottom: 2vw;
  }
  button {
    font-size: 1.56vw;
    background: transparent;
    border: solid 1px white;
    color: white;
    padding: 1vh 3vh 1vh 3vh;
    margin-left: 4.5vw;
    transition: 0.25s;
    cursor:pointer;
    &:hover{
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
`;
const Line2 = styled.div`
  height: 0.4vw;
  width: 10vw;
  background-color: #009dcb;
  border-radius: 10px;
  margin-bottom: 2vw;
  margin-left: 10vw;
`;

export default Project1;
