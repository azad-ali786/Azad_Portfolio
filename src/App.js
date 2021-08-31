import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/GloabalStyle";
import Project1 from "./pages/project1";
import Project2 from "./pages/project2";
import Project3 from "./pages/project3";
import Project4 from "./pages/project4";
import Nav from "./components/Nav";
import Cursor from "./components/Cursor";
import AboutUs from "./pages/AboutUs";
import Landing from "./pages/Landing";
function App() {
  const [check, setCheck] = useState(false);
  return (
    <div className="App">
      <GlobalStyle />
      <Cursor/>
      <Nav check={check} setCheck={setCheck} />
      <Switch>
      <Route path="/" exact>
            <Landing />
          </Route>
        <Route path="/CovInfo" exact>
          <Project1 />
        </Route>
        <Route path="/Prakriti" exact>
          <Project2 />
        </Route>
        <Route path="/SortingVisualizer" exact>
          <Project3 />
        </Route>
        <Route path="/CSS" exact>
          <Project4 />
        </Route>
        <Route path="/AboutUs" exact>
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
