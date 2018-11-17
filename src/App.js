import React, { Component } from 'react';
import './App.css';

// displaying WWULTD, if full state null
const label = full => {
  if (full === null) {
    return 'WWULTD';
  }
    return 'what would you like to do?';
}

const thingsToDo = ['go golfing', 'sunbathing', 'see a theatre', 'go hiking', 'see the Eiffel Tower'];
const listThings = thingsToDo.map((thing) => 
  <li>{thing}</li>
  );
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
        <article>
          Would you consider any of these interesting?
          <ul>{listThings}</ul>
        </article>
      </div>
    );
  }
}

export default App;
