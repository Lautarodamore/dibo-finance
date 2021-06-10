import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { RouteInfo } from './RouteInfo';

export class ReactRouterRender {
	private renderRoute(route: RouteInfo, idx: number) {
		return <Route key={idx} exact path={route.path} component={this.getRouteComponent(route.component)}/>;
	}

	private getRouteComponent(Component) {
		return props => <Component {...props} />;
	}

	render(routes: RouteInfo[]) {
		return <Switch>
			{routes.map(this.renderRoute.bind(this))}
		</Switch>;
	}
}
