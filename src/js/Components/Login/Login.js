import Component from "../../framework/Component";

export default class Login extends Component {

  constructor(host, props) {
    super(host, props);
  }

  isLogged() {
    return localStorage.getItem('user');
  }

  login() {
    localStorage.setItem('user', 'user');
    this.updateState();
  }

  logout() {
    localStorage.removeItem('user');
    this.updateState();
  }
  render() {
    if (this.isLogged()) {
      return [
        {
          tag: 'button',
          content: 'Logout',
          eventHandlers: {
            click: this.logout.bind(this),
          },
        }
      ]
    } else {
      return [
        {
          tag: 'button',
          content: 'Login',
          eventHandlers: {
            click: this.login.bind(this),
          },
        }
      ]
    }

  }


}