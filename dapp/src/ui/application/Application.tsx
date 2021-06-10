import { ReactRouterRender } from './Router/ReactRouterRender';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContext } from './theme/ThemeContext';
import { HomePage } from '../pages/Home/HomePage';
import { CollectiblesPage } from '../pages/Collectibles/CollectiblesPage';
import { FarmsPage } from '../pages/Farms/FarmsPage';
import { StackingPage } from '../pages/Staking/StackingPage';
import { RouteInfo } from './Router/RouteInfo';
import { PresenterFactory } from './PresenterFactory';
import { WithPresenter } from '../components/WithPresenter';

export class Application {
	private readonly routerRender: ReactRouterRender;
	private readonly presenterFactory: PresenterFactory;

	constructor() {
		this.routerRender = new ReactRouterRender();
		this.presenterFactory = new PresenterFactory();
	}

	private routes: RouteInfo[] = [
		{
			path: '/',
			component: HomePage,
		},
		{
			path: '/collectibles',
			component: this.withPresenter(CollectiblesPage, v => this.presenterFactory.collectibles(v)),
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

	private withPresenter(Component, presenterBuilder) {
		return WithPresenter(Component, presenterBuilder);
	}

	render() {
		const element = <ThemeContext>{this.routerRender.render(this.routes)}</ThemeContext>;
		ReactDOM.render(element, document.getElementById('root'));
	}
}
