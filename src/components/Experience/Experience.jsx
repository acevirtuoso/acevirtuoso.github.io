import React from 'react'
import './Experience.css'
import Sortingvis from '../../assets/Sortingvis.png'

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
            <img src={Sortingvis} alt="Sorting visualizer"/>
          </div>
          <h3>Data structures</h3>
          <div className = "project_btns">
          <a href="https://github.com/acevirtuoso/Data-Structures" rel="noreferrer" className = "btn" target = "_blank">Github</a>
          <a href="https://acevirtuoso.github.io/Data-Structures/" rel="noreferrer" className = "btn" target="_blank">Details</a>
          </div>
        </article> 


        <article className="project">
          <div className="project_image">
            <img src={Sortingvis} alt="Sorting visualizer"/>
          </div>
          <h3>ASEC website</h3>
          <div className = "project_btns">
          <a href="https://github.com/acevirtuoso/ASEC-website" rel="noreferrer" className = "btn" target = "_blank">Github</a>
          <a href="https://acevirtuoso.github.io/ASEC-website/" rel="noreferrer" className = "btn" target="_blank">Details</a>
          </div>

        </article>   


        <article className="project">
          <div className="project_image">
            <img src={Sortingvis} alt="Sorting visualizer"/>
          </div>
          <h3>Obituary maker</h3>
          <div className = "project_btns">
          <a href="https://github.com/ucalgary-ensf381/the-last-show-aly-and-findlay" rel="noreferrer" className = "btn" target = "_blank">Github</a>
          <a href="https://ucalgary-ensf381.github.io/the-last-show-aly-and-findlay/ " rel="noreferrer" className = "btn" target="_blank">Details</a>
          </div>
        </article>


        <article className="project">
          <div className="project_image">
            <img src={Sortingvis} alt="Sorting visualizer"/>
          </div>
          <h3>Stocks Viewer</h3>
          <div className = "project_btns">
          <a href="https://github.com/acevirtuoso/Sorting-data-visualizer" rel="noreferrer" className = "btn" target = "_blank">Github</a>
          <a href="https://acevirtuoso.github.io/Sorting-data-visualizer/" rel="noreferrer" className = "btn" target="_blank">Details</a>
          </div>
        </article>  

        <article className="project">
          <div className="project_image">
            <img src={Sortingvis} alt="Sorting visualizer"/>
          </div>
          <h3>Scheduler</h3>
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