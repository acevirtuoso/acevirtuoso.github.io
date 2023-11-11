import React from 'react'
import CV from '../../assets/CV.pdf'
import Resume from '../../assets/Aly_Mohamed_resume.pdf'

const Buttons = () => {
  return (
    <div className="headerbuttons">
        <a id= "download-button" className='btn' href={Resume} download> Download resume</a>
        <a href='mailto: aly.mohamed@ucalgary.ca' className='btn' target='_blank'>Contact Me</a>
    </div>
  )
}

export default Buttons