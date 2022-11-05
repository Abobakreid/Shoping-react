import {
  faCreditCard,
  faRightLeft,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  const aboutCard = [
    {
      title: "Free Shipping",
      parag: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: faTruck,
    },
    {
      title: "Easy Return",
      parag: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: faRightLeft,
    },
    {
      title: "Secure Payment",
      parag: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: faCreditCard,
    },
    {
      title: "Back Guarantee",
      parag: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: faRightLeft,
    },
  ];
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          {aboutCard.map((item, index) => {
            return <AboutCard item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
