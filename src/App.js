import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

export class App extends React.Component {
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

          {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: 'API_CALL_REQUEST' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


