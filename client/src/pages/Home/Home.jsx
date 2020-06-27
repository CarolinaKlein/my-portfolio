import React from 'react'
import '../../styles/App.css';

const Landing = () => {
    return(
        <div className="intro">
            <p>Hello, World! I'm <span>Carolina Klein</span>.</p>
            <p>I am a Software Engineer</p>
            <input className="landing-btn" type="button" value="View my work"/>
        </div>
    )
}

export default Landing