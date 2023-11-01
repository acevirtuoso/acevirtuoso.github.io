import React from "react";
import "./Contactinfo.css";
import {MdOutlineEmail} from 'react-icons/md'

const Contactinfo = () => {
  return (
    <section id="Contact">
      <div class="wrapper">
        <div className="stars" id="stars"></div>
        <div className="stars" id="stars2"></div>
        <div className="stars" id="stars3"></div>
      </div>
      <h5> Get in touch!</h5>
      <h2> Contact me</h2>
      <div className="container contact__container">
        <div className="contact__info">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>aly.mohamed@ucalgary.ca</h5>
            <a href='mailto: aly.mohamed@ucalgary.ca' rel = "noreferrer" className='btn' target='_blank'>Send Email</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contactinfo;
