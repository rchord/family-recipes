import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    renderFamily(i) {
        return <Family value={i}/>;
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Family Recipes</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div>
           {this.renderFamily('Rob')}
          </div>
          <div>
           {this.renderFamily('Rob')}
          </div>
          <div>
           {this.renderFamily('Rob')}
          </div>
      </div>
    );
  }
}

class Family extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
          <button className="Family" onClick={() => this.setState({value: 'Hello'})}>
              {this.state.value}
          </button>
        );
    }
}

export default App;
