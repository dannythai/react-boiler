import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  state = {
    text: 'Hello World!'
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);