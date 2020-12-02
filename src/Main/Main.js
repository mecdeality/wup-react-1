import React, {Component} from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Nav from './Nav'
import About from './About'
import Redirect from './Redirect'
import Posts from './Posts'
import Post from './Post'

class Main extends Component{
    render(){
        return(
            <BrowserRouter>
                <main role='main' className='container'>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Redirect} />
                    <Route exact path="/Posts" component={Posts} /> 
                    <Route path="/about" component={About} />
                    <Route path="/:post_id" component={Post} />
                </Switch>
                </main>
            </BrowserRouter>
        );
    }
}

export default Main;