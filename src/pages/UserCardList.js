import React, {Component} from 'react'
import { Button } from 'react-bootstrap'


import './styles/UserCardList.css'
import Navigation from '../components/Navigation'
import CardsList from '../components/CardsList'

class UserCardList extends Component{
    state = {
        data: [
            {
                id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                firstName: 'John',
                lastName: 'Quiceno',
                email: 'loncuster@gmail.com',
                jobTitle: 'Senior Fullstack Web Developer',
                linkedin: 'https://www.linkedin.com/in/jquiceno/',
                github:'https://github.com/jquiceno',
                cardImage: 'https://i.imgur.com/xtC4aAc.png',
                coverLetter: '“ I am a junior web developer focused on advancing my professional career. I am responsible, communicative and I adapt easily to work teams. This is why I am looking for an opportunity to be part of a company. "'
            },
            {
                id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                firstName: 'Gerardo',
                lastName: 'Toledo',
                email: 'gerardo@twenix.es',
                jobTitle: 'Junior FullStack Web Developer',
                linkedin: 'https://www.linkedin.com/in/gerardo-toledo/',
                github:'https://github.com/Togeri',
                cardImage: 'https://i.imgur.com/t1IjQHY.png',
                coverLetter:'“ I am a junior web developer focused on advancing my professional career. I am responsible, communicative and I adapt easily to work teams. This is why I am looking for an opportunity to be part of a company. "'
            },
            {
                id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                firstName: 'Julian',
                lastName: 'Quiceno',
                email: 'julianquiceno20@gmail.com',
                jobTitle: 'Junior Frontend Web Developer',
                linkedin: 'https://www.linkedin.com/in/julianquiceno91/',
                github:'https://github.com/JulianKizeno',
                cardImage: 'https://i.imgur.com/ylGoeZd.png',
                coverLetter:'“ I am a junior web developer focused on advancing my professional career. I am responsible, communicative and I adapt easily to work teams. This is why I am looking for an opportunity to be part of a company. "'
            },
        ],
    };
    
    render(){
        return(
            <div>
                <Navigation/>  
                <div className="UserCardList__container">
                    <div className="UserCardList__buttons-container">
                        <Button href="/" type="submit" className='UserCardList__buttons-container--NewCardBtn'>New User Card</Button>
                    </div>
                    <CardsList badges={this.state.data} />
                </div>

            </div>
        )
    }
}

export default UserCardList