import React from 'react';
import './Projects.scss'
import data from '../../data/projects.json'


function Projects (){
    
    return (
        <section id="projects">
            <h1>PROJECTS</h1>
            <div className="colums">
            {data.projects.map(post => {
                return(
                    <div className="projects column" key={post}>
                        <h2>{post.title}</h2>
                        <img src={post.img}/>
                        <a href={post.site}>Live Site</a>
                        <a href={post.repo}>Source Code</a>
                    </div>
                )
            })}
            </div>
        </section>
    )

}

export default Projects;