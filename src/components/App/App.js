import React from 'react';
import './App.css';
import Button from '../Button/Button';
import Fullscreen from '../../helpers/fullscreen';


function App() {
  function test() {
    console.log('test');
  }

  return (
    <div className="App">
      <div className="wrapper">
    <main className="main">
      <object id="svg-object" type="image/svg+xml">Graphic</object>
    </main>
    <aside className="right right--fullopacity">
      <div className="settings">
        <h2>Settings</h2>

        <div className="settings__label">Shape</div>
        <div className="settings__radio js-settings__radio">

          <div className="settings__radio-option">
            <input
                className="settings__radio-input js-settings__shape"
                type="radio"
                id="shape-8"
                name="shape"
                value="8-figure"
                checked="checked"
                onChange={test}
            />
            <label className="settings__radio-label" htmlFor="shape-8">8 Figure</label>
          </div>

          <div className="settings__radio-option">
            <input
                className="settings__radio-input js-settings__shape"
                type="radio"
                id="shape-line-vertical"
                name="shape"
                value="line-vertical"
            />
            <label className="settings__radio-label" htmlFor="shape-line-vertical">Vertical Line</label>
          </div>

          <div className="settings__radio-option">
            <input
                className="settings__radio-input js-settings__shape"
                type="radio"
                id="shape-line-horizontal"
                name="shape"
                value="line-horizontal"
            />
            <label className="settings__radio-label" htmlFor="shape-line-horizontal">Horizontal Line</label>
          </div>

          <div className="settings__radio-option">
            <input
                className="settings__radio-input js-settings__shape"
                type="radio"
                id="shape-cross"
                name="shape"
                value="cross"
            />
            <label className="settings__radio-label" htmlFor="shape-cross">Cross</label>
          </div>

          <div className="settings__radio-option">
            <input
                className="settings__radio-input js-settings__shape"
                type="radio"
                id="shape-meeting-lines-vertical"
                name="shape"
                value="meeting-lines-vertical"
            />
            <label className="settings__radio-label" htmlFor="shape-meeting-lines-vertical">Meeting Lines Vertical</label>
          </div>

          <div className="settings__radio-option">
            <input
                className="settings__radio-input js-settings__shape"
                type="radio"
                id="shape-meeting-triangles-vertical"
                name="shape"
                value="meeting-triangles-vertical"
            />
            <label className="settings__radio-label" htmlFor="shape-meeting-triangles-vertical">Meeting Triangles Vertical</label>
          </div>

        </div>

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
                onChange={test}
            />
            <label className="settings__radio-label" htmlFor="color-scheme-dark">Dark</label>
          </div>

          <div className="settings__radio-option">
            <input
                className="settings__radio-input js-settings__color-scheme"
                type="radio"
                id="color-scheme-bright"
                name="color-scheme"
                value="color-scheme-bright"
            />
            <label className="settings__radio-label" htmlFor="color-scheme-bright">Bright</label>
          </div>
        </div>

        <label className="settings__label" htmlFor="color-intensity-circle">Blue color intensity</label>
        <p className="settings__description">Reduce the color intensity until the blue color is no longer visible through the red glass.</p>
        <input onChange={test} className="settings__color-intensity" type="range" id="color-intensity-circle" name="color-intensity-circle" min="0" max="255" value="255" step="1" />

        <label className="settings__label" htmlFor="color-intensity-lines">Red color intensity</label>
        <p className="settings__description">Reduce the color intensity until the red color are no longer visible through the blue glass.</p>
        <input onChange={test} className="settings__color-intensity" type="range" id="color-intensity-lines" name="color-intensity-lines" min="0" max="255" value="50" step="1"/>

        <div className="settings__label">Circle sequence order</div>
        <div className="settings__checkbox">
          <input className="settings__checkbox-input js-settings__sequence-order" type="checkbox" id="sequence-order" name="sequence-order"/>
          <label className="settings__checkbox-label" htmlFor="sequence-order">Reverse circle sequence order</label>
        </div>
      </div>
      <div className="settings">
        <h2>Fullscreen</h2>
        <p>Enter / leave fullscreen mode.</p>
        <Button text="Toggle Fullscreen" onClick={Fullscreen.toggle}/>
      </div>

      <div className="settings">
        <h2>Interval mode</h2>
        <Button text="Toggle Interval Mode" />
      </div>
    </aside>
  </div>
    </div>
  );
}

export default App;