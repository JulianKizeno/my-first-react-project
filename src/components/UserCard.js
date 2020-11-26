import React, {Component} from 'react'
import logo from '../images/megif.gif'
import './styles/UserCard.css'

class UserCard extends Component{
    render(){
        return (
            <div className='container'>
                <section className='container__content'>
                    <div className='container__content--text'>
                        <p>“ I am a junior web developer focused on advancing my professional career. I am responsible, communicative and I adapt easily to work teams. This is why I am looking for an opportunity to be part of a company. "
                        </p>
                        <p className='container__content--name-profession'>
                            <i><strong>Julian Quiceno</strong> ~</i> Frontend Developer
                        </p>
                    </div>
                    <figure className='container__content--fig'>
                        <img src={logo} alt='probando imganes' className='container__content--img'/>
                    </figure>
                </section>
            </div>
        )
    }
}

export default UserCard