import React from 'react'
import './Header.css'
import Buttons from './Buttons'
import MyPhoto2 from '../../assets/MyPhoto2.png'
import HeaderSoc from './HeaderSoc'


const Header = () => {
  return (
    <header>
       <div class = "wrapper">
          <div ClassName = "stars" id="stars"></div>
          <div ClassName = "stars" id ="stars2"></div>
          <div ClassName = "stars" id ="stars3"></div>
        </div>
      <div className="container">

        <div className="header_container">  
 
          <h1>Aly Mohmed</h1>
          <h5 id = "job-description" className="light-text">Engineering Student</h5>
          <Buttons/>

          <div className="header_img">
            <img src={MyPhoto2} alt="Aly Mohmed"/>
          </div>
          <HeaderSoc/>
          <a href= "#Contact" className= "ScrollDown"> Scroll Down </a>
        </div>


      </div>


    </header>
  )
}

export default Header