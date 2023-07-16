// classe de base pour les autres composant
class Component {
    constructor(props) {
      this.props = props;
      this.oldProps = null;
    }
  
    shouldUpdate(newProps) {
      if (!this.oldProps) {
        return true;
      }
  
      for (let key in newProps) {
        if (newProps[key] !== this.oldProps[key]) {
          return true;
        }
      }
  
      return false;
    }
  
    render() {
      throw new Error('render() method must be implemented');
    }
  
    display(newProps) {
      if (this.shouldUpdate(newProps)) {
        this.oldProps = newProps;
        const renderedContent = this.render();
        const rootElement = document.getElementById('root');
        rootElement.innerHTML = '';
        rootElement.appendChild(renderedContent);
      }
    }
  }
  
  export default Component;  