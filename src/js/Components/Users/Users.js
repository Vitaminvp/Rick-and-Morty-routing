import Component from "../../framework/Component";
import {getData} from "../../Services/api";
import {createPagination} from "../../constants";

export default class Users extends Component {

    constructor(host, props) {
        super(host, props);
    }

    init() {
        this.handlePaginationClick = this.handlePaginationClick.bind(this);
        this.getUsers();

    }

    getUsers(url='', currentPage=1) {
        getData(url).then(res => {
            if(res)
                this.updateState({...res, currentPage});
        }).catch(err => {
            this.error = err;
            this.render();
        });
    }

    handlePaginationClick(e){
        const currentPage = e.target.dataset.page;
        this.getUsers(`?page=${currentPage}`, currentPage);
    }
    render() {
        if (!this.state) {
            return [
                {
                    tag: 'p',
                    content: 'Loading....'
                }
            ]
        } else {
            return [
                {
                tag: 'div',
                classList: 'wrapper',
                children:

                    this.state.results.map(user => {
                        return                    {
                            tag: 'div',
                            classList: 'gallery',
                            children: [
                                {
                                    tag: 'a',
                                    attributes: [
                                        {
                                            name: 'href',
                                            value: `#/user/${user.id}`
                                        }
                                    ],
                                    children: [
                                        {
                                            tag: 'img',
                                            classList: 'gallery_img',
                                            attributes: [
                                                {
                                                    name: 'src',
                                                    value: user.image
                                                },
                                                {
                                                    name: 'alt',
                                                    value: `#/user/${user.name}`
                                                },
                                            ],
                                        }
                                    ]
                                },
                                {
                                    tag: 'div',
                                    classList: 'desc',
                                    content: user.name,
                                }
                            ]
                        }
                    })
                },
                {
                    tag: 'div',
                    content: createPagination( this.state.info['pages'], this.state.currentPage ),
                    eventHandlers: {
                        click: this.handlePaginationClick,
                    },
                }
            ]
        }

    }
}
