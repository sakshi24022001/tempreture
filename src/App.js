import './App.css';
import React, { Component } from "react";

function BoilingVerdict(props) {
  if (typeof props.celsius !== "undefined" && props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else if (typeof props.farenheit !== "undefined" && props.farenheit >= 212) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { temperatureC: "", temperatureF: "" };
  }

  convertTemp = (type, temp) => {
    if (type === "temperatureC") return temp * (9 / 5) + 32;
    else return temp * (5 / 9) - 32;
  };

  handleChange = (e) => {
    var main_ele = e.target.name;
    var other_ele =
      e.target.name === "temperatureC" ? "temperatureF" : "temperatureC";
    var target_value = e.target.value;
    this.setState({
      [main_ele]: target_value,
      [other_ele]: this.convertTemp(other_ele, target_value)
    });
  };

  render() {
    const temperatureC = this.state.temperatureC;
    const temperatureF = this.state.temperatureF;

    return (
      <div>
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input
            name="temperatureC"
            value={temperatureC}
            onChange={this.handleChange}
          />
          <BoilingVerdict celsius={parseFloat(temperatureC)} />
        </fieldset>

        <fieldset>
          <legend>Enter temperature in farenheit:</legend>
          <input
            name="temperatureF"
            value={temperatureF}
            onChange={this.handleChange}
          />
          <BoilingVerdict farenheit={parseFloat(temperatureF)} />
        </fieldset>
      </div>
    );
  }
}



export default App;
