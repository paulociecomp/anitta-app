import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Album from './Album';

export default class Main extends Component{

  render(){

    return(

      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/albuns/:id' component={Album}/>
        </Switch>
      </main>

    );

  }

}
