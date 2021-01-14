import React, {Component} from 'react'

import { Col, Row, Container } from "react-bootstrap";
import UserCard from '../components/UserCard'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api';

class BadgeDetails extends Component{
    
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount (){
        this.fetchData()
    }

    fetchData = async () =>{
        try {
            this.setState({loading: true})
            const id = this.props.match.params.badgeId
            const data = await api.badges.read(id)
            this.setState({loading: false, data: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    render(){
        if(this.state.loading) return <PageLoading/>
        if(this.state.error) return <PageError error={this.state.error}/>
        const badge = this.state.data
        return (
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
}

export default BadgeDetails