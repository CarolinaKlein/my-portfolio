import React from "react";
import "./Projects.scss";
import data from "../../data/projects.json";


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
              <a href={post.site} id="life-site">Live Site</a>
              <a href={post.repo} id="source-code">Source Code</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
