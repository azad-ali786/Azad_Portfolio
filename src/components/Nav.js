import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import linkin from "../images/linkedin.svg";
import insta from "../images/insta.svg";
import fb from "../images/fb.svg";
import tweet from "../images/tweet.png";
import logo from "../images/logo.svg";

const Nav = ({ check, setCheck }) => {
  return (
    <>
      <StyledNav active={check}>
        <img src={logo} alt="logo" />
        <StyledDiv1>
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
        <NavItem active={check}>
          <li>
            <a href="/Prakriti"> Prakriti </a>
          </li>
          <li>
            <a href="/Leafbeats"> Leafbeats </a>
          </li>
          <li>
            <a href="/Gameopedia"> Gameopedia </a>
          </li>
          <li>
            <a href="/About"> About me </a>
          </li>
        </NavItem>
      </StyledNav>
    </>
  );
};
const StyledNav = styled.nav`
  overflow: hidden;
  z-index: 105;
  transition: 1s;
  ${({ active }) =>
    active &&
    `
    background: black;
    height: 100vh !important;
  `}
  cursor: auto;
  width: 100%;
  height: 10vh;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 2rem 0rem 2rem;
  justify-content: space-between;
  alight-items: center;
  text-align: center;
  position: sticky;
  top: 0;
  img {
    cursor: pointer;
    margin-left: 13px;
    height: 27px;
    width: 100px;
  }
`;
const StyledDiv1 = styled.div`
  height: 10vh;
  position: relative;
  display: flex;
  justify-content: space-around;
  img {
    width: 27px;
    transition: 0.2s;
    &:hover {
      transform: scale(1.25);
    }
  }
`;
const StyledDiv2 = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  height: 20px;
  justify-content: space-between;
  margin-left: 2vw;
  margin-top: 2px;
  width: 55px;
`;
const Line1 = styled(motion.div)`
  background: white;
  height: 4px;
  width: 40px;
  position: absolute;
  top: 0;
`;
const Line2 = styled(motion.div)`
  background: white;
  height: 4px;
  width: 40px;
  position: absolute;
  bottom: 0;
`;
const NavItem = styled.ul`
    font-weight: bolder;
    list-style: none;
    position: absolute;
    ${({ active }) =>
      !active &&
      `
    top: 70% !important;
  `}
    top:20%;
    left: 40%;
    li {
      a {
        color: white;
        transition: 0.5s;
        cursor: pointer;
        font-size: 8vh;
        line-height: 1.75;
        &:hover {
          color: #009dcb;
        }
      }
    }
  }
`;
/* 



import axios from "axios";

weather api
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



  <Weather>
                <p>{weather.current.temperature} C</p>
                <p>{weather.request.query}</p>
              </Weather>




   {weather && (
        <>
        </>
      )}


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




*/

export default Nav;
