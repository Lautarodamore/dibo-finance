import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, Mode } from '../theme/theme';
import { GlobalStyles } from '../theme/baseCSS';
import { IconTheme } from './IconTheme';

export const App = (): JSX.Element => {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles/>
				<MainLayout>
					<NavigationLayout>
						<Logo>
							<h1><span style={{ color: '#FF5733' }}>DIBO</span> Finance</h1>
						</Logo>
						<Navigation>
							<button>Collectibles</button>
							<button>Farms</button>
							<button>Staking</button>
						</Navigation>
						<MyWallet>
							<div>
								<button>0x9ef...0b14</button>
							</div>
							<div onClick={toggleTheme}>
								<IconTheme lightThemeOn={theme === 'light'} />
							</div>
						</MyWallet>
					</NavigationLayout>
					<ContentLayout>
						<div>
							<h2 style={{ color: '#FF5733' }}>DIBO Collectibles</h2>
						</div>
						<CollectiblesLayout>
							<CollectibleCard className={'hover_animation'}>
								<img
									src={'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80'}
									alt={'Burbujas'}
									title={'Burbjujas'}
								/>
								<div className={'collectible_detail'}>
									<p>Lorem ipsum </p>
								</div>
							</CollectibleCard>
							<CollectibleCard className={'hover_animation'}>
								<img
									src={'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80'}
									alt={'Burbujas'}
									title={'Burbjujas'}
								/>
								<div className={'collectible_detail'}>
									<p>Lorem ipsum </p>
								</div>
							</CollectibleCard>
							<CollectibleCard className={'hover_animation'}>
								<img
									src={'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80'}
									alt={'Burbujas'}
									title={'Burbjujas'}
								/>
								<div className={'collectible_detail'}>
									<p>Lorem ipsum </p>
								</div>
							</CollectibleCard>
							<CollectibleCard className={'hover_animation'}>
								<img
									src={'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80'}
									alt={'Burbujas'}
									title={'Burbjujas'}
								/>
								<div className={'collectible_detail'}>
									<p>Lorem ipsum </p>
								</div>
							</CollectibleCard>
							<CollectibleCard className={'hover_animation'}>
								<img
									src={'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80'}
									alt={'Burbujas'}
									title={'Burbjujas'}
								/>
								<div className={'collectible_detail'}>
									<p>Lorem ipsum </p>
								</div>
							</CollectibleCard>
							<CollectibleCard className={'hover_animation'}>
								<img
									src={'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80'}
									alt={'Burbujas'}
									title={'Burbjujas'}
								/>
								<div className={'collectible_detail'}>
									<p>Lorem ipsum </p>
								</div>
							</CollectibleCard>
							<CollectibleCard className={'hover_animation'}>
								<img
									src={'https://images.unsplash.com/photo-1589585686575-3d7b754a9ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=789&q=80'}
									alt={'Burbujas'}
									title={'Burbjujas'}
								/>
								<div className={'collectible_detail'}>
									<p>Lorem ipsum </p>
								</div>
							</CollectibleCard>
						</CollectiblesLayout>
					</ContentLayout>
				</MainLayout>
		</ThemeProvider>
    );
};

const MainLayout = styled.div`
	display: flex;
  	flex-direction: column;
  	width: 80%;
  	margin: auto;
`;

const NavigationLayout = styled.div`
	display: flex;
	justify-content: space-between;  	
`;

const Logo = styled.div`
	margin-right: 20px;
`;

const Navigation = styled.div`
  	align-self: center;
	button {
	  margin-left: 10px;
	  margin-right: 10px;
	  width: 115px;
	  height: 35px;
	}
`;

const MyWallet = styled.div`
  	display: flex;
  	div {
      height: 35px;
    }
	button {
		margin-left: 10px;
		margin-right: 10px;
		width: 120px;
		height: 35px;
	}
  	align-self: center;
`;

const ContentLayout = styled.div`
	display: flex;
	flex-direction: column;
`;

const CollectiblesLayout = styled.div`
	display: flex;
  	flex-wrap: wrap;
`;

const CollectibleCard = styled.div`
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
	max-width: 400px;
  	border-radius: 5px;
  	margin: 10px;
  	background-color: ${({ theme }) => {
    	const themeMode = theme as Mode;
    	return themeMode.buttonBackgroundColor;
  	}};
  
  	img {
      border-radius: 5px;
	  width: 100%;
	}
    
    .collectible_detail {
      	text-align: center;
	}
`;