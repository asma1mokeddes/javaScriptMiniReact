import Component from './Component.js';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;

    const header = document.createElement('h1');
    header.textContent = title;

    return header;
  }
}

export default HeaderComponent;
