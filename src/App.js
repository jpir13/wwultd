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
  <li><a href="#">{thing}</a></li>
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
          <p>
            Are you planning a holiday? Or perhaps you need a getaway from the dark Finnish fall?<br /> What ever the case is, this <i>React.js</i> site will provide an answer for you. Try the example <code>things to do</code> below.<br /> It will suggest suitable location for action in mind. 
            <ul>{listThings}</ul>
          </p>
        </article>
      </div>
    );
  }
}

export default App;
