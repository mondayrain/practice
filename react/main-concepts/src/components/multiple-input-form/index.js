import React from "react";

const DEFAULT_VALS = {
  checkbox: false
};

class MultipleInputForm extends React.Component {
  constructor(props) {
    super(props);

    const reducer = (acc, { name, type }) => ({
      ...acc,
      [name]: type in DEFAULT_VALS ? DEFAULT_VALS[type] : ""
    });

    this.state = props.inputs.reduce(reducer, {});
  }

  handleSubmit = event => {
    event.preventDefault();

    Object.entries(this.state).forEach(([key, val]) =>
      console.log(`${key}: ${val}`)
    );
  };

  onInputChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  generateInputComponent = ({ name, type }) => {
    if (type === "checkbox") {
      return (
        <input
          name={name}
          type={type}
          checked={this.state[name]}
          onChange={this.onInputChange}
        />
      );
    }

    return (
      <input
        name={name}
        type={type}
        value={this.state[name]}
        onChange={this.onInputChange}
      />
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.props.inputs.map(({ name, label, type }) => (
            <div key={name}>
              <label>{label}</label>
              <br />
              {this.generateInputComponent({ name, type })}
            </div>
          ))}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default MultipleInputForm;
