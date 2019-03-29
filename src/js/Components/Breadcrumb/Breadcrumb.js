import Component from "../../framework/Component";
import AppState from "../../Services/AppState";

export default class Breadcrumb extends Component {

    constructor(host, props) {
        super(host, props);
        this.props = props;
        this.handleIDChange = this.handleIDChange.bind(this);
        AppState.watch('ID', this.handleIDChange);
    }
    handleIDChange(state){
        this.updateState(state);
        console.log("ID", state);
    }

    render() {
        console.log("this.props", this.props);
        return [
            {
                tag: 'div',
                classList: 'breadcrumb',
                children: [
                    {
                        tag: 'a',
                        classList: 'breadcrumbs-link',
                        content: 'Main',
                        attributes: [
                            {
                                name: 'href',
                                value: '#/'
                            },
                        ],
                    },
                    ...this.props.path.split('/').slice(0).map((item, i) => {
                        if(item){
                            if(item === ':id'){
                                return {
                                    tag: 'span',
                                    classList: 'breadcrumbs-link',
                                    content: this.state ? this.state.name: ''
                                }
                            } else {
                                return {
                                    tag: 'a',
                                    classList: 'breadcrumbs-link',
                                    content: item === ':id'? this.state ? this.state.name: '' : item,
                                    attributes: [
                                        {
                                            name: 'href',
                                            value: item === ':id'?  '' : `#/${item}` //this.state ? `${item[i-1]}/${this.state.id}`:
                                        },
                                    ],
                                }
                            }
                        }
                        else {
                            return '';
                        }
                    })
                ]
            }
        ];
    }


}