import React from 'react'

import Modal from './Modal'
import './styles/DeleteBadgeModal.css'

function DeleteBadgeModal (props){
    return(
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <div className='delete-b-m'>
                <h1>¿Are you fucking sure?</h1>
                <p>You're about to delete this fucking badge</p>

                <div>
                    <button onClick={props.onDeleteBadge} className="delete-b-m__danger-btn">Delete</button>
                    <button onClick={props.onClose} className="delete-b-m__cancel-btn">Cancel</button>
                </div>
            </div>
        </Modal>
    )
}

export default DeleteBadgeModal