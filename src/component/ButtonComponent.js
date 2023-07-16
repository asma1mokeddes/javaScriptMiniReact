import { MiniReactRender } from "../lib/react.js";
import { Component } from "../lib/react-component.js";

export class ButtonComponent extends Component {
  constructor(properties) {
    super(properties);
  }

  render() {
    const result = MiniReactRender.createElement(
      "button",
      { class: "btn", onclick: this.properties.onClick },
      `Restart`
    );
    return result;
  }
}