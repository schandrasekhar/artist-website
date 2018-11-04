import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Gallery from './Gallery'



// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/gallery' component={Gallery} />
                    <Route path='/' component={Home} />
                    <Route path='/#' component={Home} />
                </Switch>
            </main>
        );
    }
}

export default Main
