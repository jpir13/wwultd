import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="weather-info">
        {this.props.country && this.props.city && (
          <span className="weather-field">
            Location:
            <span className="weather-value">
              {" "}
              {this.props.city}, {this.props.country}
            </span>
          </span>
        )}{" "}
        &nbsp;
        {this.props.temperature && (
          <span className="weather-field">
            Temperature:
            <span className="weather-value"> {this.props.temperature}°</span>
          </span>
        )}{" "}
        &nbsp;
        {this.props.description && (
          <span className="weather-field">
            Conditions:
            <span className="weather-value"> {this.props.description}</span>
          </span>
        )}
        {this.props.error && (
          <span className="weather-error">{this.props.error}</span>
        )}
      </div>
    );
  }
}

export default Weather;
