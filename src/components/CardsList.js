import React, {Component} from 'react'

import './styles/CardsList.css'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Gravatar from './Gravatar'

class CardsList extends Component{
    render(){
        console.log(this.props.badges)
        return (
                <ul className='CardsList__list'>
                    {this.props.badges.reverse().map((newCard)=>{
                        return(
                            <li key={newCard.id} className='CardsList__list--item'>
                                    <Card as='article' className='CardsList__content'>
                                        <Link to={`/badges/${newCard.id}/edit`} className='CardsList__link'>
                                            <div className='CardList__button-edit'>
                                                <i className="far fa-edit"></i>                                            
                                            </div>
                                        </Link>
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
                                
                            </li>
                        )
                    })}
                </ul>
        )
    }
}

export default CardsList