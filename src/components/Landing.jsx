import React from 'react'
import '../App.css';

const Landing = () => {
    return(
        <div className="intro">
            <p>Hello, World! I'm <span>Carolina Klein</span>.</p>
            <p>I am a Full Stack Web Developer</p>
            <input className="landing-btn" type="button" value="View my work"/>
        </div>
    )
}

export default Landing