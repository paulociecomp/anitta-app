import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router-dom';

export default class Header extends Component{

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
          style={{ position: 'fixed', top: 0, backgroundColor: '#AA00FF' }}
        />

        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <img src={require("../images/logo.jpg")} width="100%" height="150" />
          <MenuItem containerElement={<Link to="/" />} onClick={this.handleClose}>Home</MenuItem>
          <Divider />
          <Subheader>Álbuns</Subheader>
          <MenuItem containerElement={<Link to="/albuns/1" />} onClick={this.handleClose}>Anitta</MenuItem>
          <MenuItem containerElement={<Link to="/albuns/2" />} onClick={this.handleClose}>Ritmo Perfeiro</MenuItem>
          <MenuItem containerElement={<Link to="/albuns/3" />} onClick={this.handleClose}>Bang</MenuItem>

          <Divider />
          <Subheader>Mídia</Subheader>
          <MenuItem containerElement={<Link to="/video-clips" />} onClick={this.handleClose}>Vídeo Clips</MenuItem>
        </Drawer>
      </header>
    );

  }

}
