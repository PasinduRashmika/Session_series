import Navbar from "../Components/Navbar/Navbar";
import SubNav from "../Components/SubNav/SubNab";
import CopyRight from "../Components/CopyRight/Copyright";
import FooterNew from "../Components/FooterNew/Footer";
import Cover from '../Components/Cover/Cover'
import Card from '../Components/Card/Card'
import data from "../Components/Card/SessionData"

const LearningSession = () => {
    return ( 
        <div className="container">
         <SubNav data-aos="fade-down"/>       
        <Navbar data-aos="fade-down"/>
        <Cover />
        <Card data={data}/>
        <FooterNew />
        <CopyRight />
        
    </div>
    );
}
 
export default LearningSession;