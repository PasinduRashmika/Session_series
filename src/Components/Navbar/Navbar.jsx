import React, { useState } from "react";
import {
  NavContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended
} from "./NavbarElements";
import { Link } from "react-router-dom";
import img1 from "../../Images/galaxypng.png";
import { HashLink as Links } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer >
            <NavbarLink to="/home"><a href="/home">Home</a></NavbarLink>
            <NavbarLink to="/learningSessions"><a href='/learningSessions' >Learning Sessions</a></NavbarLink>
            <NavbarLink to="/mockinterviews"><a href='/mockinterviews' >Mock Interviews</a></NavbarLink>
            <NavbarLink to="/englishSession"><a href='/englishSession' >English Programme</a></NavbarLink>
            <NavbarLink to="/"><Links to='#footer' >About us</Links></NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
        <a href="/home"><Logo src={img1} ></Logo></a>
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
        <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
        <NavbarLinkExtended to="/learningSessions">Learning Sessions</NavbarLinkExtended>
        <NavbarLinkExtended to="/mockinterviews">Mock Interviews</NavbarLinkExtended>
        
        <NavbarLinkExtended to="/englishSession">English Programme</NavbarLinkExtended>
        <NavbarLinkExtended to="/">About us</NavbarLinkExtended>
      </NavbarExtendedContainer>
      )}
      
    </NavContainer>
  );
};

export default Navbar;
