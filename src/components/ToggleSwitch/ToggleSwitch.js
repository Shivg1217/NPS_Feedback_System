import React, { Component } from "react";
import Switch from "react-switch";

class ToggleSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        <div style={{ margin: "22px 10px 10px 0px", boxShadow: "0px 0px 2px 0px #808080", borderRadius: "13px" }}>
          <Switch
            offColor="#fff"
            onColor="#fff"
            offHandleColor="#808080"
            onHandleColor="#808080"
            onChange={this.handleChange}
            checked={this.state.checked}
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "black",
                  padding: "4px",
                }}
              >
                AR
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "black",
                  padding: "4px",
                }}
              >
                EN
              </div>
            }
          />
        </div>
      </label>
    );
  }
}

export default ToggleSwitch;
