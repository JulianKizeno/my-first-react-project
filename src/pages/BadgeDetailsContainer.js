import React, {Component} from 'react'


import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'
import api from '../api';

class BadgeDetailsContainer extends Component{
    
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    }

    componentDidMount (){
        this.fetchData()
    }

    fetchData = async () =>{
        try {
            this.setState({loading: true})
            const id = this.props.match.params.badgeId
            const data = await api.badges.read(id)
            this.setState({loading: false, data: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    handleOpenModal = e =>{
        this.setState({modalIsOpen: true})
    }

    handleCloseModal = e =>{
        this.setState({modalIsOpen: false})
    }

    handleDeleteBadge = async e =>{
        this.setState({loading: true, error: null})

        try {
            const id = this.props.match.params.badgeId
            await api.badges.remove(id)
            this.setState({ loading: false });
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading:false, error: error})
        }
    }

    render(){
        const id = this.props.match.params.badgeId
        if(this.state.loading) return <PageLoading/>
        if(this.state.error) return <PageError error={this.state.error}/>
        return (
            <BadgeDetails 
                badge={this.state.data}
                id={id} 
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                onDeleteBadge={this.handleDeleteBadge}
                modalIsOpen={this.state.modalIsOpen}
            />
        )
    }
}

export default BadgeDetailsContainer