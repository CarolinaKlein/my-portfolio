import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Home.scss'


const Landing = () => {

    return(
        
        <section id="home" className="home">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <p>Hello, World! I'm <span>Carolina Klein</span>.</p>
            <p>I am a Software Engineer</p>
            <AnchorLink href="#projects">View my work</AnchorLink>
        </section>
    )
}

export default Landing