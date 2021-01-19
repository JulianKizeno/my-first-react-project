import React, {Component} from 'react'
import './styles/BadgeEdit.css'

import UserCard from '../components/UserCard'
import BadgeForm from '../components/BadgeForm'
import { Col, Container, Row } from 'react-bootstrap'
import api from '../api'
import PageLoading from '../components/PageLoading'

class BadgeEdit extends Component{
    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            linkedin: '',
            gitHub: '',
            jobTitle: '',
            coverLetter: ''
        }
    }

    componentDidMount = () => {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        })

        try {
            const id = this.props.match.params.badgeId
            const data = await api.badges.read(id)
            this.setState({loading: false, form: data})
        } catch (error) {
            this.setState({loading: false, error: error})
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

    handleSubmit = async e =>{
        e.preventDefault()
        this.setState({
            loading: true,
            error: null
        })
        try {
            const id = this.props.match.params.badgeId
            console.log(id)
            await api.badges.update( id, this.state.form)
            this.setState({
                loading: false
            })
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    render(){
        if(this.state.loading){
            return <PageLoading />
        }
        return(
            <React.Fragment>
                <Container as='section'>
                    <Row className={'badgeEdit__row'}>
                        <Col md={10} style={{
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            flexDirection: 'column', 
                            margin: '0 5rem'}}
                        >
                            <h2 style={{
                                marginBottom: '2rem', 
                                fontSize: '2rem'
                                }}
                            >This is how your Cover Letter Card will look like</h2>
                            
                            <UserCard
                                imgAlt = 'images gif'
                                firstName = {this.state.form.firstName || 'First Name'}
                                lastName = {this.state.form.lastName || 'Last Namae'}
                                email = {this.state.form.email || 'First Name'}
                                linkedin = {this.state.form.linkedin || 'First Name'}
                                gitHub = {this.state.form.gitHub || 'First Name'}
                                jobTitle = {this.state.form.jobTitle || 'Job Title'}
                                coverLetter = {this.state.form.coverLetter || 'Your Cover Letter'}
                            />
                        </Col>
                        <Col md={2} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </Col>

                    </Row>

                </Container>
            </React.Fragment>
        )
    }
}

export default BadgeEdit



// '“ I am a junior web developer focused on advancing my professional career. I am responsible, communicative and I adapt easily to work teams. This is why I am looking for an opportunity to be part of a company. "'  