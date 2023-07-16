import {MiniReactRender} from "../lib/react.js";
import {Component} from "../lib/react-component.js";

export class ModalComponent extends Component {
    constructor(properties) {
        super(properties);
        this.state = {
            isOpen: false,
        };
    }

    openModal = () => {
        this.setState({isOpen: true});
    };

    closeModal = () => {
        this.setState({isOpen: false});
    };

    render() {
        const {isOpen} = this.state;
        const {buttonText, content} = this.properties;
        if (isOpen === true) {
            return MiniReactRender.createElement(
                "div",
                {class: "modal text-center"},
                MiniReactRender.createElement(
                    "div",
                    {class: "modal-content"},
                    content
                ),
                MiniReactRender.createElement(
                    "button",
                    {class: "close", onClick: this.closeModal},
                    "×"
                ),
            );
        } else {
            return MiniReactRender.createElement(
                "div",
                {class: "container text-center modal-text"},
                "Vous pouvez cliquer sur le bouton ci-dessous pour afficher la modal",
                MiniReactRender.createElement(
                    "button",
                    {class: "container text-center button-modal", onClick: this.openModal},
                    'Open Modal'
                ),
            );
        }

    }
}