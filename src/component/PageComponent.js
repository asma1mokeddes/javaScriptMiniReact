import { MiniReactRender } from "../lib/react.js";
import { Component } from "./../lib/react-component.js";

export class PageComponent extends Component {
  constructor(properties) {
    super(properties);
  }

  render = () => {
    const result = MiniReactRender.createElement("div", { id: "main" },
      MiniReactRender.createElement("div", {id: "header"}, ""),
      MiniReactRender.createElement("div", {id: "content"}, "")
    );
    return result;
  };
}