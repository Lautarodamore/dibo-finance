import { ReactRouterRender } from './Router/ReactRouterRender';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContext } from './theme/ThemeContext';

export class Application {
	private readonly routerRender: ReactRouterRender;

	constructor() {
		this.routerRender = new ReactRouterRender();
	}

	render() {
		const element = <ThemeContext>
			{this.routerRender.render()}
		</ThemeContext>;
		ReactDOM.render(element, document.getElementById('root'));
	}
}
