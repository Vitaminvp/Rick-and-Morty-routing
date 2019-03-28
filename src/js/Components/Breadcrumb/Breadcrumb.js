import Component from "../../framework/Component";

export default class Breadcrumb{

  constructor(host, props) {
    this.props = props;
  }


  render() {
    if (this.props) {
      return [
        {
          tag: 'button',
          content: 'Logout'
        }
      ]
    } else {
      return [
        {
          tag: 'button',
          content: 'Breadcrumb'
        }
      ]
    }

  }


}