import React from "react";
import "./Skills.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiCss3, SiReactquery, SiPython } from "react-icons/si";
import { TbBrandJavascript, TbBrandCpp } from "react-icons/tb";
import { DiJava } from "react-icons/di";
import { SiMicrosoftazure } from "react-icons/si";

const Footer = () => {
  return (
    <section id="Footer">
      {/* <h5> what languages can i use</h5> */}

      <div id = "footer" className="container">
        <div class="wrapper">
          <div className="stars" id="stars"></div>
          <div className="stars" id="stars2"></div>
          <div className="stars" id="stars3"></div>
        </div>
        <div className="text">
          <h3 id="lang_title">Languages</h3>
          <div className="experience">
            <article className="lang_atricle">
              <AiOutlineHtml5 className="icons" size={28} />
              <div>
                <h4>HTML</h4>
                <small className="light-text">100%</small>
              </div>
            </article>

            <article className="lang_atricle">
              <SiPython className="icons" size={28} />
              <div>
                <h4>Python</h4>
                <small className="light-text">100%</small>
              </div>
            </article>

            <article className="lang_atricle">
              <SiMicrosoftazure className="icons" size={28} />
              <div>
                <h4>Microsoft Azure</h4>
                <small className="light-text">100%</small>
              </div>
            </article>

            <article className="lang_atricle">
              <DiJava className="icons" size={28} />
              <div>
                <h4>Java</h4>
                <small className="light-text">100%</small>
              </div>
            </article>

            <article className="lang_atricle">
              <TbBrandJavascript className="icons" size={28} />
              <div>
                <h4>JavaScript</h4>
                <small className="light-text">100%</small>
              </div>
            </article>

            <article className="lang_atricle">
              <SiReactquery className="icons" size={28} />
              <div>
                <h4>C</h4>
                <small className="light-text">100%</small>
              </div>
            </article>

            <article className="lang_atricle">
              <SiCss3 className="icons" size={28} />
              <div>
                <h4>CSS</h4>
                <small className="light-text">100%</small>
              </div>
            </article>

            <article className="lang_atricle">
              <TbBrandCpp className="icons" size={28} />
              <div>
                <h4>C++</h4>
                <small className="light-text">100%</small>
              </div>
            </article>

            {/* <article className="lang_atricle">
              <SiReactquery className="icons" size={28} />
              <div>
                <h4>Assembly</h4>
                <small className="light-text">100%</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
