import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Library = ({ check }) => {
  return (
    <Menu
      animate={
        check
          ? { transition: { duration: 0.75, ease: "easeOut" } }
          : { x: -1000, transition: { duration: 0.75, ease: "easeOut" } }
      }
    ></Menu>
  );
};
const Menu = styled(motion.div)`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 1;
  left: 0;
  transform: translateX(-100%);
  background-color: #303032;
  display: flex;
`;
export default Library;
