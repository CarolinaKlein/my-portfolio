import React from 'react';
import Card from 'react-bootstrap/Card'
import Mission_Booked from './src/assets/missionBooked.jpeg'

const Projects = () => {
    return(
        <Card style={{ width: '25rem' }}>
        <Card.Body>
        <Card.Img src={Mission_Booked}></Card.Img>
          <Card.Link href="#"/>
        </Card.Body>
        </Card>
    )
}

export default Projects;