import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Album from './Album';
import Videos from './Videos';

export default class Main extends Component{

  render(){

    return(

      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/albuns/:id' component={Album}/>
          <Route path='/video-clips' component={Videos} />
        </Switch>
      </main>

    );

  }

}
