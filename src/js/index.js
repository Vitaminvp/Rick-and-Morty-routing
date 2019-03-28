import {App} from './Components/App/';
import Router from "./framework/Router";
import {routes} from "./Components/routes/routes";

const router = new Router(document.getElementById('app'), routes, App);
router.init();