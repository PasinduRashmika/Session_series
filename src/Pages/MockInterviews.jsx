import Navbar from "../Components/Navbar/Navbar";
import SubNav from "../Components/SubNav/SubNab";
import CopyRight from "../Components/CopyRight/Copyright";
import FooterNew from "../Components/FooterNew/Footer";
import MockCover from '../Components/Cover/CoverMock'
import Card from '../Components/Card//MockCard'
import data from "../Components/Card/MockData"
const Mockinterviews = () => {
    return ( 
        <div className="container">
         <SubNav data-aos="fade-down"/>       
        <Navbar data-aos="fade-down"/>
        <MockCover />
        <Card data={data}/>
        <FooterNew />
        <CopyRight />
        
    </div>
    );
}
 
export default Mockinterviews;