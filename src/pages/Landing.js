import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Page1 from "../components/page1";
import Page2 from "../components/page2";
import Page3 from "../components/page3";
import Page4 from "../components/page4";
import Page5 from "../components/page5";
import Page6 from "../components/page6";
const Landing = () => {
  return (
    <>
      <Slider
        animate={{ y: -800, transition: { ease: "easeOut", duration: 1.75 } }}
      ></Slider>
     <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </>
  );
};
const Slider = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 997;
  background: black;
`;
export default Landing;