import React, { Component } from 'react';
import './App.css';
import Form from './services/Form';
import Weather from './services/Weather';

// displaying short name, if full state null
const label = full => {
  if (full === null) {
    return 'WWULTD';
  }
    return 'what would you like to do?';
}

// things to do in an array
const thingsToDo = ['go golfing', 'sunbathing', 'see a theatre', 'go hiking', 'see the Eiffel Tower'];
const listThings = thingsToDo.map((thing) =>
  <li key={thing.toString()}>
    {thing}
  </li>
);

// api key for openweather api
const api_key = '083d0cdb1c7e13150cf1151ea50242bb';

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

  // declaring states for weather before getWeather
  state = {
    country: undefined,
    city: undefined,
    temperature: undefined,
    description: undefined,
    humidity: undefined,
    error: undefined
  };

  // getWeather to use with the weahter api
  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
    const response = await api_call.json();
    console.log(response);

    if (city && country) {
      this.setState({
        country: response.sys.country,
        city: response.name,
        temperature: response.main.temp,       
        description: response.weather[0].description,
        humidity: response.main.humidity,
        error: ""
      });
    } else {
      this.setState({
        error: "Add city and country as search criterion"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
            {label(this.state.full)}
          </h1>
        </header>
        <article>
            Are you planning a holiday? Or perhaps you need a getaway from the dark Finnish fall?<br /> What ever the case is, this <i>React.js</i> site will provide an answer for you. Try the example <code>things to do</code> below.<br /> It will suggest suitable location for action in mind. 
            <ul>{listThings}</ul>
            <Form getWeather={this.getWeather} />
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
        </article>
      </div>
    );
  }
}

export default App;
