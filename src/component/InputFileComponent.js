import { MiniReactRender } from "../lib/react.js";
import { Component } from "../lib/react-component.js";

export class InputFileComponent extends Component {
  constructor(properties) {
    super(properties);
  }

  displayAlert() {
    let reader = new FileReader();
    reader.readAsText(document.getElementById("fileInput").files[0], "utf-8");
    reader.onload = function(e) {
      alert(reader.result);
    };
  }

  render() {
    return  MiniReactRender.createElement(
      "div",
      { class: "container text-center" },
      MiniReactRender.createElement(
        "input",
        { type: "file", id: "fileInput", onchange: this.displayAlert },
        ""
      )
    );
  }
}