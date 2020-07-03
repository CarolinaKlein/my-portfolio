import React from 'react'
import Vanity from '../../assets/pdf/Web_Developer_CarolinaK_Vanity.pdf'
import ATS from '../../assets/pdf/Resume_Carolina_Klein_Full_Stack.pdf'
import './Resume.scss'

const Resume = () => {
    return (
        <section id="resume">
            <h1>RESUME</h1>
            <div className="columns resume-a">
                <a href={Vanity} download className="column">Vanity Download</a>
                <a href={ATS} download className="column">ATS Download</a>
            </div>
        </section>
    )
}
export default Resume