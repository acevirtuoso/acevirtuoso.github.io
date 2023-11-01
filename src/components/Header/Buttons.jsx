import React from 'react'
import CV from '../../assets/CV.pdf'

const Buttons = () => {
  return (
    <div className="headerbuttons">
        <a id= "download-button" className='btn' href={CV} download> Download resume</a>
        <a href='mailto: aly.mohamed@ucalgary.ca' className='btn' target='_blank'>Contact Me</a>
    </div>
  )
}

export default Buttons