import React from 'react'
import Vanity from '../assets/Web_Developer_CarolinaK_Vanity.pdf'
import ATS from '../assets/Web_Developer_CarolinaK_Vanity.pdf'

const Resume = () => {
    return (
        <div>
            <h1 id="Resume">RESUME</h1>
            <a href={Vanity} download>Vanity Download</a>
            <a href={ATS} download>ATS Download</a>
        </div>

    )
}
export default Resume