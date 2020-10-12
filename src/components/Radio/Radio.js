import React from "react";
import "./Radio.css";

class Radio extends React.Component {
  handleOnChange() {
    this.props.onChange(this.props.id);
  }

  render() {
    return (
      <div className="radio">
        <input
          className="radio_input"
          type="radio"
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          defaultChecked={this.props.checked}
          onChange={() => this.handleOnChange()}
        />
        <label className="radio__label" htmlFor={this.props.id}>
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default Radio;
