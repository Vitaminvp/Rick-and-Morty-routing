import Component from "../../framework/Component";
import { getData } from "../../Services/api";
import AppState from "../../Services/AppState";

export default class User extends Component {

  constructor(host, props) {
    super(host, props);
    this.userId = props.id;
    this.getUser();
  }
  getUser() {
    getData(`${this.userId}`).then(res => {

      this.updateState({user: res});
      AppState.update('ID', {id: this.userId, name: res.name });

      console.log("this.state", this.state);
    }).catch(err => {
      this.error = err;
      this.render();
    });
  }

  render() {
    if(!this.state) {
      return [
        {
          tag: 'p',
          content: 'Loading....'
        }
      ]
    } else {
      const { user } = this.state;
      return [
        {
          tag: 'p',
          content: user ? user.name : ''
        },
        {
          tag: 'p',
          content: user.gender
        },
        {
          tag: 'p',
          content: user.created
        },
        {
          tag: 'p',
          content: user.status
        },
        {
          tag: 'p',
          content: user.species
        },

        {
          tag: 'div',
          classList: ['img'],
          content: `<img  src="${user.image}" alt="${user.name}" title="${user.name}" >`//'<i class="fas fa-cloud-sun-rain"></i>'
        }
      ]
    }

  }
}