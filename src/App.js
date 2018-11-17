import React, { Component } from 'react';
import './App.css';

// if mouse not hovered, returns the short app name
const label = full => {
  if (full === null) {
    return 'WWULTD';
  }
    return 'what would you like to do?';
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { full: null };
  }
// simple mouseovers & out's for setting full either true or false
  mouseOver() {
    console.log("mouse hovered");
    this.setState({ full: true });
  }

  mouseOut() {
    console.log("mouse out");
    this.setState({ full: null });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
            {label(this.state.full)}
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
