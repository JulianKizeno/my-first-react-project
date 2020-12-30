import React, {Component} from 'react'
import './styles/BadgeNew.css'

import UserCard from '../components/UserCard'
import BadgeForm from '../components/BadgeForm'

import cardImage from '../images/me4.png'
import { Col, Container, Row } from 'react-bootstrap'
class BadgeNew extends Component{

    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            linkedin: '',
            gitHub: '',
            jobTitle: '',
            cardImage: '',
            coverLetter: ''
        }
    }

    handleChange = e =>{
        // let nextForm = this.state.form
        // nextForm[e.target.name] = e.target.value
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <Container as='section'>
                    <Row>
                        <Col md={7} style={{
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            width: '100%', 
                            flexDirection: 'column', 
                            margin: '0 5rem'}}
                        >
                            <h2 style={{marginBottom: '2rem', fontSize: '2rem'}}>This is how your Cover Letter Card will look like</h2>
                            <UserCard
                                cardImage = {cardImage}
                                imgAlt = 'images gif'
                                firstName = {this.state.form.firstName}
                                lastName = {this.state.form.lastName}
                                email = {this.state.form.email}
                                linkedin = {this.state.form.linkedin}
                                gitHub = {this.state.form.gitHub}
                                jobTitle = {this.state.form.jobTitle}
                                coverLetter = {this.state.form.coverLetter}
                            />
                        </Col>
                        <Col md={3} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </Col>

                    </Row>

                </Container>
            </React.Fragment>
        )
    }
}

export default BadgeNew



// '“ I am a junior web developer focused on advancing my professional career. I am responsible, communicative and I adapt easily to work teams. This is why I am looking for an opportunity to be part of a company. "'  