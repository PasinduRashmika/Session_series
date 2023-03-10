import React from "react";
import {useRef, useState,useEffect} from "react";
import {
  DontMissContainer,
  DontMissColOne,
  DontMissColTwo,
  DontMissColThree,
  DontMissSenOne,
  DontMissSenTwo,
  DontMissSenThree,
  DontMissSenFour,
} from "./DontMissElements";
import Aos from "aos";
import "aos/dist/aos.css";

const DontMiss = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  return (
    <DontMissContainer>
      <DontMissColOne >
        <hr />
      </DontMissColOne>
      <DontMissColTwo>
      build up industry oriented knowledge, skills and attitudes
        {/* <DontMissSenOne><>Don't Miss this &nbsp;  </></DontMissSenOne>
        <DontMissSenTwo> <>Amazing conference &nbsp;  </></DontMissSenTwo>
        <DontMissSenThree> <>and &nbsp; </></DontMissSenThree>
        <DontMissSenFour> <>Opportunitiess! </></DontMissSenFour> */}
      </DontMissColTwo>
      <DontMissColThree >
      <hr />
      </DontMissColThree>
    </DontMissContainer>
    //new comment
  );
};

export default DontMiss;
