import React from 'react'
import './Navbar.css'
import {AiOutlineHome, AiOutlineProject} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import {BsStack} from 'react-icons/bs'
import { useState } from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  const [active, setActive] = useState('#')
  return (
    <nav className="navbar">
      <a href="#" onClick = {() => setActive("#")} className={active === '#' ? 'active' : ''}><AiOutlineHome/></a> 
      <a href="#About" onClick={() => setActive ("About")} className={active === 'About' ? 'active' : ''}><BsPersonCircle/></a>
      <a href="#Experience" onClick={() => setActive ("Experience")} className={active === 'Experience' ? 'active' : ''}><BsStack/></a>
      <a href="#Footer" onClick={() => setActive ("Footer")} className={active === 'footer' ? 'active' : ''}><AiOutlineProject/></a>
      <a href="#Contact" onClick={() => setActive ("Contact")} className={active === 'Contact' ? 'active' : ''}><FiMail/></a>

    </nav>
  )
}

export default Navbar