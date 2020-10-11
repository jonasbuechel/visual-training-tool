import React from "react";
import "./Sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.hide();
    }, 2000);
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    const className = `sidebar ${
      this.state.visible ? "sidebar--fullopacity" : ""
    }`;

    return (
      <aside
        className={className}
        onMouseEnter={() => this.show()}
        onMouseLeave={() => this.hide()}
      >
        {this.props.children}
      </aside>
    );
  }
}

export default Sidebar;
