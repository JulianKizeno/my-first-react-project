import React from "react";

import './styles/PageLoading.css'

import Loader from './Loader'

function PageLoading () {
    return (
        <div className='page-load'>
            <Loader />
        </div>
    )
}

export default PageLoading