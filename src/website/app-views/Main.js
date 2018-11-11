import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../routes/Home'
import Gallery from '../routes/Gallery'
import Contact from '../routes/Contact'



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
                <div className="pure-g">
                    <div className="pure-u-1">
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/gallery' component={Gallery} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/' component={Home} />
                            <Route path='*' component={Home} />
                        </Switch>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main
