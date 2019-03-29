import Component from "../../framework/Component";
import Nav from "../Nav/Nav";

export default class App extends Component {
    constructor(host, props) {
        super(host, props);
    }

    render() {
        return [
            {
                tag: Nav,
                props: {}
            },
            this.props.breadcrumb,
            this.props.target
        ];

    }
}
