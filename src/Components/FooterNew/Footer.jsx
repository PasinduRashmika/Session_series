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
            <TitleOne>Events</TitleOne>
            {/* <SubTitleOne>information</SubTitleOne> */}

            <ConName>Learning Sessions</ConName>
            {/* <Date>02 Apr 2023</Date> */}
            <ConName>Mock Interviews</ConName>
            <ConName>English Programme</ConName>

            {/* <ConVenue>Convoke Place Address</ConVenue>
            <ConeAddress>
              Department of Computer Science <br />University of Ruhuna
            </ConeAddress> */}
          </FooterSubColOneBody>
        </FooterSubColOne>
        <FooterSubColTwo>
            <FooterSubColTwoBody>
            <TitleTwo>Contact Us</TitleTwo>
          {/* <SubTitleTwo>Contact us</SubTitleTwo> */}

          <Office>Department of Computer Science</Office>
          <OfficeAddress>University of Ruhuna</OfficeAddress>

          <ConvContact>Contact Information</ConvContact>
          <ConContactInfo>
            <FooterContactP></FooterContactP>
            <FooterContactP>Tel : +94 041 2222681/2 Ext 4801/2</FooterContactP>
          </ConContactInfo>
            </FooterSubColTwoBody>
          
        </FooterSubColTwo>
      </FooterColOne>

      <FooterColTwo>
        <img src={img1} alt="" />
      </FooterColTwo>
    </FooterContainer>
  );
};

export default Footer;