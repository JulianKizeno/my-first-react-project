import React, {Component} from 'react'
import { Card } from 'react-bootstrap'
import './styles/UserCard.css'

class UserCard extends Component{
    render(){
        return (
            <div className='container'>
                <Card as='article' className='container__content'>
                    <Card.Body className='container__content--text'>
                        <p>{this.props.textCard}</p>
                        <p>
                            <i><strong>{this.props.userName}</strong> ~</i> {this.props.profession}
                        </p>
                    </Card.Body>
                    <figure className='container__content--fig'>
                        <img src={this.props.gifImg} alt={this.props.imgAlt} className='container__content--img'/>
                    </figure>
                </Card>
            </div>
        )
    }
}

export default UserCard