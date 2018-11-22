import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <p>
          <i>
            Check weather manually for a location below or try the randomizer.
          </i>
        </p>
        <form onSubmit={this.props.getWeather}>
          <div className="form-group row">
            <div>
              <input
                type="text"
                name="city"
                placeholder="City"
                className="form-control"
              />
            </div>{" "}
            &nbsp;
            <div>
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="form-control"
              />{" "}
            </div>
            <p>
              <br />
              <button className="btn btn-primary mb-2">Get Weather</button>{" "}
              &nbsp;
              <button
                onClick={this.props.getWeatherSuggest}
                className="btn btn-danger mb-2"
              >
                Suggest me a location
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
