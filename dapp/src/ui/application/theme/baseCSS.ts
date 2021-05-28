import { createGlobalStyle } from 'styled-components';
import { Mode } from './theme';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
   box-sizing: border-box;
}

body {
    background: ${({ theme }) => {
		const themeMode = theme as Mode;
      	return themeMode.backgroundColor;
    }};
    color: ${({ theme }) => {
      const themeMode = theme as Mode;
      return themeMode.textColor;
    }};
    min-height: 100vh;
  	scroll-behavior: smooth;
  	text-rendering: optimizeSpeed;
  	line-height: 1.5;
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	font-family: 'Open Sans', sans-serif;
  	transition: all 0.25s linear;
  	button {
	  background-color: ${({ theme }) => {
        const themeMode = theme as Mode;
        return themeMode.buttonBackgroundColor;
      }};
	  border: 0;
	  cursor: pointer;
	  color: #FF5733;
      border-radius: 5px;
      font-size: 18px;
	};
  
  .hover_animation:hover {
	transform: translateY(-15px);
    transition: all 0.25s ease-in-out;
  }
}`;