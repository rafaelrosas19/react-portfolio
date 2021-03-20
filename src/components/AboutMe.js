import React from "react";
import author from "../me.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello, my name is Rafael Rosas and I am a web developer based out of
            Chicago. The technologies I use are the MERN stack (MongoDB,
            Express, ReactJS, and NodeJS). My hobbies include cooking mexican
            cuisine and trying new restaurants with friends and family. I also
            enjoy walking around the beautiful city that I get to call home.
          </p>
          <a
            className="hyper-link"
            href="https://www.linkedin.com/in/rafael-rosas/"
            target="_blank"
          >
            LinkedIn
          </a>
          <br></br>
          <a
            className="hyper-link"
            href="https://github.com/rafaelrosas19"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
