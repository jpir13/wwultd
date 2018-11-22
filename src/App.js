import React, { Component } from "react";
import "./App.css";
import Form from "./services/Form";
import Weather from "./services/Weather";
import Info from "./services/Info";

// displaying app's short name, if full state null
const label = full => {
  if (full === null) {
    return "WWULTD";
  }
  return "what would you like to do?";
};

// api key for openweather
const api_key = "083d0cdb1c7e13150cf1151ea50242bb";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { full: null };
  }

  // simple mouseovers & out's for setting full either true or false
  mouseOver() {
    //console.log("mouse hovered");
    this.setState({ full: true });
  }

  mouseOut() {
    //console.log("mouse out");
    this.setState({ full: null });
  }

  // declaring states for weather before getWeather
  state = {
    country: undefined,
    city: undefined,
    temperature: undefined,
    description: undefined,
    error: undefined
  };

  // getWeather to use with the form
  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${api_key}`
    );
    const response = await api_call.json();
    console.log(response);

    if (city && country) {
      this.setState({
        country: response.sys.country,
        city: response.name,
        temperature: response.main.temp,
        description: response.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        temperature: undefined,
        description: undefined,
        error: "Add city and country as search criterion"
      });
    }
  };

  // used for weather suggestions (randomizing)
  getWeatherSuggest = async e => {
    e.preventDefault();

    // array of capital cities cityids
    const cities = [
      "2643743",
      "2988507",
      "6539761",
      "3143244",
      "2673730",
      "5128581",
      "2267057",
      "524901"
    ];

    // randomizing 1 from the array above
    const cityID = cities[Math.floor(Math.random() * cities.length)];

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=metric&appid=${api_key}`
    );
    const response = await api_call.json();
    console.log(response);

    this.setState({
      country: response.sys.country,
      city: response.name,
      temperature: response.main.temp,
      description: response.weather[0].description,
      error: ""
    });
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <h1
              onMouseOut={() => this.mouseOut()}
              onMouseOver={() => this.mouseOver()}
            >
              {label(this.state.full)}
            </h1>
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-sm-12 title-container">
                  <Info />
                </div>
                <div className="col-md-7 col-sm-12 form-container">
                  <Form
                    getWeather={this.getWeather}
                    getWeatherSuggest={this.getWeatherSuggest}
                  />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
