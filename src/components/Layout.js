import React from 'react'

import Navigation from './Navigation'


function Layout(props){
    const children = props.children
    return (
        <React.Fragment>
            <Navigation/>
            {children}
        </React.Fragment>
    )
}

export default Layout