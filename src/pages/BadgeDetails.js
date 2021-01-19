import React from 'react'
import { Container } from "react-bootstrap";
import UserCard from '../components/UserCard'

function BadgeDetails (props){
    const badge = props.badge
    const id = props.id
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
                        jobTitle={badge.jobTitle}
                        coverLetter={badge.coverLetter}
                        id={id}
                        actions={true}
                        onOpenModal={props.onOpenModal}
                        onCloseModal={props.onCloseModal}
                        onDeleteBadge={props.onDeleteBadge}
                        isOpen={props.modalIsOpen}
                    />
    
            </Container>
        </React.Fragment>
    )
}

export default BadgeDetails