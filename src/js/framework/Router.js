import {Breadcrumb} from "../Components/Breadcrumb";


export default class Router {
    constructor(host, routes, App){
        this.host = host;
        this.routes = routes;
        this.NotFound = this.routes.find(route => route.path === '404');
        this.breadcrumb = document.createElement('DIV');
        this.target = document.createElement('DIV');
        this.app = new App(host, {
            breadcrumb: this.breadcrumb,
            target: this.target
        });
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleUrlChange();

        window.addEventListener('hashchange', this.handleUrlChange)
    }

    init(){
    };

    handleUrlChange(){
        if(!location.hash){
            location.assign(`/#${location.pathname}`);
        } else if (!location.hash.slice(2).startsWith('/')) {
            location.assign(`#/${location.hash.slice(2)}`);
        } else {
            const browserUrlArr = location.hash.split('/').slice(2);
            this.findRoute(browserUrlArr);
        }

    }

    findRoute(browserUrlArr){
        const foundedRoute = this.routes.find(route => this.isUrlEqualRoute(browserUrlArr, route));
        if(!foundedRoute){
            this.renderComponent(this.NotFound);
        }else {
            const params = this.getParamsFromUrl(foundedRoute.path, browserUrlArr);
            console.log("foundedRoute.path", foundedRoute.path);
            this.renderComponent(foundedRoute, params);

        }
    }
    getParamsFromUrl(routePath, browserUrlArr){
        const routerPathArr = routePath.split('/');
        if(browserUrlArr.length !== 1){
            return routerPathArr.reduce((acc, cur, i) => {
                if(cur !== browserUrlArr[i]){
                    acc[cur.slice(1)] = browserUrlArr[i];
                }
                return acc;
            }, {});
        }
    }

    isUrlEqualRoute(browserUrlArr, route){
        const routePathArr = route.path.split('/');
        return browserUrlArr.every((urlPart, i) => routePathArr[i] && routePathArr[i].startsWith(':') || routePathArr[i] === urlPart );
    }
    renderComponent(route, params){
        if(route.guards){
            const checkGuards = route.guards.every(guard => guard());
            if(!checkGuards) return;
        }
        //console.log("route", route);
        //console.log("params", params);
        const breadcrumbs = new Breadcrumb(this.breadcrumb, { path: route.path });
        const newComponent = new route.component(this.target, params);
    }
}



