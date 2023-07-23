import React from "react";
import "./HeroImage.css";

function HeroImage() {
  return (
    <div className="HeroImage">
      <div className="HeroImage__1">
        <img src="../Assets/hero1.jpeg" alt="pepperoni_pizza" />
        <div className="HeroImage__1__text">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="HeroImage__2">
        <img src="../Assets/hero2.jpeg" alt="meatballs" />
      </div>
      <div className="HeroImage__3">
        <img src="../Assets/hero3.jpeg" alt="cheese_sticks" />
      </div>
    </div>
  );
}

export default HeroImage;
