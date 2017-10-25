import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: ""
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {

    document.addEventListener('newcontent', (e) => {
      this.setState({
        open: true,
        message: e.detail
      });
    });

    document.addEventListener('offlineok', (e) => {
      this.setState({
        open: true,
        message: e.detail
      });
    });

    return (

      <div className="App">

        <Header />
        <Main />

        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={10000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default App;
