import React from 'react';
import Mission_Booked from '../assets/Mission_Booked.jpeg'
import Furever from '../assets/Furever.jpeg'

const Projects = () => {
    return(
        <div>
            <h1 id="projects">PROJECTS</h1>
            <div className="projects-container">
                <div className="projects-card">
                    <div className="projects-card-body">
                        <img className="projects-card-img" src={Mission_Booked} alt="picture of project home page"/>  
                        <a href="#">View Site</a>
                        <a href="#">View Code</a>
                    </div>
                </div>
                <div className="projects-card">
                    <div className="projects-card-body">
                        <img className="projects-card-img" src={Furever} alt="picture of project home page"/>
                        <a href="#">View Site</a>
                        <a href="#">View Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;