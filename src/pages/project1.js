import React from "react";
import img from "../images/p1.png";
import styled from "styled-components";

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
          <button>Install</button>
        </Box>
      </StyledDiv>
      <StyledSection>
        <div>
          <StyledDescription>
            <div>
              <Pointer></Pointer>
              <h1>Description</h1>
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
            </div>
            <img src="" alt="" />
            <img src="" alt="" />
          </StyledDescription>

          <StyledTech>
            <h1>Tech Utilized</h1>
            <div></div>
            <div></div>
          </StyledTech>
        </div>
      </StyledSection>
    </>
  );
};
const StyledDescription = styled.div`
  height: 40vh;
  div {
    display: flex;
  }
`;
const StyledTech = styled.div`
  height: 50vh;
`;

const StyledSection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
  div {
    padding-top: 5vh;
  }
`;
const Pointer = styled.div`
  margin-bottom: 50px;
  height: 2px;
  width: 4vw;
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
    font-size: 2vw;
    background: #1d94db;
    border: none;
    color: white;
    padding: 1vh 3vh 1vh 3vh;
    border-radius: 13px;
    margin-left: 4.5vw;
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
