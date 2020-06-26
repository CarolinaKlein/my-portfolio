import React from 'react'
import Vanity from '../assets/pdf/Web_Developer_CarolinaK_Vanity.pdf'
import ATS from '../assets/pdf/Resume_Carolina_Klein_Full_Stack.pdf'

const Resume = () => {
    return (
        <div className="resume-page">
            <h1 id="resume-h1">RESUME</h1>
            <div className="resume-a">
                <a href={Vanity} download>Vanity Download</a>
                <a href={ATS} download>ATS Download</a>
            </div>
        </div>
    )
}
export default Resume