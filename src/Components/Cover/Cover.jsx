import React,{useEffect} from "react";
import {Link} from 'react-router-dom';

import Aos from "aos";
import "aos/dist/aos.css";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroH2,
  HeroP,
  HeroButton
} from "./CoverElemets";

const Hero = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  return (
   
      <HeroContainer>
        <HeroContent>
          <HeroItems>
            <HeroH1 data-Aos="fade-down">Industry Oriented Learning Sessions</HeroH1>
            <HeroH2 data-Aos="fade-down"> By BCS Alumni</HeroH2>
            <HeroP data-Aos="fade-down">conducted by  Department of Computer Science, Faculty of Science, University of Ruhuna</HeroP>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
     
  );
};

export default Hero;