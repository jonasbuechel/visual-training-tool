import React, { useEffect } from "react";
import Color from "../../helpers/color";
import "./Graphic.css";

function Graphic(props) {
  function getSrc(svgName) {
    return require(`../Exercise/img/${svgName}.svg`);
  }

  function applyColors() {
    const primary = Color.getPrimary(props.colorPrimaryIntensity, "dark");
    const secondary = Color.getSecondary(props.colorSecondaryIntensity, "dark");

    console.log(primary, secondary);
  }

  useEffect(() => {
    applyColors();
  });

  return (
    <object
      className="graphic"
      data={getSrc(props.svgName)}
      type="image/svg+xml"
    >
      Graphic
    </object>
  );
}

export default Graphic;
