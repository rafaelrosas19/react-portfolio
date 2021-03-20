import React from "react";
import duet from "../duet.png";
import burger from "../burger.png";
import Employee from "../Employee.png";
import forecast from "../forecast.png";
import TMDMS from "../TMDMS.png";
import readhere from "../readhere.png";

// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // React Employee Directory
  const openPopupboxEmpDir = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={Employee}
          alt="React Employee Directory Project..."
        />
        <p id="description">
          This application allows the user to search for "employees" using the
          randomuserAPI. The idea is to have an application that allows
          management to search for an employee's contact information quickly.
          This application uses React, Node, and Express.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://rafaelrosas19.github.io/react-employee-directory/",
              "_blank"
            )
          }
        >
          https://rafaelrosas19.github.io/react-employee-directory/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/rafaelrosas19/react-employee-directory",
              "_blank"
            )
          }
        >
          https://github.com/rafaelrosas19/react-employee-directory
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "React Employee Directory App",
        },
      },
    });
  };

  const popupboxConfigEmpDir = {
    titleBar: {
      enable: true,
      text: "Employee Directory App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Five Day Forecast App
  const openPopupboxForecast = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={forecast}
          alt="Five Day Forecast Project..."
        />
        <p id="description">
          A five day forecast weather application that uses the Weather API from
          openweathermap.org. This application uses JavaScript, HTML, and CSS.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://rafaelrosas19.github.io/forecast/index.html",
              "_blank"
            )
          }
        >
          https://rafaelrosas19.github.io/forecast/index.html
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/rafaelrosas19/forecast", "_blank")
          }
        >
          https://github.com/rafaelrosas19/forecast
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Five Day Forecast App",
        },
      },
    });
  };

  const popupboxConfigForecast = {
    titleBar: {
      enable: true,
      text: "Five Day Forecast App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Readhere Book Search App
  const openPopupboxReadhere = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={readhere}
          alt="ReadHere Project..."
        />
        <p id="description">
          An application that let's you look for books that take place in a city
          you are traveling to. This application uses JavaScript, HTML, and CSS.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://thedreamteam-nubootcamp.github.io/ReadHere/",
              "_blank"
            )
          }
        >
          https://thedreamteam-nubootcamp.github.io/ReadHere/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/TheDreamTeam-NUBootCamp/ReadHere",
              "_blank"
            )
          }
        >
          https://github.com/TheDreamTeam-NUBootCamp/ReadHere
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Readhere Book Search App",
        },
      },
    });
  };

  const popupboxConfigReadhere = {
    titleBar: {
      enable: true,
      text: "Book Search App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Duet Application
  const openPopupboxDuet = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={duet}
          alt="Duet Musician Project..."
        />
        <p id="description">
          Bumble for bands! Let's you search for other like-minded musicians to
          form a band. This application uses React, Node, Express, and MySQL.
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
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Duet Musician App",
        },
      },
    });
  };

  const popupboxConfigDuet = {
    titleBar: {
      enable: true,
      text: "Duet musician project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // TMDMS Application
  const openPopupboxTMDMS = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={TMDMS}
          alt="Employee Database Project..."
        />
        <p id="description">
          An employee database management system that uses node and MySQL. You
          can make different kinds of searches in the terminal of visual studio
          code. This application uses Node and MySQL.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/rafaelrosas19/TMDMS")}
        >
          https://github.com/rafaelrosas19/TMDMS
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Employee Database Management System App",
        },
      },
    });
  };

  const popupboxConfigTMDMS = {
    titleBar: {
      enable: true,
      text: "Employee database project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Burger
  const openPopupboxBurger = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={burger}
          alt="Burger Todo application..."
        />
        <p id="description">
          A burger app that is essentially a todo list application. This
          application uses Node, Express, and MySQL.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://safe-bayou-77947.herokuapp.com/", "_blank")
          }
        >
          https://safe-bayou-77947.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/rafaelrosas19/burger", "_blank")
          }
        >
          https://github.com/rafaelrosas19/burger
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Burger todo App",
        },
      },
    });
  };

  const popupboxConfigBurger = {
    titleBar: {
      enable: true,
      text: "Burger Todo App",
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
          <div className="portfolio-image-box" onClick={openPopupboxEmpDir}>
            <img
              className="portfolio-image"
              src={Employee}
              alt="React Employee Directory App..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxForecast}>
            <img
              className="portfolio-image"
              src={forecast}
              alt="Five Day Forecast App..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxTMDMS}>
            <img
              className="portfolio-image"
              src={TMDMS}
              alt="Team Member Database Management System"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxBurger}>
            <img
              className="portfolio-image"
              src={burger}
              alt="Burger todo App..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxReadhere}>
            <img
              className="portfolio-image"
              src={readhere}
              alt="Readhere Book Search App..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigDuet} />
      <PopupboxContainer {...popupboxConfigEmpDir} />
      <PopupboxContainer {...popupboxConfigForecast} />
      <PopupboxContainer {...popupboxConfigTMDMS} />
      <PopupboxContainer {...popupboxConfigBurger} />
      <PopupboxContainer {...popupboxConfigReadhere} />
    </div>
  );
};

export default Portfolio;
