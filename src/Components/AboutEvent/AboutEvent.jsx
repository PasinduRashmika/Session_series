import React, { useEffect } from "react";
import {
  AboutEventContainer,
  AboutEventHeader,
  AboutEventHeadertitle,
  AboutEventHeaderBody,
  AboutEventBody,
  AboutEventBodyOne,
  AboutEventCard,
  AboutEventImg,
  AboutEventInfo,
  AboutEventTitle,
  AboutEventDesc,
  AboutEventHorizontalLine,
} from "./AboutEventElements";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutEvent = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <AboutEventContainer id="AboutEvent">
      <AboutEventHeader>
        <AboutEventHeadertitle>
        Industry Oriented Learning Sessions
        </AboutEventHeadertitle>

        <AboutEventHeaderBody>
          "Introducing the masterminds behind every successful event - our
          talented and dedicated event coordinators. With their impeccable
          planning, attention to detail, and creativity, they bring your vision
          to life and make your event a memorable experience for all. Let's give
          a round of applause to our event coordinators!"
        </AboutEventHeaderBody>
        <AboutEventHorizontalLine>
          <hr />
        </AboutEventHorizontalLine>
      </AboutEventHeader>
      <AboutEventBody>
        <AboutEventBodyOne data-aos="fade-down">
          {props.data.map((what) => {
            return (
              <AboutEventCard>
                <AboutEventImg src={what.img} />
                <AboutEventInfo>
                  <AboutEventTitle>{what.post}</AboutEventTitle>
                  <AboutEventDesc>{what.name}</AboutEventDesc>
                  <AboutEventDesc>{what.title}</AboutEventDesc>
                  <AboutEventDesc>{what.department}</AboutEventDesc>
                </AboutEventInfo>
              </AboutEventCard>
            );
          })}
        </AboutEventBodyOne>
      </AboutEventBody>
    </AboutEventContainer>
  );
};

export default AboutEvent;
