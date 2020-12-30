import React from 'react'

import {Container} from 'react-bootstrap'
import './styles/NotFound.css'

function NotFound(){
    return (
        <React.Fragment>
            <Container as='section' className="error">
                <div className="error__container">
                    <h1>404</h1>
                    <p>Page not Found</p>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default NotFound