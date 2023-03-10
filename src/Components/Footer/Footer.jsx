import React from "react";
import {
  FooterContainer,
  FooterColOne,
  FooterSubColOne,
  FooterSubColOneBody,
  TitleOne,
  SubTitleOne,
  ConName,
  Date,
  ConVenue,
  ConeAddress,
  FooterSubColTwo,
  FooterSubColTwoBody,
  TitleTwo,
  SubTitleTwo,
  Office,
  OfficeAddress,
  ConvContact,
  ConContactInfo,
  FooterColTwo,
  FooterContactP
} from "./FooterElements";
import img1 from "../../Images/LogoHigh.png";
const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterColOne>
        <FooterSubColOne>
          <FooterSubColOneBody>
            <TitleOne>DCS Sessions 2023</TitleOne>
            {/* <SubTitleOne>information</SubTitleOne> */}
            <ConeAddress>
              <p>Learning Sessions</p>
              <p>Mock Interviews</p>
              <p>English Programme</p>
            </ConeAddress>
          </FooterSubColOneBody>
        </FooterSubColOne>
        <FooterSubColTwo>
            <FooterSubColTwoBody>
            <TitleTwo>Contact Us</TitleTwo>
          {/* <SubTitleTwo>Contact us</SubTitleTwo> */}


          <OfficeAddress>
            <p><pre>Address:</pre>Department of Computer Science, University of Ruhuna, Matara, Sri Lanka. </p>
            <p><pre>Phone:</pre> +94 041 2222681 ,  +94 041 2222682 </p>
            <p><pre>Web:</pre>https://www.sci.ruh.ac.lk/computer/</p>
            
          </OfficeAddress>
          <ConContactInfo>
            <FooterContactP></FooterContactP>
          </ConContactInfo>
            </FooterSubColTwoBody>
          
        </FooterSubColTwo>
      </FooterColOne>

      <FooterColTwo>
      <a href="/home"> <img src={img1} alt="" /></a>
      </FooterColTwo>
    </FooterContainer>
  );
};

export default Footer;
