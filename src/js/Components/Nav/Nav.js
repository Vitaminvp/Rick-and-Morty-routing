import Component from "../../framework/Component";

export default class Nav extends Component {

    constructor(host, props) {
        super(host, props);
    }

    render() {
        return [
            {
                tag: 'div',
                classList: 'header',
                content: `<div class="header">
                              <h2>The Rick and Morty API</h2>
                              <p><a href="https://rickandmortyapi.com/" target="_blank">https://rickandmortyapi.com/</a></p>
                              <p>Kottans homework routing.</p>
                            </div>`
            },
            {
                tag: 'ul',
                classList: 'topnav',
                children:    [
                    {
                        tag: 'li',
                        children: [
                            {
                                tag: 'a',
                                classList: '',
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
                                classList: 'active',
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
                                attributes: [
                                    {
                                        name: 'href',
                                        value: '#/user/posts'
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