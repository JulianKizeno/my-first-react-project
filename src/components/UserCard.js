import React, {Component} from 'react'

import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './styles/UserCard.css'
import Gravatar from '../components/Gravatar'

class UserCard extends Component{
    render(){
        console.log(this.props)
        return (
            <div className='containerCard'>
                <Card as='article' className='containerCard__content'>
                    {this.props.actions
                        &&
                        <>
                        <Link to={`/badges/${this.props.id}/edit`} className='CardsList__link-actions'>
                            <div className='CardList__button-actions'>
                                <i className="far fa-edit"></i>                                            
                            </div>
                        </Link> 
                        <Link to={`/badges/${this.props.id}/edit`} className='CardsList__link-actions'>
                            <div className='CardList__button-actions'>
                                <i class="far fa-trash-alt"></i>                                            
                            </div>
                        </Link> 
                        </>
                    }
                    <Card.Body className='containerCard__content--text'>
                        <p>{this.props.coverLetter}</p>
                        <p style={{marginBottom: '1rem'}}>
                            <i><strong>{this.props.firstName} {this.props.lastName}</strong></i> ~ {this.props.jobTitle}
                        </p>
                        <div className="containerCard__social-media">
                            <span><a href={"mailto:" + this.props.email}target="_blank"> <i className="far fa-envelope-open containerCard__social-media--icon mail-icon"></i></a></span>
                            <span><a href={this.props.linkedin} target="_blank"> <i className="fab fa-linkedin-in containerCard__social-media--icon lkIn-icon"></i></a> </span>
                            <span><a href={this.props.gitHub} target="_blank"> <i className="fab fa-github containerCard__social-media--icon github-icon"></i></a></span>
                        </div>
                    </Card.Body>
                    <figure className='containerCard__content--fig'>
                        <Gravatar 
                            email={this.props.email} 
                            alt={this.props.imgAlt} 
                            className='containerCard__content--img'
                        />
                    </figure>
                </Card>
            </div>
        ) 
    }
}

export default UserCard 