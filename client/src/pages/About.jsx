import React from 'react'
import Skills from '../components/Skills'
import Site_Qualities from '../../assets/my-site.jpg'
import Portrait from '../../assets/portfolio-portrait.jpeg'

const About = () => {
    return (
        <div className="about-page">
            <h1> ABOUT ME</h1>
            <div className="about-top">
                 <img className="site-qualities-img" src={Site_Qualities} alt="picture describing the great quality of my applications"/>  
            </div>
            <div className="about-middle">
                <div className="about-middle-left">
                    <img id="portrait" src={Portrait} alt="portrait of Carolina"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore magna <br/> aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
                <div className="about-middle-right">
                    <Skills/>
                </div>
            </div>     
        </div>
    )
}

export default About;