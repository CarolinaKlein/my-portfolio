import React from "react";
import "./Projects.scss";
import data from "../../data/projects.json";
import Furever from "../../assets/images/Furever.jpeg"
import Mission_Booked from "../../assets/images/Mission_Booked.jpeg"


function Projects() {
  return (
    <section id="projects">
      <h1>PROJECTS</h1>
      <div className="columns">
        {data.projects.map((post) => {
          return (
            <div className="column" key={post}>
              <h3>{post.title}</h3>
              <img src={post.img}/> <br/>
              <a href={post.site}>Live Site</a>
              <a href={post.repo}>Source Code</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
