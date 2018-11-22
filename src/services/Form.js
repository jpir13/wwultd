import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City" /> &nbsp;
          <input type="text" name="country" placeholder="Country" /> <br />{" "}
          <br />
          <button>Get Weather</button>
        </form>
        <br />
        <button onClick={this.props.getWeatherSuggest}>
          Suggest me a location
        </button>
      </div>
    );
  }
}

export default Form;
