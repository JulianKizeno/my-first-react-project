import React, {Component} from 'react'

import { Card } from 'react-bootstrap'
import './styles/UserCard.css'

class UserCard extends Component{
    render(){
        return (
            <div className='containerCard'>
                <Card as='article' className='containerCard__content'>
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
                        <img src={this.props.cardImage} alt={this.props.imgAlt} className='containerCard__content--img'/>
                    </figure>
                </Card>
            </div>
        )
    }
}

export default UserCard 