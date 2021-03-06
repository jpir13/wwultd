import React from "react";

/* things to do in an array
const thingsToDo = ['go golfing', 'sunbathing', 'see a theatre', 'go hiking', 'see the Eiffel Tower'];
const listThings = thingsToDo.map((thing) =>
  <li key={thing}>
    {thing}
  </li>
);*/

class Info extends React.Component {
  render() {
    return (
      <div>
        <p>
          Are you planning a holiday? Or perhaps you need a getaway from the
          dark Finnish fall? What ever the case is, this <code>React.js</code>{" "}
          site will provide an answer for you.
          <br /> Try the example <code>things to do</code> below. It will
          suggest a suitable location for action in mind.
        </p>
        <ul>
          {" "}
          <li
            id="example"
            cityid="2514169"
            onClick={this.props.getWeatherExamplesGolf}
          >
            go golfing
          </li>
          <li
            id="example2"
            cityid="2657928"
            onClick={this.props.getWeatherExamplesSki}
          >
            go skiing
          </li>
          <li
            id="example3"
            cityid="5855797"
            onClick={this.props.getWeatherExamplesSunBath}
          >
            go sunbathing
          </li>
        </ul>
      </div>
    );
  }
}

export default Info;
