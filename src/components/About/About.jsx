import React from "react";
import "./About.css";
import MyPhoto from "../../assets/MyPhoto.jpg";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section id="About">
      <div class="wrapper">
        <div className="stars" id="stars"></div>
        <div className="stars" id="stars2"></div>
        <div className="stars" id="stars3"></div>
      </div>
      <div className="container">
        <h4 id="filler"> A little about me</h4>

        <div className="about_img_container">
          <div className="about_img">
            {/* <img src={MyPhoto} alt="Aly Mohmed"/> testing commits*/}
          </div>
        </div>

        <div className="about__content">
          {/* <h4> Hello, my name is Aly Mohamed</h4>
          <h3>Interests</h3> */}
          <div className="about__cards">
            <h5> Education </h5>
            <FaGraduationCap className="Education__icon" />
            <br />
            <small>
              University of Calgary,
              <br /> BSc in Software Engineering
            </small>
          </div>
          {/* <div className="about__cards">
            <h5> Experience </h5>
            <small> </small>
            <FaGraduationCap className="Education__icon" />
          </div> */}
          <div className="about__cards">
            <h5> projects </h5>
            <FaGraduationCap className="Education__icon" />
          </div>

          <div className="interests">
            <article className="indiv_interest">
              <h4>Cyber security</h4>
            </article>

            <article className="indiv_interest">
              <h4>Data structures</h4>
            </article>

            <article className="indiv_interest">
              <h4>Machine learning</h4>
            </article>

            <article className="indiv_interest">
              <h4>medical technology</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
