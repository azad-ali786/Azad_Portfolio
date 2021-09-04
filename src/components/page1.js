import React from "react";
import styled from "styled-components";
import img from "../images/res.jpg";
import {motion} from "framer-motion"
import {useScroll} from "./useScroll"
import {fade,titleAnim} from "../animation"
const Page1 = () => {
  const [element, controls] = useScroll();
  return (
    <BackgroundView>
      <StyledDiv variants={fade}
         ref={element}
        animate={controls}
        initial="hidden">
       <div>
       <Hide><StyledH1 variants={titleAnim}>Azad Ali</StyledH1></Hide>
       <Hide><StyledH2 variants={titleAnim}>UI/ UX/ Front End Developer</StyledH2></Hide>
        </div>
        <Hide><StyledP variants={titleAnim}>Portfolio</StyledP></Hide>
      </StyledDiv>
    </BackgroundView>
  );
};
const BackgroundView = styled(motion.div)`
background-image: url(${img});
object-fit: cover;
scroll-snap-align: start;
 background-repeat: no-repeat;
 background-attachment: fixed;
 background-size: cover;
 height: 92vh;
 width: 100%;
 display:grid;
 place-items:center;
`;
const StyledDiv = styled(motion.div)`
  width: 80%;
  display:flex;
  justify-content: space-between;
  div{
    z-index: 998;
    @media only screen and (max-width: 600px) {
      z-index: 1;
    }
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    height: 40vh;
  } 
  
`;
const StyledH1 = styled(motion.h1)`
  font-size: clamp(2rem,9vw,5rem);
  font-weight: 500;
  color: white;
`;
const StyledH2 = styled(motion.h2)`
  font-size: clamp(1rem, 2.5vw, 1.43rem);
  font-weight: 100;
  color: white;
  opacity: 0.83;
`;
const StyledP = styled(motion.h1)`
  font-size: clamp(2rem,9vw,5rem);
  font-weight: 500;
  color: white;
  opacity: 0.83;
`;
const Hide = styled.div`
overflow: hidden;
`;
export default Page1;
