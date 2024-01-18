import React from "react";
import "./About.css";
import MyPhoto from "../../assets/MyPhoto.jpg";
import Experince from "../Experience/Experience";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="About">
      <div className="wrapper">
        <div className="stars" id="stars"></div>
        <div className="stars" id="stars2"></div>
        <div className="stars" id="stars3"></div>
      </div>
      <div className="container_about">
        <h4 id="filler">Passionate Software Engineering Student</h4>

        <div className="about_img_container">
          <div className="about_img">
            <img src={MyPhoto} alt="Aly Mohamed" />
          </div>
        </div>

        <div className="about__content">
          <h3>Hello, I'm Aly Mohamed</h3>
          <p>
            I am a dedicated third-year software engineering student at the University of Calgary, currently pursuing a Bachelor's degree. My academic journey has equipped me with a solid foundation in software development and problem-solving skills.
          </p>

          <div className="about__cards">
            <h5>
              <FaGraduationCap className="Education__icon" /> Education
            </h5>
            <small>
              University of Calgary,
              <br /> BSc in Software Engineering
            </small>
          </div>

          <div className="about__cards">
            <h5>
              <FaLaptopCode className="Education__icon" /> Skills
            </h5>
            <small className ="subtext">
              Proficient in languages like Java, JavaScript, and Python. Experienced in software development, algorithms, and data structures.
            </small>
          </div>

          <div className="about__cards">
            <h5>
              <FaLaptopCode className="Education__icon" /> Projects
            </h5>
            <small className ="subtext">
              Actively engaged in meaningful projects, applying theoretical knowledge to real-world scenarios. 
              Some projects include an obituary maker, a sorting algorithm visualizer, and as well as a local community cleaning website.
              <a href="#Experience"> Click here to learn more about my projects.</a>
            </small>
          </div>

          {/* <div className="interests">
            <h3>Interests</h3>
            <article className="indiv_interest">
              <h4>Cybersecurity</h4>
            </article>
            <article className="indiv_interest">
              <h4>Data Structures</h4>
            </article>
            <article className="indiv_interest">
              <h4>Machine Learning</h4>
            </article>
            <article className="indiv_interest">
              <h4>Medical Technology</h4>
            </article>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
