import React from "react";
import "./Graphic.css";
import { ReactComponent as SVG } from "../Exercise/img/shape-cross.svg";

class Graphic extends React.Component {
  render1() {
    // TODO: SOLUTION 2 - static, but injects an SVG without using an object :)
    return <SVG className="graphic" />;
  }

  render() {
    // TODO: SOLUTION 1 - more dynamic, retest if it still works after a build!
    const test = require("../Exercise/img/shape-cross.svg");
    return (
      <object className="graphic" data={test} type="image/svg+xml">
        Graphic
      </object>
    );
  }
}

export default Graphic;
