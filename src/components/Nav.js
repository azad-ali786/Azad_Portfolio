import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import linkin from "../images/linkedin.svg";
import insta from "../images/insta.svg";
import fb from "../images/fb.svg";
import tweet from "../images/tweet.png";
import logo from "../images/logo.svg";
import axios from "axios";

const Nav = () => {
  const [check, setCheck] = useState(false);
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API}&query=Silchar`
      )
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {weather && (
        <StyledNav>
          <img src={logo} alt="logo" />
          <StyledDiv1>
            <Weather>
              <p>{weather.current.temperature} C</p>
              <p>{weather.request.query}</p>
            </Weather>
            <img src={linkin} alt="linkedin" />
            <img src={fb} alt="fb" />
            <img src={tweet} alt="tweet" />
            <img src={insta} alt="insta" />
            <StyledDiv2
              onClick={() => {
                setCheck(!check);
              }}
            >
              <Line1
                animate={check ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              ></Line1>
              <Line2
                animate={check ? { rotate: 135, y: -10 } : { rotate: 0, y: 0 }}
              ></Line2>
            </StyledDiv2>
          </StyledDiv1>
        </StyledNav>
      )}
    </>
  );
};
const Weather = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  height: 27px;
  color: white;
  align-item: center;
  text-align: center;
  justify-content: space-around;
`;
const StyledNav = styled.nav`
  position: absolute;
  width: 90%;
  height: 8vh;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
  justify-content: space-between;
  alight-items: center;
  text-align: center;
  position: sticky;
  top: 0;
  img {
    margin-left: 13px;
    height: 27px;
    width: 100px;
  }
`;
const StyledDiv1 = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  img {
    height: 27px;
    width: 27px;
  }
`;
const StyledDiv2 = styled.div`
  z-index: 100;
  display: flex;
  height: 27px;
  justify-content: space-between;
  margin-left: 2vw;
  width: 55px;
`;
const Line1 = styled(motion.div)`
  background: white;
  height: 8px;
  width: 55px;
  position: absolute;
  top: 0;
`;
const Line2 = styled(motion.div)`
  background: white;
  height: 8px;
  width: 55px;
  position: absolute;
  bottom: 0;
`;

export default Nav;
