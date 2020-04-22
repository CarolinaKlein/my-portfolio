import React from 'react';
import Card from 'react-bootstrap/Card'
import Mission_Booked from '../assets/Mission_Booked.jpeg'
import Furever from '../assets/Furever.jpeg'

const Projects = () => {
    return(
        <div>
            <h1 id="projects">PROJECTS</h1>
            <div className="projects">
                <Card className="card" style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Img src={Mission_Booked}></Card.Img>  
                        <Card.Link href="#"/>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '25rem' }}>
                    <Card.Body>
                            <Card.Img src={Furever}></Card.Img>  
                            <Card.Link href="#"/>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Projects;