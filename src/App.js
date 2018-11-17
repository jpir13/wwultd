import React, { Component } from 'react';
import './App.css';

const label = full => {
  if (full === null) {
    return 'WWULTD?';
  }
    return 'what would you like to do?';
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { full: null };
  }

  mouseOut() {
    console.log("mouse out");
    this.setState({ full: null });
  }

  mouseOver() {
    console.log("mouse hovered");
    this.setState({ full: true });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
            {label(this.state.full)}
          </h1>
        </header>
        test
      </div>
    );
  }
}

export default App;
