import React,{useEffect} from "react";
import Services from "./Components/Services";
import './App.css';
import { Header } from './Components/Header';
import { Navbar } from "./Components/Navbar";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import AboutMe from "./Components/AboutMe";
import MyArt from "./Components/MyArt";
import Footer from "./Components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
          AOS.init({
            duration: 300, // Animation duration
            easing: "ease-in-out", // Animation easing
            once: false, // Whether animation should happen only once
          });
        }, []);
 
  return (
    <div className="bg-white min-h-screen flex flex-col items-center tektur-fontfamily overflow-hidden">
      <Navbar />
      <Header />
      <Services/>
      <Projects/>
      <Education/>
      <AboutMe/>
      <MyArt/>
      <Footer/>
      
    </div>
  );
}

export default App;
