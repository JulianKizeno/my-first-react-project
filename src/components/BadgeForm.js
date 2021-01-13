import React, {Component} from 'react'
import {Form, Button, Container} from 'react-bootstrap'

import './styles/BadgeForm.css'


class BadgeForm extends Component{

    handleClick = e =>{
        console.log({e},'Button was clicked')
    }

    // handleSubmit = e =>{
    //     e.preventDefault()
    //     console.log({e},'Form was submitted')
    //     console.log(this.state)
    // }

    render(){
        return(
           
            <Container className="formContainer">
                <div className="formContainer__content">
                    <h2 className="formContainer__content--title-new-card">
                        {this.props.titleCreate ? 'New Card': 'Edit Card'}
                    </h2>
                    <Form action="" className="formContainer__content--form" onSubmit={this.props.onSubmit}>
                        <Form.Group >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" className="formInput"  name="firstName" value={this.props.formValues.firstName} onChange={this.props.onChange} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" className="formInput"  name="lastName" value={this.props.formValues.lastName} onChange={this.props.onChange} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email (Gravatar)</Form.Label>
                            <Form.Control type="email" className="formInput"  name="email" value={this.props.formValues.email} onChange={this.props.onChange} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>LinkedIn</Form.Label>
                            <Form.Control type="text" className="formInput"  name="linkedin" value={this.props.formValues.linkedin} onChange={this.props.onChange} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>GitHub</Form.Label>
                            <Form.Control type="text" className="formInput"  name="gitHub" value={this.props.formValues.gitHub} onChange={this.props.onChange} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control type="text" className="formInput"  name="jobTitle" value={this.props.formValues.jobTitle} onChange={this.props.onChange} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Cover Letter (few words)</Form.Label>
                            <Form.Control as="textarea" className="textarea "  name="coverLetter" value={this.props.formValues.coverLetter} onChange={this.props.onChange} required/>
                        </Form.Group>
                        <Button className="formContainer__content--Button" onClick={this.handleClick} type="submit">
                            {this.props.titleCreate ? 'Create Card': 'Save Changes'}
                        </Button>
                    </Form>
                    {this.props.error && <p className='text-danger'>{this.props.error.message}</p>}
                </div>
            </Container>
        
        )
    }
}

export default BadgeForm
