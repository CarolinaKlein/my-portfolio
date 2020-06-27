import React from 'react'
import '../../styles/App.css';

const Landing = () => {
    return(
        <section id="home" className="home">
            <p>Hello, World! I'm <span>Carolina Klein</span>.</p>
            <p>I am a Software Engineer</p>
            <a href="#projects" class="button" id="home-btn">View my work</a>
        </section>
    )
}

export default Landing