import { IconTheme } from './IconTheme';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export const Navigation: React.FC<Props> = ({ toggleTheme, theme }) => {
	const history = useHistory();
	return <>
		<NavigationLayout>
			<Logo>
				<h1 style={{ cursor: 'pointer' }} onClick={() => history.push('/')}><span style={{ color: '#FF5733' }}>DIBO</span> Finance</h1>
			</Logo>
			<NavigationButtons>
				<button onClick={() => history.push('/collectibles')}>Collectibles</button>
				<button onClick={() => history.push('/farms')}>Farms</button>
				<button onClick={() => history.push('/stacking')}>Staking</button>
			</NavigationButtons>
			<MyWallet>
				<div>
					<button>0x9ef...0b14</button>
				</div>
				<div onClick={toggleTheme}>
					<IconTheme lightThemeOn={theme === 'light'} />
				</div>
			</MyWallet>
		</NavigationLayout>
	</>;
};

interface Props {
	toggleTheme: () => void;
	theme: string;
}

const NavigationLayout = styled.div`
	display: flex;
	justify-content: space-between;  	
`;

const Logo = styled.div`
	margin-right: 20px;
`;

const NavigationButtons = styled.div`
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
