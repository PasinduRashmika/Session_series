import Navbar from "../Components/Navbar/Navbar";
import SubNav from "../Components/SubNav/SubNab";
import CopyRight from "../Components/CopyRight/Copyright";
import FooterNew from "../Components/FooterNew/Footer";
import EnglishCover from '../Components/Cover/CoverEnglish'
import Card from '../Components/Card/EnglishCard'
import data from "../Components/Card/EnglishData"
const EnglishSession = () => {
    return ( 
        <div className="container">
         <SubNav data-aos="fade-down"/>       
        <Navbar data-aos="fade-down"/>
        <EnglishCover />
        <Card data={data}/>
        <FooterNew />
        <CopyRight />
        
    </div>
    );
}
 
export default EnglishSession;