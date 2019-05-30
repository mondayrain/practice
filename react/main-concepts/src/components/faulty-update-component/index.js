import React from "react";

class FaultyUpdateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  componentDidUpdate() {
    // This will cause React to update forever
    this.setState({
      value: "something else"
    });
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default FaultyUpdateComponent;
