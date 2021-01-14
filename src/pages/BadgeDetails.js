import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import UserCard from '../components/UserCard'

function BadgeDetails (props){
    const badge = props.badge
    return(
        <React.Fragment>
            <Container as='section'>
                <h1 style={{textAlign: 'center', marginBottom: '10rem'}}>Welcome {badge.firstName} {badge.lastName}</h1>
                
                    <UserCard 
                        firstName={badge.firstName} 
                        lastName={badge.lastName} 
                        email={badge.email} 
                        linkedin={badge.linkedin}
                        gitHub={badge.gitHub}
                        jobTtile={badge.jobTtile}
                        coverLetter={badge.coverLetter}
                        actions={true}
                    />
    
            </Container>
        </React.Fragment>
    )
}

export default BadgeDetails