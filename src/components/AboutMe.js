import React from "react";
import author from "../me.jpeg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>Hello, my name is Rafael Rosas and I love to code.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
