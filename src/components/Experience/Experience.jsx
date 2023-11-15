import React from 'react'
import './Experience.css'
import Sortingvis from '../../assets/Sortingvis.png'
import DataStruct from '../../assets/Data_structure.avif'
import ASEC from '../../assets/ASEC_website.png'
import obit_maker from '../../assets/Obit_maker.jpg'
import CleanToGreen from '../../assets/CleanToGreen.png'

const Experience = () => {
  return (
    <section id="Experience">

      <h5>where have i worked and what projects i have done: </h5>
      <div className= "container projects">
        <article className="project">
          <div className="project_image">
            <img src={Sortingvis} alt="Sorting visualizer"/>
          </div>
          <h3>Sorting visualizer</h3>
          <div className = "project_btns">
          <a href="https://github.com/acevirtuoso/Sorting-data-visualizer" rel="noreferrer" className = "btn" target = "_blank">Github</a>
          <a href="https://acevirtuoso.github.io/Sorting-data-visualizer/" rel="noreferrer" className = "btn" target="_blank">Details</a>
          </div>
        </article>  


        <article className="project">
          <div className="project_image">
            <img src={DataStruct} alt="Data Structure"/>
          </div>
          <h3>Data structures</h3>
          <div className = "project_btns">
          <a href="https://github.com/acevirtuoso/Data-Structures" rel="noreferrer" className = "btn" target = "_blank">Github</a>
          <a href="https://acevirtuoso.github.io/Data-Structures/" rel="noreferrer" className = "btn" target="_blank">Details</a>
          </div>
        </article> 


        <article className="project">
          <div className="project_image">
            <img src={ASEC} alt="Sorting visualizer"/>
          </div>
          <h3>ASEC website</h3>
          <div className = "project_btns">
          <a href="https://www.asec2023.com" rel="noreferrer" className = "btn" target = "_blank">Visit Website</a>
          {/* <a href="https://acevirtuoso.github.io/ASEC-website/" rel="noreferrer" className = "btn" target="_blank">Details</a> */}
          </div>

        </article>   


        <article className="project">
          <div className="project_image">
            <img src={obit_maker} alt="Sorting visualizer"/>
          </div>
          <h3>Obituary maker</h3>
          <div className = "project_btns">
          <a href="https://github.com/ucalgary-ensf381/the-last-show-aly-and-findlay" rel="noreferrer" className = "btn" target = "_blank">Github</a>
          <a href="https://ucalgary-ensf381.github.io/the-last-show-aly-and-findlay/ " rel="noreferrer" className = "btn" target="_blank">Details</a>
          </div>
        </article>


        <article className="project">
          <div className="project_image">
            <img src={CleanToGreen} alt="Sorting visualizer"/>
          </div>
          <h3>Clean to green</h3>
          <div className = "project_btns">
          <a href="https://github.com/FindlayMB/ThemProfessionalHaters" rel="noreferrer" className = "btn" target = "_blank">Github</a>
          <a href="https://acevirtuoso.github.io/Sorting-data-visualizer/" rel="noreferrer" className = "btn" target="_blank">Details</a>
          </div>
        </article>  

        <article className="project">
          <div className="project_image">
            <img src={Sortingvis} alt="Sorting visualizer"/>
          </div>
          <h3>Java Scheduler</h3>
          <div className = "project_btns">
          <a href="https://github.com/FindlayMB/ENSF-380-Final-Project" rel="noreferrer" className = "btn" target = "_blank">Github</a>
          <a href="https://FindlayMB.github.io/ENSF-380-Final-Project/" rel="noreferrer" className = "btn" target="_blank">Details</a>
          </div>
        </article> 
      </div>
    </section>
  )
}

export default Experience