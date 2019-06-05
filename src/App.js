import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

class App extends component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;

    return (
      <div className="App" >
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Dog Saga</h1>
          {dog ? (
            <p className="App-into">Keep clicking for new dogs</p>
          ) : (
              <p className="App-intro">Replace React Icon with a dog!</p>
            )
          }

          {fetching ? (
            <button class="btn btn-warning" disabled>Fetching...</button>
          ) : (
              <button className="btn btn-primary" onClick={onRequestDog}>Request dog</button>
            )
          }
        </header>
      </div>
    );
  }
}

export default App;
