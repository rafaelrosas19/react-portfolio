import React from "react";
import duet from "../duet.png";
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
const Portfolio = () => {
  // Duet Application
  const openPopupboxDuet = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={duet}
          alt="Duet Musician Project..."
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/NW-Scrappy/duet")}
        >
          https://github.com/NW-Scrappy/duet
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigDuet = {
    titleBar: {
      enable: true,
      text: "Duet musician project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxDuet}>
            <img className="portfolio-image" src={duet} alt="duet project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigDuet} />
    </div>
  );
};

export default Portfolio;
