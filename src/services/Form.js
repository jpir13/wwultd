import React from 'react';

class Form extends React.Component {
    render(){
        return(
                <form onSubmit = {this.props.getWeather}>
                    <input type="text" name="city" placeholder="City"/> &nbsp;
                    <input type="text" name="country" placeholder="Country"/> <br></br><br></br>
                    <button>Get Weather</button>
                </form>
        )
    }
}

export default Form;
