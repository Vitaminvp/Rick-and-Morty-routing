import Component from "../../framework/Component";
import AppState from "../../Services/AppState";

export default class Nav extends Component {

    constructor(host, props) {
        super(host, props);
        this.checkLocationAndHref();
        AppState.watch('PATH', this.handlePathChange);
    }
    init(){
        this.state = {
            linkHref: ''
        };
        this.checkLocationAndHref = this.checkLocationAndHref.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.checkClassActive = this.checkClassActive.bind(this);
        this.handlePathChange = this.handlePathChange.bind(this);
    }
    handlePathChange(){
        this.updateState({linkHref: ''});
    }
    handleClick(e){
        this.checkLocationAndHref(e);
    }

    checkLocationAndHref(e){
        if(e && e.target.classList.contains('topnav-link')) {
            if(!e.target.classList.contains('active')){
                this.updateState({
                    linkHref: e.target.getAttribute("href")
                });
            }
        }

    }

    checkClassActive(page=''){
        const { linkHref } = this.state;
        const locationUrl = location.hash.slice(2);
        if (linkHref){
            const linkHrefSlice = linkHref.slice(2);
            if (linkHrefSlice.includes(page) ){
                return true;
            }
            else  return page === 'main' && linkHrefSlice === '';

        } else {
            if (locationUrl.includes(page)){
                return true;
            }
            else return locationUrl === '' && page === 'main';
        }

    }

    render() {
        return [
            {
                tag: 'div',
                classList: 'header',
                content: `<div class="header">
                              <h2><a href="https://github.com/kottans">#Kottans</a> Homework routing.</h2>
                              <p><a href="https://rickandmortyapi.com/" target="_blank">The Rick and Morty API</a></p>
                            </div>`
            },
            {
                tag: 'ul',
                classList: 'topnav',
                eventHandlers: {
                    click: this.handleClick,
                },
                children:    [
                    {
                        tag: 'li',
                        children: [
                            {
                                tag: 'a',
                                classList: this.checkClassActive('main') ? ['topnav-link', 'active'] : ['topnav-link'],
                                attributes: [
                                    {
                                        name: 'href',
                                        value: '#/'
                                    },
                                ],
                                content: 'Main'
                            }
                        ]
                    },
                    {
                        tag: 'li',
                        children: [
                            {
                                tag: 'a',
                                classList:  this.checkClassActive('users') ? ['topnav-link','active'] : ['topnav-link'],
                                attributes: [
                                    {
                                        name: 'href',
                                        value: '#/users'
                                    },
                                ],
                                content: 'Users'
                            }
                        ]
                    },
                    {
                        tag: 'li',
                        children: [
                            {
                                tag: 'a',
                                classList: this.checkClassActive('posts') ? ['topnav-link', 'active'] : ['topnav-link'],
                                attributes: [
                                    {
                                        name: 'href',
                                        value: '#/posts'
                                    },
                                ],
                                content: 'Posts'
                            }
                        ]
                    },
                    {
                        tag: 'li',
                        classList: 'right',
                        children: [
                            {
                                tag: 'a',
                                classList: this.checkClassActive('login') ? ['topnav-link', 'active'] : ['topnav-link'],
                                attributes: [
                                    {
                                        name: 'href',
                                        value: '#/login'
                                    },
                                ],
                                content: 'Login'
                            }
                        ]
                    },
                ]
            }
        ]
    }
}