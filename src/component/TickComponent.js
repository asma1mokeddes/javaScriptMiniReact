import { type_check } from "../lib/react-utils.js";
import { MiniReactRender } from "../lib/react.js";
import { Component } from "../lib/react-component.js";

export class TickComponent extends Component {
  constructor(properties) {
    super(properties);
    setInterval(this.tick, properties.interval);
    if (this.specs) type_check(properties, this.specs);
  }

  render = () => {
    return  MiniReactRender.createElement(
      "div",
      { class: "container text-center" },
      MiniReactRender.createElement(
        "h1",
        { class: "icecub", id: "horloge" },
        `${
          this.state.ticker == null
            ? new Date().toLocaleTimeString()
            : this.state.ticker
        }`
      )
    );
  };

  tick = () => {
    const time = new Date().toLocaleTimeString();
    this.setState({ ticker: time });
  };

  specs = {
    properties: {
      interval: { type: "number" }
    }
  };
}