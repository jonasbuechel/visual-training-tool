import React from "react";
import "./Rangeslider.css";

class Rangeslider extends React.Component {
  handleOnChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div className="rangeslider">
        <label className="rangeslider__label" htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <p className="rangeslider__description">{this.props.description}</p>
        <input
          className="rangeslider_input"
          type="range"
          id={this.props.id}
          min={this.props.min}
          max={this.props.max}
          defaultValue={this.props.defaultValue}
          step={this.props.step}
          onChange={(event) => this.handleOnChange(event)}
        />
      </div>
    );
  }
}

export default Rangeslider;
