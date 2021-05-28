import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../../pages/Home/HomePage';
import { CollectiblesPage } from '../../pages/Collectibles/CollectiblesPage';
import { FarmsPage } from '../../pages/Farms/FarmsPage';
import { StackingPage } from '../../pages/Staking/StackingPage';
import { RouteComponentProps } from 'react-router';
import React from 'react';

export class ReactRouterRender {
	private routes: RouteInfo[] = [
		{
			path: '/',
			component: HomePage,
		},
		{
			path: '/collectibles',
			component: CollectiblesPage,
		},
		{
			path: '/farms',
			component: FarmsPage,
		},
		{
			path: '/stacking',
			component: StackingPage,
		},
	];

	private renderRoute(route: RouteInfo, idx: number) {
		return <Route key={idx} exact path={route.path} component={this.getRouteComponent(route.component)}/>;
	}

	private getRouteComponent(Component) {
		return props => <Component {...props} />;
	}

	render() {
		return <Switch>
			{this.routes.map(this.renderRoute.bind(this))}
		</Switch>;
	}
}

interface RouteInfo {
	path: string;
	component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}