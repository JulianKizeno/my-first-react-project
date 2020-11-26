import React, {Component} from 'react'
import { Card } from 'react-bootstrap'
import logo from '../images/me.gif'
import './styles/UserCard.css'

class UserCard extends Component{
    render(){
        return (
            <div className='container'>
                <Card as='article' className='container__content'>
                    <Card.Body className='container__content--text'>
                        <p>“ I am a junior web developer focused on advancing my professional career. I am responsible, communicative and I adapt easily to work teams. This is why I am looking for an opportunity to be part of a company. "
                        </p>
                        <p>
                            <i><strong>Julian Quiceno</strong> ~</i> Frontend Developer
                        </p>
                    </Card.Body>
                    <figure className='container__content--fig'>
                        <img src={logo} alt='probando imganes' className='container__content--img'/>
                    </figure>
                </Card>
            </div>
        )
    }
}

export default UserCard