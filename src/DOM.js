export class SimpleVirtualDOM {
  constructor(tag, props, children) {
    this.tag = tag;
    this.props = props;
    this.children = children;
  }

  render() {
    const element = document.createElement(this.tag);

    for (const prop in this.props) {
      element.setAttribute(prop, this.props[prop]);
    }

    this.children.forEach((child) => {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child.render());
      }
    });

    return element;
  }
}
