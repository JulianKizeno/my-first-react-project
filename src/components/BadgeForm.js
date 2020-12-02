import React, {Component} from 'react'
import {Form, Button, Container} from 'react-bootstrap'

import './styles/BadgeForm.css'


class BadgeForm extends Component{



    // handleChange = e =>{
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    handleClick = e =>{
        console.log({e},'Button was clicked')
    }

    handleSubmit = e =>{
        e.preventDefault()
        console.log({e},'Form was submitted')
        console.log(this.state)
    }

    render(){
        return(
           
            <Container className="formContainer">
                <div className="formContainer__content">
                    <h2 className="formContainer__content--title-new-card">New Card</h2>
                    <Form action="" className="formContainer__content--form" onSubmit={this.handleSubmit}>
                        <Form.Group >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" className="formInput"  name="firstName" value={this.props.formValues.firstName} onChange={this.props.onChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" className="formInput"  name="lastName" value={this.props.formValues.lastName} onChange={this.props.onChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" className="formInput"  name="email" value={this.props.formValues.email} onChange={this.props.onChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>LinkedIn</Form.Label>
                            <Form.Control type="text" className="formInput"  name="linkedin" value={this.props.formValues.linkedin} onChange={this.props.onChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>GitHub</Form.Label>
                            <Form.Control type="text" className="formInput"  name="gitHub" value={this.props.formValues.gitHub} onChange={this.props.onChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control type="text" className="formInput"  name="jobTitle" value={this.props.formValues.jobTitle} onChange={this.props.onChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Cover Letter (few words)</Form.Label>
                            <Form.Control as="textarea" className="textarea "  name="coverLetter" value={this.props.formValues.coverLetter} onChange={this.props.onChange}/>
                        </Form.Group>
                        <Button className="button" onClick={this.handleClick} type="submit">Create New Card</Button>
                        {/* <Form.Group >
                            <Form.Control type="password" className="formInput" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="formContainer__content--remember-me">
                            <Form.Label>
                                <Form.Control type="checkbox" name="" id="cbox1" value="checkbox" />Recuérdame
                            </Form.Label>
                            <a href="/">Olvidé mi contraseña</a>
                        </Form.Group> */}
                    </Form>
                    {/* <div className="formContainer__content--social-media">
                        <div><i className="fab fa-google"></i>Inicia sesión con Google</div>
                        <div><i className="fab fa-twitter"></i>Inicia sesión con Twitter</div>
                    </div>
                    <p className="formContainer__content--register">No tienes ninguna cuenta <a href="/">Regístrate</a></p> */}
                </div>
            </Container>
        
        )
    }
}

export default BadgeForm

/* <section class="login">
        <section class="login__container">
            <h2 class="login__container--titulo-ini-ses">Inicia Sesión</h2>
            <form action="" class="login__container--form">
                <input type="text" class="input" placeholder="Correo">
                <input type="password" class="input" placeholder="Contraseña">
                <button class="button">Iniciar Sesión</button>
                <div class="login__container--remember-me">
                    <label>
                        <input type="checkbox" name="" id="cbox1" value="checkbox">Recuérdame
                    </label>
                    <a href="/">Olvidé mi contraseña</a>
                </div>
            </form>
            <section class="login__container--social-media">
                <div><i class="fab fa-google"></i>Inicia sesión con Google</div>
                <div><i class="fab fa-twitter"></i>Inicia sesión con Twitter</div>
            </section>
            <p class="login__container--register">No tienes ninguna cuenta <a href="../signup/signup.html">Regístrate</a></p>
        </section>
    </section> */