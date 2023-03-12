import {
    GuaranteeContainer,GuaranteeOne,GuaranteeRowOne,GuaranteeRowTwo
} from "./GuaranteeElements"

import Aos from "aos";
import "aos/dist/aos.css"
const Guarantee = () => {
    return (
        <GuaranteeContainer>
            <GuaranteeOne >
                <GuaranteeRowOne data-aos="fade-down">Expert </GuaranteeRowOne>
                <GuaranteeRowTwo data-aos="fade-down">Speakers</GuaranteeRowTwo>
            </GuaranteeOne>
            <GuaranteeOne>
                <GuaranteeRowOne data-aos="fade-down">Latest</GuaranteeRowOne>
                <GuaranteeRowTwo data-aos="fade-down">Technologies</GuaranteeRowTwo>
            </GuaranteeOne>
            <GuaranteeOne>
                <GuaranteeRowOne data-aos="fade-down">Better</GuaranteeRowOne>
                <GuaranteeRowTwo data-aos="fade-down">Experience</GuaranteeRowTwo>
            </GuaranteeOne>
            <GuaranteeOne>
                <GuaranteeRowOne data-aos="fade-down">Interactive </GuaranteeRowOne>
                <GuaranteeRowTwo data-aos="fade-down">Sessions</GuaranteeRowTwo>
            </GuaranteeOne>

        </GuaranteeContainer>
    );
}
 
export default Guarantee;