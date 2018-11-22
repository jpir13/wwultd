import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <div className="form-group row">
            <div className="col-xs-3">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="form-control"
              />
            </div>{" "}
            &nbsp;
            <div className="col-xs-3">
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="form-control"
              />{" "}
            </div>
            <br />
            <button className="btn btn-primary mb-2">Get Weather</button>
            <button
              onClick={this.props.getWeatherSuggest}
              className="btn btn-danger mb-2"
            >
              Suggest me a location
            </button>
          </div>
        </form>
        <br />
      </div>
    );
  }
}

export default Form;
