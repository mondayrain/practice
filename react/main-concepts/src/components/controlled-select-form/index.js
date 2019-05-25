import React from "react";

class ControlledSelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.options[0].value
    };
  }

  handleChange = event => {
    this.setState({
      selected: event.target.value
    });

    console.log(event.target.value);
  };

  render() {
    return (
      <select onChange={this.handleChange}>
        {this.props.options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  }
}

export default ControlledSelectForm;
