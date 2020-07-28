import React from "react";
import "./Projects.scss";
import Furever from "../../assets/images/Furever.jpeg"
import Mission from "../../assets/images/Mission_Booked.jpeg"
import Jojo from "../../assets/images/jojo.jpeg"
import Portfolio from "../../assets/images/portfolio.jpeg"


const Projects = () => {

  let projects = [
    {
        id:1,
        title : "Furever",
        img : Furever,
        repo: "https://github.com/CarolinaKlein/C36_midterm_carolina_elias_rene_tristan",
        site: "https://fureverapp.herokuapp.com/",
        stack: ["react", "Express.js"],
        description: "Also created at Wyncode Academy, FurEver is a petfinding app built with React and Express JS, which utilizes Petfinder's O-Auth API. FurEver is designed to help match adoptable pets with forever homes in a fun, user-friendly interface."
    }, 
    {
        id:2,
        title : "Mission Booked",
        img : Mission,
        repo: "https://github.com/CarolinaKlein/C36_better_together_now_2",
        site: "https://mission-booked.herokuapp.com/",
        stack: ["react", "rails", "postgreSQL"],
        description: "Created while at Wyncode Academy, Mission Booked is a React-Rails app with a PostgreSQL database. It is designed to help people find volunteer opportunities and charitable organizations tailored to their interests."
    }, 
    {
        id:3,
        title: "JoJo Quizz",
        img: Jojo,
        repo: "",
        site: "http://nickelodeon-jojo-siwa-questions-walmart.s3-website-us-west-2.amazonaws.com/DEV/#/",
        stack: "react",
        description: "For my onboarding project at Mod Op, we built a quizz for a collaboration between Nickelodeon and Walmart using React"
    }, 
    {
      id:4,
      title: "This Portfolio",
      img: Portfolio,
      repo: "https://github.com/CarolinaKlein/my-portfolio",
      site: "https://github.com/CarolinaKlein/my-portfolio",
      stack: "react",
      description: "View the source code of this website"
    }
  ]

  return (
    <section id="projects">
      <h1>PROJECTS</h1>
      <div className="columns">
        {projects.map((post) => {
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
