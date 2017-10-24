import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{

  constructor(props){
    super(props);

    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render(){

    return (
      <header className="App-header">
        <AppBar
          title="Anitta App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
          style={{ position: 'fixed', top: 0 }}
        />

        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem containerElement={<Link to="/albuns/1" />} onClick={this.handleClose}>Anitta</MenuItem>
          <MenuItem containerElement={<Link to="/albuns/2" />} onClick={this.handleClose}>Ritmo Perfeiro</MenuItem>
          <MenuItem containerElement={<Link to="/albuns/3" />} onClick={this.handleClose}>Bang</MenuItem>
        </Drawer>
      </header>
    );

  }

}
