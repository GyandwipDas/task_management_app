import React from "react";
import "./about.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import pic from "../../images/undraw_team_re_0bfe.svg";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="left-about-container">
          <img className="image-about" src={pic} alt="" />
        </div>
        <div className="right-about-container">
          <h2>About me</h2> <br />
          <br />
          <h4>Done by Gyandwip Das</h4>
          <br />
          <h4>Employee of Jobdost</h4>
          <br />
          <br />
          <h3>
            Contact me on{" "}
            <a href="https://www.linkedin.com/in/gyandwip-das-aa0615187/">
              Linkedin
            </a>
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
