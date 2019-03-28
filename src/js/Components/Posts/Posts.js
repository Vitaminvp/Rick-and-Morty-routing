import Component from "../../framework/Component";

export default class Posts extends Component {
    constructor(host, props) {
        super(host, props);
    }

    render() {
        return [
            {
                tag: 'p',
                content: 'posts'
            }
        ];
    }
}
