import React from 'react';
import Mission_Booked from '../../assets/images/Mission_Booked.jpeg'
import Furever from '../../assets/images/Furever.jpeg'
import './Projects.scss'

const Projects = () => {
    return(
        <section id="projects">
            <h1>PROJECTS</h1>
            <div className="projects">
                <div className="projects-container">
                    <div className="projects-card">
                        <div className="projects-card-front">
                            <img className="projects-card-img" src={Mission_Booked} alt="picture of project home page"/>  
                        </div>
                        <div className="projects-card-back">
                            <a href="#">View Site</a>
                            <a href="#">View Code</a>
                        </div>
                    </div>
                </div> 
                <div className="projects-container">
                    <div className="projects-card">
                        <div className="projects-card-front">
                            <img className="projects-card-img" src={Furever} alt="picture of project home page"/>  
                        </div>
                        <div className="projects-card-back">
                            <a href="#">View Site</a>
                            <a href="#">View Code</a>
                        </div>
                    </div>
                    </div>
                </div> 
        </section>
    )
}

export default Projects;