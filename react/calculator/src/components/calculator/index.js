import React from "react";
import "./index.css";

import Button from "../button";
import Output from "../output";

const START_STATE = "0";
const OPERATOR_MAP = {
  "÷": "/",
  x: "*"
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOutput: START_STATE
    };
  }

  onClearClicked = _val => {
    this.setState({ currentOutput: START_STATE });
  };

  onNumberClicked = val => {
    this.setState({
      currentOutput:
        this.state.currentOutput === START_STATE
          ? `${val}`
          : `${this.state.currentOutput}${val}`
    });
  };

  onOperatorClicked = operator => {
    const translatedOperator =
      operator in OPERATOR_MAP ? OPERATOR_MAP[operator] : operator;

    this.setState({
      currentOutput: `${this.state.currentOutput} ${translatedOperator} `
    });
  };

  onEqualClicked = () => {
    try {
      let result = eval(this.state.currentOutput);
      this.setState({
        currentOutput: result
      });
    } catch (SyntaxError) {
      console.log(`syntax error: ${this.state.currentOutput}`);
    }
  };

  render() {
    return (
      <div className="Calculator">
        <Output value={this.state.currentOutput} />
        <div className="CalculatorRow">
          <Button
            value={"CLEAR"}
            width={"225px"}
            onClick={this.onClearClicked}
          />
          <Button value={"÷"} onClick={this.onOperatorClicked} />
        </div>
        <div className="CalculatorRow">
          <Button value={7} onClick={this.onNumberClicked} />
          <Button value={8} onClick={this.onNumberClicked} />
          <Button value={9} onClick={this.onNumberClicked} />
          <Button value={"x"} onClick={this.onOperatorClicked} />
        </div>
        <div className="CalculatorRow">
          <Button value={4} onClick={this.onNumberClicked} />
          <Button value={5} onClick={this.onNumberClicked} />
          <Button value={6} onClick={this.onNumberClicked} />
          <Button value={"-"} onClick={this.onOperatorClicked} />
        </div>
        <div className="CalculatorRow">
          <Button value={1} onClick={this.onNumberClicked} />
          <Button value={2} onClick={this.onNumberClicked} />
          <Button value={3} onClick={this.onNumberClicked} />
          <Button value={"+"} onClick={this.onOperatorClicked} />
        </div>
        <div className="CalculatorRow">
          <Button value={0} width={"225px"} onClick={this.onNumberClicked} />
          <Button value={"="} onClick={this.onEqualClicked} />
        </div>
      </div>
    );
  }
}

export default Calculator;
