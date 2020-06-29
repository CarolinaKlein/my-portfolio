import React from 'react';
import './Projects.scss'
import data from '../../data/projects.json'


function Projects (){
    
    return (
        <section id="projects">
            <h1>PROJECTS</h1>
            <div>
            {data.projects.map(post => {
                return(
                    <div className="projects" key={post}>
                        <h2>{post.title}</h2>
                        <img src={post.img}/>
                        <a>{post.site}</a>
                        <a>{post.repo}</a>
                    </div>
                )
            })}
            </div>
        </section>
    )

}

export default Projects;