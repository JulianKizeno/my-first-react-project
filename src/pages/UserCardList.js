import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './styles/UserCardList.css'

import CardsList from '../components/CardsList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import MiniLoader from '../components/MiniLoader'
import api from '../api'


class UserCardList extends Component{

    constructor(props){
        super(props)
        console.log('1. constructor()')
        this.state = {
            loading: true,
            error: null,
            data: undefined
        };
    }

    componentDidMount = () => {
        setTimeout (() => {
            console.log('3. componentDidMount()') 
            this.fetchData()
        },1000)
        this.intervalId = setInterval(this.fetchData, 9000)
    }

    fetchData = async () => {
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.list()
            this.setState({loading: false, data: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    // componentDidUpdate = (prevProps, prevState) => {
    //     console.log('5. componentDidUpdate()')
    //     console.log({
    //         prevProps: prevProps, prevState: prevState
    //     })

    //     console.log({
    //         props: this.props,
    //         state: this.state
    //     })
    // }

    componentWillUnmount = () => {
        console.log('6. componentWillUnmount()')
        clearInterval(this.intervalId)
    }
    
    render(){
        console.log('2. render()')
        console.log(this.state.data)
        if(this.state.loading && !this.state.data){
            return <PageLoading />
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>
        }
        return(
            <React.Fragment>
                <div className="UserCardList__container">
                    <div className="UserCardList__buttons-container">
                        <Link to='/badges/new' type="submit" className='UserCardList__buttons-container--NewCardBtn'>New User Card</Link>
                    </div>
                    <CardsList badges={this.state.data} />
                    {this.state.loading && <MiniLoader/>}
                </div>

            </React.Fragment>
        )
    }
}

export default UserCardList