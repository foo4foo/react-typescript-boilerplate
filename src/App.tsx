import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Home from './containers/Home'
import Posts from './containers/Posts'
import store from './store'
import logo from './logo.svg';
import './App.css';

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Home />
        <Posts />
        </Provider>
      </div>
    );
  }
}

export default App;
