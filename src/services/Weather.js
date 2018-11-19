import React from 'react';

class Weather extends React.Component {

    render() {

        return (
            <div className="weather-info">
                {
                    this.props.country && this.props.city && <p className="weather-field">Location:
                        <span className="weather-value">  {this.props.city}, {this.props.country}</span>
                    </p>
                }

                {
                    this.props.temperature && <p className="weather-field">Temperature:
                        <span className="weather-value">  {this.props.temperature} C</span>
                    </p>
                }

                {
                    this.props.description && <p className="weather-field">Conditions:
                        <span className="weather-value">  {this.props.description}</span>
                    </p>
                }

                {
                    this.props.error && <p className="weather-error">{this.props.error}</p>
                }

            </div>
        )
    }
}

export default Weather;