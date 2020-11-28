import React, {Component} from 'react'

import { Card } from 'react-bootstrap'
import './styles/UserCard.css'

class UserCard extends Component{
    render(){
        return (
            <div className='containerCard'>
                <Card as='article' className='containerCard__content'>
                    <Card.Body className='containerCard__content--text'>
                        <p>{this.props.textCard}</p>
                        <p>
                            <i><strong>{this.props.userName}</strong> ~</i> {this.props.profession}
                        </p>
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