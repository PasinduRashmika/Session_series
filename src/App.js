import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import ScrollToTop from './Hooks/ScrollToTop';
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import LearningSession from "./Pages/LearningSessions";
import Mockinterviews from "./Pages/MockInterviews";
import EnglishSessions from "./Pages/EnglishSessions";
function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
      <ScrollToTop/>
      
        <div className="content">
        <Routes >
            <Route  path="/" element={<Home />} exact />
              
            <Route  path="/home"  element={<Home />} exact/>
  
            <Route  path="/learningSessions"  element={<LearningSession />} exact/>

            <Route  path="/mockinterviews"  element={<Mockinterviews />} exact/>

            <Route  path="/englishSession"  element={<EnglishSessions />} exact/>

            <Route  path="/login"  element={<Login />} exact/>

            <Route  path="/aboutus"  element={<AboutUs />} exact/>


           
          </Routes>
        </div>
        
      </div>
      
    </BrowserRouter>


  );
}

export default App;
