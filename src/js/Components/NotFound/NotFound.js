import Component from "../../framework/Component";
export default class NotFound extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: 'p',
        content: 'NotFound'
      }
    ];
  }
}
