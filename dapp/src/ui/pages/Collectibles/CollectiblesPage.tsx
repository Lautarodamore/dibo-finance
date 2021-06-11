import React from 'react';
import styled from 'styled-components';
import { Mode } from '../../application/theme/theme';
import { CollectiblesPresenter, CollectiblesView, CollectiblesVM } from './CollectiblesPresenter';
import { Presentable } from '../../components/Presentable';

interface State {
	collectibles: CollectiblesVM[];
}

interface Props {
}

export class CollectiblesPage extends Presentable<CollectiblesPresenter, Props, State> implements CollectiblesView {
	state: State = {
		collectibles: [],
	}

	componentDidMount() {
		this.presenter.start();
	}

	showCollectibles(collectibles: CollectiblesVM[]) {
		this.setState({ collectibles });
	}

	render(): JSX.Element {
		return <>
			<div>
				<h2 style={{ color: '#FF5733' }}>DIBO Collectibles</h2>
			</div>
			<CollectiblesLayout>
				{
					this.state.collectibles.map((collectible, index) =>
						<CollectibleCard key={index} className={'hover_animation'}>
							<img
								src={collectible.url}
								alt={'Burbujas'}
								title={'Burbjujas'}
							/>
							<div className={'collectible_detail'}>
								<p>{collectible.title}</p>
							</div>
						</CollectibleCard>
					)
				}
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