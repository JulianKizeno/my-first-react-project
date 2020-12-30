import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from "./Layout"
import BadgeNew from "../pages/BadgeNew"
import UserCardList from "../pages/UserCardList"
import NotFound from "../pages/NotFound"

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/badges' component={UserCardList} />
                    <Route exact path='/badges/new' component={BadgeNew} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App