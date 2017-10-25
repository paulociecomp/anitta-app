import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Clips from './Clips';
import Clip from './Clip';

export default class Videos extends Component{

  render(){

    return (

      <Switch>
        <Route exact path='/video-clips' component={Clips}/>
        <Route path='/video-clips/:id' component={Clip}/>
      </Switch>

    );

  }

}
