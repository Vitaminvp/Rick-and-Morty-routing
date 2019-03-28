import NotFound from "../Components/NotFound/NotFound";


export default class Router {
    constructor(host, routes, App){
        this.host = host;
        this.routes = routes;
        this.NotFound = this.routes.find(route => route.path === '**');
        this.target = document.createElement('DIV');
        this.app = new App(host, {
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
        } else {
            const browserUrlArr = location.hash.split('/').slice(1);
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
        return browserUrlArr.every((urlPart, i) => routePathArr[i] === urlPart || routePathArr[i].startsWith(':'));
    }
    renderComponent(route, params){
        if(route.guards){
            const checkGuards = route.guards.every(guard => guard());
            if(!checkGuards) return;
        }
        const newComponent = new route.component(this.target, params);
    }
}



