import styled from "styled-components";
import { NavHashLink as Link } from "react-router-hash-link";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #020424;
  height: 80px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
  padding: 0.5rem calc((90vw - 1000px) / 2);
  z-index: 10;
  position: fixed;

  /* @media screen and (min-width:768px) {
    max-width:900px;
    background-color:red;
  } */
`;

export const NavLink = styled(Link)`
  color: #f0f1f3;
  display: flex;
  align-items: center;
  font-size: 15px;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: 700px;
  &:active {
    color: #283994;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
 
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 6px;
  background: #8862e0;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
  padding: 10px 22px;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavDivider = styled.div`
  background: #091839;
  /* background: #17165a; */
  width: 100%;
  height: 0.5px;
`;
