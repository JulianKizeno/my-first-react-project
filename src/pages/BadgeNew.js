import React, {Component} from 'react'

import './styles/BadgeNew.css'
import Navigation from '../components/Navigation'
import UserCard from '../components/UserCard'
import cardImage from '../images/me4.png'
import { Col, Container, Row } from 'react-bootstrap'
class BadgeNew extends Component{
    render(){
        return(
            <div>
                <Navigation/>
                <Container as='section'>
                    <Row style={{height:'100vh', display: 'flex'}}>
                        <Col md={4} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <UserCard
                                cardImage = {cardImage}
                                imgAlt = 'images gif'
                                userName = 'Julian Quiceno'
                                profession = 'Frontend Developer'
                                textCard = '“ I am a junior web developer focused on advancing my professional career. I am responsible, communicative and I adapt easily to work teams. This is why I am looking for an opportunity to be part of a company. "'  
                            />
                        </Col>
                        <Col md={6}>
                            <h1>JUST A TEST</h1>
                        </Col>

                    </Row>

                </Container>
            </div>
        )
    }
}

export default BadgeNew