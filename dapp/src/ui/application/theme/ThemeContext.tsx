import { darkTheme, lightTheme } from './theme';
import { GlobalStyles } from './baseCSS';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';
import { Navigation } from '../../components/Navigation';

export const ThemeContext: React.FC = (props) => {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles/>
			<Router>
				<MainLayout>
					<Navigation toggleTheme={toggleTheme} theme={theme}/>
					<ContentLayout>
						{props.children}
					</ContentLayout>
				</MainLayout>
			</Router>
		</ThemeProvider>
	);
};

const MainLayout = styled.div`
	display: flex;
  	flex-direction: column;
  	width: 80%;
  	margin: auto;
`;

const ContentLayout = styled.div`
	display: flex;
	flex-direction: column;
`;