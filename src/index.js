import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
