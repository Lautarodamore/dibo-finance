import React from 'react';
import { RouteComponentProps } from 'react-router';

export interface RouteInfo {
	path: string;
	component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
	layout?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}