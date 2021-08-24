import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GloabalStyle";
import Project1 from "./pages/project1";
import Project2 from "./pages/project2";
import Project3 from "./pages/project3";
import Nav from "./components/Nav";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Page5 from "./components/page5";
import Cursor from "./components/Cursor";
import Aboutus from "./pages/AboutUs";
import { motion } from "framer-motion";
import styled from "styled-components";
function App() {
  const [check, setCheck] = useState(false);
  return (
    <div className="App">
      <GlobalStyle />
      <Cursor/>
      <Slider
        animate={{ y: -800, transition: { ease: "easeOut", duration: 3 } }}
      ></Slider>
      <Nav check={check} setCheck={setCheck} />
      <Switch>
        <Route path="/" exact>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
        </Route>
        <Route path="/Prakriti" exact>
          <Project1 />
        </Route>
        <Route path="/Leafbeats" exact>
          <Project2 />
        </Route>
        <Route path="/Gameopedia" exact>
          <Project3 />
        </Route>
        <Route path="/AboutUs" exact>
          <Aboutus />
        </Route>
      </Switch>
    </div>
  );
}
const Slider = styled(motion.div)`
height: 100vh;
width: 100%;
display: grid;
place-items: center;
position: fixed;
top: 0;
left: 0;
background: black;
`;

export default App;
