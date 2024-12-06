import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
//  inside the con first com is prgm import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {

  const [playState, setPlayState] = useState(false);

  return(
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About setPlayState={setPlayState}/>
        <Title subTitle='gallery' title='JNIAS PHOTOS'/>
        <Campus />
        <Title subTitle='Testimonials' title='Jnias Students Says'/>
        <Testimonials />
<Title subTitle='JNIAS COLLEGE UNION MEMBERS'/>
<Programs />
        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
