import React from "react";
import "./Experience.css";
import Sortingvis from "../../assets/Sortingvis.png";
import DataStruct from "../../assets/Data_structure.avif";
import ASEC from "../../assets/ASEC_website.png";
import obit_maker from "../../assets/Obit_maker.jpg";
import CleanToGreen from "../../assets/CleanToGreen.png";
import Flyght from "../../assets/Fly-ght.png";
import JavaScheduler from "../../assets/JavaScheduler.png";

const Experience = () => {
  return (
    <section id="Experience">
      <h5>My Projects: </h5>
      <div className="container projects">
        <article className="project">
          <div className="project_image">
            <img src={Flyght} alt="Sorting visualizer" />
          </div>
          <h3>Fly-ght Club Airlines</h3>
          <div className="project_btns">
            <a
              href="https://github.com/acevirtuoso/Fly-ght"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/acevirtuoso/Fly-ght/blob/main/README.md"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Details
            </a>
          </div>
        </article>

        <article className="project">
          <div className="project_image">
            <img src={ASEC} alt="ASEC website" />
          </div>
          <h3>ASEC website</h3>
          <h5>
            NOTE: The domain of this website costs money, and since the
            conference has already taken place, this webtsite is now deprecated!
          </h5>
          <div className="project_btns">
            <a
              href="https://www.asec2023.com"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Visit Website
            </a>
            {/* <a href="https://acevirtuoso.github.io/ASEC-website/" rel="noreferrer" className = "btn" target="_blank">Details</a> */}
          </div>
        </article>

        <article className="project">
          <div className="project_image">
            <img src={obit_maker} alt="Obituary Maker" />
          </div>
          <h3>Obituary maker</h3>
          <div className="project_btns">
            <a
              href="https://github.com/acevirtuoso/Obituary_maker"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/acevirtuoso/Obituary_maker/blob/main/README.md "
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Details
            </a>
          </div>
        </article>

        <article className="project">
          <div className="project_image">
            <img src={CleanToGreen} alt="Clean to Green" />
          </div>
          <h3>Clean to Green</h3>
          <div className="project_btns">
            <a
              href="https://github.com/acevirtuoso/HackTheChange"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/acevirtuoso/HackTheChange/blob/main/README.md"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Details
            </a>
          </div>
        </article>

        <article className="project">
          <div className="project_image">
            <img src={JavaScheduler} alt="Java Scheduler" />
          </div>
          <h3>Java Scheduler</h3>
          <div className="project_btns">
            <a
              href="https://github.com/acevirtuoso/Java_Farm_Scheduler"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/acevirtuoso/Java_Farm_Scheduler/blob/main/README.md"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Details
            </a>
          </div>
        </article>

        <article className="project">
          <div className="project_image">
            <img src={DataStruct} alt="Data Structure" />
          </div>
          <h3>Data structures</h3>
          <div className="project_btns">
            <a
              href="https://github.com/acevirtuoso/Data-Structures"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://acevirtuoso.github.io/Data-Structures/"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Details
            </a>
          </div>
        </article>

        {/* <article className="project">
          <div className="project_image">
            <img src={Sortingvis} alt="Sorting visualizer" />
          </div>
          <h3>weather app</h3>
          <div className="project_btns">
            <a
              href="https://github.com/acevirtuoso/Sorting-data-visualizer"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://acevirtuoso.github.io/Sorting-data-visualizer/"
              rel="noreferrer"
              className="btn"
              target="_blank"
            >
              Details
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Experience;
