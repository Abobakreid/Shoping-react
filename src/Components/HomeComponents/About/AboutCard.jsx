import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AboutCard = ({ item }) => {
  return (
    <div className="a_card">
      <div className="card_img">
        <FontAwesomeIcon icon={item.icon} size={"2x"} />
      </div>
      <div className="card_detail">
        <h2>{item.title}</h2>
        <p>{item.parag}</p>
      </div>
    </div>
  );
};

export default AboutCard;
