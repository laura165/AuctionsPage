import React, { useState } from "react";
import {
  Nav,
  Bars,
  NavBtn,
  NavMenu,
  NavLink,
  NavBtnLink,
  NavDivider,
} from "./NavbarElements";
import SignInDesign from "../SignIn/SignInDesign";
import handleOpenModal from "../SignIn/SignInDesign";
import SignUpMain from "../SignUp/SignUpMain";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(true);

  const showLinks = (value) => {
    setShowModal2(value);
  };

  const handleOpenModal = (i) => {
    setShowModal(true);
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  const [showSignUp, setShowSignUp] = useState(false);
  const handleOpenSignUp = (i) => {
    setShowSignUp(true);
  };

  const handleCloseSignUp = (e) => {
    e.stopPropagation();
    setShowSignUp(false);
  };

  return (
    <Nav>
      <NavLink id="navLinkLogo" to="/">
        <h1>tolkon</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/about" activeStyle>
          Trending
        </NavLink>
        <NavLink to="/services" activeStyle>
          Market Activity
        </NavLink>
        {/* <NavLink to="/contact-us" activeStyle>
          Contact Us
        </NavLink> */}
        {showModal2 && (
          <>
            <NavLink to="/SignUp" activeStyle onClick={handleOpenSignUp}>
              Sign Up
            </NavLink>
            <NavBtnLink to="/sign-in" onClick={handleOpenModal}>
              Sign In
            </NavBtnLink>
          </>
        )}
      </NavMenu>

      {/* <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn> */}

      <SignInDesign showModal={showModal} handleCloseModal={handleCloseModal} />
      <SignUpMain showModal={showSignUp} handleCloseModal={handleCloseSignUp} />
    </Nav>
  );
};

export default Navbar;
