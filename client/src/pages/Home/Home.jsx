import React, { useRef } from 'react'
import './Home.scss'


const Landing = () => {

    return(
        <section id="home" className="home">
            <p>Hello, World! I'm <span>Carolina Klein</span>.</p>
            <p>I am a Software Engineer</p>
            <div className="button">
               <a href="#projects">View my work</a>
            </div>
        </section>
    )
}

export default Landing