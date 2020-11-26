import React from 'react'
import logo from '../images/megif.gif'
import './styles/UserCard.css'

class UserCard extends React.Component{
    render(){
        return (
            <div className='container'>
                <section className='container__content'>
                    <div className='container__content--text'>
                        <p>“ I am a junior web developer and at this moment I am focused on advancing my professional career, that is why I am looking for an opportunity to be part of a team  "
                        </p>
                        <p className='container__content--name-profession'>
                            <i><strong>Julian Quiceno</strong> ~</i> Fronend Developer
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