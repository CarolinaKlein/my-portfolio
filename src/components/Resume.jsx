import React from 'react'
import Vanity from '../assets/Web_Developer_CarolinaK_Vanity.pdf'
import ATS from '../assets/Web_Developer_CarolinaK_Vanity.pdf'

const Resume = () => {
    return (
        <div>
            <h1 id="resume-h1">RESUME</h1>
            <div className="resume-a">
                <a href={Vanity} download>Vanity Download</a>
                <a href={ATS} download>ATS Download</a>
            </div>
        </div>
    )
}
export default Resume