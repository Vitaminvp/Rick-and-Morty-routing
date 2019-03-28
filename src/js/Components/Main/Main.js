import Component from "../../framework/Component";
export default class Main extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
          {
            tag: 'p',
            content: 'main'
          }
        ];
  }
}
