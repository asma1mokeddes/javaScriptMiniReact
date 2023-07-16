import Component from './Component.js';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, onClick } = this.props;

    const button = document.createElement('button');
    button.textContent = label;
    button.addEventListener('click', onClick);

    return button;
  }
}

export default ButtonComponent;
