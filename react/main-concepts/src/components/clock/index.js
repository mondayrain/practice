import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  handleClick = () => {
    alert(this.state.date);
  };

  componentDidMount() {
    const timerId = setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );

    this.timerId = timerId;
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <p>The current time is: {this.state.date.toLocaleTimeString()}</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default Clock;
