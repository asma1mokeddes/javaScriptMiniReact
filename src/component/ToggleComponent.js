import { MiniReactRender } from "../lib/react.js";
import { Component } from "../lib/react-component.js";

export class ToggleComponent extends Component {
    constructor(properties) {
        super(properties);
        this.state = {
            isOn: false,
        };
    }

    toggle = () => {
        this.state.isOn = !this.state.isOn;
        const body = document.getElementsByTagName("body")[0];
        if (this.state.isOn) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    };

    render() {
        return MiniReactRender.createElement(
            "div",
            { class: "toggle-container" },
            MiniReactRender.createElement(
                "button",
                { onclick: this.toggle },
                'Switch dark mode'
            ),
        );
    }
}