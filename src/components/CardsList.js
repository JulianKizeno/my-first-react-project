import React, {Component} from 'react'

import './styles/CardsList.css'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Gravatar from './Gravatar'

class CardsList extends Component{
    render(){
        return (
            <ul className='CardsList__list'>
                {this.props.badges.reverse().map((newCard)=>{
                    return(
                        <li key={newCard.id} className='CardsList__list--item'>
                            <Link to={`/badges/${newCard.id}`} className='CardsList__link'>
                                <Card as='article' className='CardsList__content'>
                                    <Card.Body className='CardsList__content--text'>

                                        <p>{newCard.coverLetter}</p>
                                        <p style={{marginBottom: '1rem'}}>
                                            <i><strong>{newCard.firstName} {newCard.lastName}</strong></i> ~ {newCard.jobTitle}
                                        </p>
                                        <div className="CardsList__social-media">
                                            <span><a href={"mailto:" + newCard.email} target="_blank" rel="noreferrer"> <i className="far fa-envelope-open CardsList__social-media--icon mail-icon"></i></a></span>
                                            <span><a href={newCard.linkedin} target="_blank" rel="noreferrer"> <i className="fab fa-linkedin-in CardsList__social-media--icon lkIn-icon"></i></a> </span>
                                            <span><a href={newCard.gitHub} target="_blank" rel="noreferrer"> <i className="fab fa-github CardsList__social-media--icon github-icon"></i></a></span>
                                        </div>
                                    </Card.Body>
                                    <figure className='CardsList__content--fig'>
                                        <Gravatar 
                                            // src={newCard.cardImage} 
                                            email={newCard.email}
                                            alt={newCard.imgAlt} 
                                            className='CardsList__content--img'
                                        />
                                    </figure>
                                </Card>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default CardsList