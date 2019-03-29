import Main from "../Main/Main";
import Posts from "../Posts/Posts";
import Users from "../Users/Users";
import NotFound from "../NotFound/NotFound";
import User from "../User/User";
import Login from "../Login/Login";
import {isLogged} from "../guards/guards";

export const routes = [
    {
        path: '',
        component: Main
    },
    {
        path: 'posts',
        component: Posts
    },
    {
        path: 'users',
        component: Users,
        guards: [isLogged]
    },
    {
        path: 'users/:id',
        component: User
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '404',
        component: NotFound
    }
];

