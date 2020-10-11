import React from "react";
import "./App.css";
import Button from "../Button/Button";
import Sidebar from "../Sidebar/Sidebar";
import Radio from "../Radio/Radio";
import Fullscreen from "../../helpers/fullscreen";

class App extends React.Component {
  test(prop) {
    console.log(prop);
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <main className="main">
            <object id="svg-object" type="image/svg+xml">
              Graphic
            </object>
          </main>
          <Sidebar visible={false}>
            <div className="settings">
              <h2>Settings</h2>

              <div className="settings__label">Shape</div>
              <Radio
                id="shape-8"
                name="shape"
                value="8-figure"
                checked={true}
                onChange={() => this.test("8-figure")}
                label="8 Figure"
              />

              <Radio
                id="shape-line-vertical"
                name="shape"
                value="shape-line-vertical"
                checked={false}
                onChange={() => this.test("shape-line-vertical")}
                label="Vertical Line"
              />

              <Radio
                id="shape-line-horizontal"
                name="shape"
                value="shape-line-horizontal"
                checked={false}
                onChange={() => this.test("shape-line-horizontal")}
                label="Horizontal Line"
              />

              <Radio
                id="shape-cross"
                name="shape"
                value="shape-cross"
                checked={false}
                onChange={() => this.test("shape-cross")}
                label="Cross"
              />

              <Radio
                id="shape-meeting-lines-vertical"
                name="shape"
                value="shape-meeting-lines-vertical"
                checked={false}
                onChange={() => this.test("shape-meeting-lines-vertical")}
                label="Meeting Lines Vertical"
              />

              <Radio
                id="shape-meeting-triangles-vertical"
                name="shape"
                value="shape-meeting-triangles-vertical"
                checked={false}
                onChange={() => this.test("shape-meeting-triangles-vertical")}
                label="Meeting Triangles Vertical"
              />

              <div className="settings__label">Color Scheme</div>
              <div className="settings__radio js-settings__radio">
                <div className="settings__radio-option">
                  <input
                    className="settings__radio-input js-settings__color-scheme"
                    type="radio"
                    id="color-scheme-dark"
                    name="color-scheme"
                    value="color-scheme-dark"
                    checked="checked"
                    onChange={this.test}
                  />
                  <label
                    className="settings__radio-label"
                    htmlFor="color-scheme-dark"
                  >
                    Dark
                  </label>
                </div>

                <div className="settings__radio-option">
                  <input
                    className="settings__radio-input js-settings__color-scheme"
                    type="radio"
                    id="color-scheme-bright"
                    name="color-scheme"
                    value="color-scheme-bright"
                  />
                  <label
                    className="settings__radio-label"
                    htmlFor="color-scheme-bright"
                  >
                    Bright
                  </label>
                </div>
              </div>

              <label
                className="settings__label"
                htmlFor="color-intensity-circle"
              >
                Blue color intensity
              </label>
              <p className="settings__description">
                Reduce the color intensity until the blue color is no longer
                visible through the red glass.
              </p>
              <input
                onChange={this.test}
                className="settings__color-intensity"
                type="range"
                id="color-intensity-circle"
                name="color-intensity-circle"
                min="0"
                max="255"
                value="255"
                step="1"
              />

              <label
                className="settings__label"
                htmlFor="color-intensity-lines"
              >
                Red color intensity
              </label>
              <p className="settings__description">
                Reduce the color intensity until the red color are no longer
                visible through the blue glass.
              </p>
              <input
                onChange={this.test}
                className="settings__color-intensity"
                type="range"
                id="color-intensity-lines"
                name="color-intensity-lines"
                min="0"
                max="255"
                value="50"
                step="1"
              />

              <div className="settings__label">Circle sequence order</div>
              <div className="settings__checkbox">
                <input
                  className="settings__checkbox-input js-settings__sequence-order"
                  type="checkbox"
                  id="sequence-order"
                  name="sequence-order"
                />
                <label
                  className="settings__checkbox-label"
                  htmlFor="sequence-order"
                >
                  Reverse circle sequence order
                </label>
              </div>
            </div>
            <div className="settings">
              <h2>Fullscreen</h2>
              <p>Enter / leave fullscreen mode.</p>
              <Button text="Toggle Fullscreen" onClick={Fullscreen.toggle} />
            </div>

            <div className="settings">
              <h2>Interval mode</h2>
              <Button text="Toggle Interval Mode" />
            </div>
          </Sidebar>
        </div>
      </div>
    );
  }
}

export default App;
