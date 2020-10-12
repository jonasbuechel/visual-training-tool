import React from "react";
import "./App.css";
import Button from "../Button/Button";
import Sidebar from "../Sidebar/Sidebar";
import Radio from "../Radio/Radio";
import Rangeslider from "../Rangeslider/Rangeslider";
import Fullscreen from "../../helpers/fullscreen";
import Cursor from "../../helpers/cursor";

class App extends React.Component {
  test(prop) {
    console.log(prop);
  }

  componentDidMount() {
    Cursor.autoHide(500);
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
                onChange={(value) => this.test(value)}
                label="8 Figure"
              />

              <Radio
                id="shape-line-vertical"
                name="shape"
                value="shape-line-vertical"
                checked={false}
                onChange={(value) => this.test(value)}
                label="Vertical Line"
              />

              <Radio
                id="shape-line-horizontal"
                name="shape"
                value="shape-line-horizontal"
                checked={false}
                onChange={(value) => this.test(value)}
                label="Horizontal Line"
              />

              <Radio
                id="shape-cross"
                name="shape"
                value="shape-cross"
                checked={false}
                onChange={(value) => this.test(value)}
                label="Cross"
              />

              <Radio
                id="shape-meeting-lines-vertical"
                name="shape"
                value="shape-meeting-lines-vertical"
                checked={false}
                onChange={(value) => this.test(value)}
                label="Meeting Lines Vertical"
              />

              <Radio
                id="shape-meeting-triangles-vertical"
                name="shape"
                value="shape-meeting-triangles-vertical"
                checked={false}
                onChange={(value) => this.test(value)}
                label="Meeting Triangles Vertical"
              />

              <div className="settings__label">Color Scheme</div>

              <Radio
                id="color-scheme-dark"
                name="color-scheme"
                value="color-scheme-dark"
                checked={true}
                onChange={(value) => this.test(value)}
                label="Dark"
              />

              <Radio
                id="color-scheme-bright"
                name="color-scheme"
                value="color-scheme-bright"
                checked={false}
                onChange={(value) => this.test(value)}
                label="Bright"
              />

              <Rangeslider
                onChange={(value) => this.test(value)}
                id="color-intensity-circle"
                min="0"
                max="255"
                defaultValue="255"
                step="1"
                label="Blue color intensity"
                description="Reduce the color intensity until the blue color is no longer
                visible through the red glass."
              />

              <Rangeslider
                onChange={(value) => this.test(value)}
                id="color-intensity-lines"
                min="0"
                max="255"
                defaultValue="255"
                step="1"
                label="Red color intensity"
                description="Reduce the color intensity until the red color are no longer
                visible through the blue glass."
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
              <Button text="Toggle Interval Mode" onClick={this.test} />
            </div>
          </Sidebar>
        </div>
      </div>
    );
  }
}

export default App;
