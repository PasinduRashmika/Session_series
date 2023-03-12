import React from "react";
import {MissionContainer,MissionLeft,MissonRight,MissionHead,MissionBody,MissionButtons} from './MissionElements'
import ButtonOne from '../ButtonOne/ButtonOne'
import ButtonTwo from '../ButtonTwo/ButtonTwo'
import img from '../../Images/img21.jpg'
import Aos from "aos";
import "aos/dist/aos.css";

const Mission = () => {
    return ( 
        <MissionContainer id="mission">
            <MissionLeft src={img} data-aos="fade-right">
                {/* <missionImage >
                    <img  />
                </missionImage> */}
            </MissionLeft>

            <MissonRight>
                <MissionHead data-aos="fade-right">
                    <h1>Industry Oriented Learning Sessions</h1>
                </MissionHead>
                <MissionBody data-aos="fade-right">
                    <p>By BCS Alumni</p>
                    <br />
                    <p>Starting from 02th of April 2023</p>
                    <br />
                    <p>Conducted by  Department of Computer Science, Faculty of Science, University of Ruhuna</p>
                </MissionBody>
                <MissionButtons>
                <ButtonOne title={"CONTACT US"} />
                <ButtonTwo title={"VIW PORTFOLIO"} />
                </MissionButtons>
            </MissonRight>
        </MissionContainer>
    );
}
 
export default Mission;