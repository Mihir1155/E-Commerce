import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HeroSection = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2012/04/26/22/31/fabric-43354_1280.jpg",
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdn.pixabay.com/photo/2020/11/06/07/42/girl-5717067_1280.jpg",
  ];
  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}></div>
      </div>
    </Slide>
  );
};

export default HeroSection;
