import React from 'react';
import styled from 'styled-components';
import { Mode } from '../../application/theme/theme';
import { CollectiblesPresenter, CollectiblesView } from './CollectiblesPresenter';
import { Presentable } from '../../components/Presentable';

export class CollectiblesPage extends Presentable<CollectiblesPresenter> implements CollectiblesView {
	componentDidMount() {
		this.presenter.start();
	}

	hiView(): void {
		console.log('Hi view!');
	}

	render(): JSX.Element {
		return <>
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
		</>;
	}
}

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